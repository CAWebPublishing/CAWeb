<?php
/**
 * CAWeb Live Drafts
 *
 * @source https://plugins.trac.wordpress.org/browser/live-drafts/
 *
 * @package CAWeb
 */

add_action( 'load-post.php', 'caweb_live_drafts_init' );
add_action( 'load-post-new.php', 'caweb_live_drafts_init' );

add_action( 'publish_future_post', 'caweb_live_drafts_publish_future_post' );

function caweb_live_drafts_init() {

	// Admin head.
	add_action( 'admin_head-post.php', 'caweb_live_drafts_admin_head' );

	caweb_live_drafts_post_hooks();

	// Admin footer.
	add_action( 'admin_footer-post.php', 'caweb_live_drafts_admin_footer', 10 );

	add_action( 'admin_notices', 'caweb_live_drafts_admin_notice' );
}

function caweb_live_drafts_post_hooks( $add = true ) {

	if ( $add ) {
		// Pre-post update.
		add_action( 'pre_post_update', 'caweb_live_drafts_pre_post_update', 10, 2 );

		// Save Post Action.
		add_action( 'save_post', 'caweb_live_drafts_post_update', 10, 2 );

	} else {
		// Pre-post update.
		remove_action( 'pre_post_update', 'caweb_live_drafts_pre_post_update' );

		// Save Post Action.
		remove_action( 'save_post', 'caweb_live_drafts_post_update' );

	}

}

function caweb_live_drafts_publish_future_post( $post_id ) {
	// Check for post meta that identifies this as a 'draft of a live page'.
	$_pc_live_id = get_post_meta( $post_id, '_pc_liveId', true );

	if ( empty( $_pc_live_id ) ) {
		return;
	}

	$post_data = get_post( $post_id, ARRAY_A );

	// Duplicate post and replace live page.
	$updated_post = caweb_live_drafts_duplicate_post(
		$post_data,
		array(
			'ID'             => $_pc_live_id,
			'post_status'    => 'publish',
			'post_content'   => isset( $post_data['post_content'] ) ? $post_data['post_content'] : ( is_object( $post_data ) ? $post_data->post_content : '' ),
		)
	);

	/**
	* Avoiding infinite loop
	*
	* @link https://developer.wordpress.org/reference/hooks/save_post/#avoiding-infinite-loops
	*/
	// unhook actions.
	caweb_live_drafts_post_hooks( false );

	// Insert the post into the database.
	wp_update_post( $updated_post );

	// re-hook action.
	caweb_live_drafts_post_hooks();

	// Clear existing meta data.
	$existing = get_post_custom( $_pc_live_id );
	foreach ( $existing as $ekey => $evalue ) {
		delete_post_meta( $_pc_live_id, $ekey );
	}

	// Migrate custom meta data from draft.
	caweb_live_drafts_migrate_post_meta( $post_id, $_pc_live_id, array( '_pc_liveId', '_pc_draftId' ) );

	// Delete draft post, force delete since 2.9, no sending to trash.
	wp_delete_post( $post_id, true );

}

function caweb_live_drafts_admin_head() {
	global $post;

	// Only show on published pages.
	if ( in_array( $post->post_type, array( 'post', 'page' ), true ) && 'publish' === $post->post_status ) {

		?>
		<script type="text/javascript">

			// Add save draft button to live pages.
			jQuery(document).ready(function($) {

				$('<input type="submit" class="button button-highlighted" tabindex="4" value="Save Draft" id="save-post" name="save"><input type="hidden" name="caweb_save_draft" value="saving"/>').prependTo('#save-action');

				$('input#save-post').on('click', function(e){
					/*
					if using the new Divi Builder Experience the save draft process fires twice
					once for WordPress then again for Divi
					set caweb_save_draft = divi until originalEvent is undefined, this is the Divi save.
					 */
					if( $('#et_pb_toggle_builder').hasClass('et_pb_builder_is_used') && 
							$('body').hasClass('et-bfb') && undefined === arguments[0].originalEvent ){
						// if the live draft process wasnt started by the Save Draft button
							$('input[name="caweb_save_draft"]').val('saving');
					}else{
						$('input[name="caweb_save_draft"]').val('old-divi');
					}

				});
			});

		</script>
		<?php
	}
}

function caweb_live_drafts_admin_notice() {
	global $post;

	// Only show on published pages.
	if ( is_object( $post ) &&
		in_array( $post->post_type, array( 'post', 'page' ), true )
		) {

		$draft_id = get_post_meta( $post->ID, '_pc_draftId', true );
		$live_id  = get_post_meta( $post->ID, '_pc_liveId', true );

		if ( empty( $draft_id ) && empty( $live_id ) ) {
			return;
		}

		$class = 'notice notice-warning';

		if ( ! empty( $draft_id ) ) {
			$message    = 'Warning! A live draft exists for this page.  ';
			$draft_link = admin_url( 'post.php?action=edit&post=' . $draft_id );
		} else {
			$message    = 'Warning! This is a draft for a live page.  ';
			$draft_link = admin_url( 'post.php?action=edit&post=' . $live_id );
		}

		printf(
			'<div class="%1$s"><p>%2$s<a href="%3$s">View here.</a></p></div>',
			esc_attr( $class ),
			esc_html( $message ),
			$draft_link
		);
	}
}

function caweb_live_drafts_admin_footer() {
	global $post;

	// Only show on published pages.
	if ( in_array( $post->post_type, array( 'post', 'page' ), true ) && 'publish' === $post->post_status ) {
		?>
		<style>
			#save-post{
				display: inline-block !important;
			}
		</style>
		<?php
	}
}

function caweb_live_drafts_duplicate_post( $post_data, $default = array( 'post_status' => 'draft' ), $use_post_id = true ) {
	$dup_post = array(
		'menu_order'     => $post_data['menu_order'],
		'comment_status' => ( empty( $post_data['comment_status'] ) || 'open' === $post_data['comment_status'] ? 'open' : 'closed' ),
		'ping_status'    => ( empty( $post_data['ping_status'] ) || 'open' === $post_data['ping_status'] ? 'open' : 'closed' ),
		'post_author'    => $post_data['post_author'],
		'post_category'  => ( isset( $post_data['post_category'] ) ? $post_data['post_category'] : array() ),
		'post_content'   => isset( $post_data['content'] ) ? $post_data['content'] : ( isset( $post_data['post_content'] ) ? $post_data['post_content'] : '' ),
		'post_excerpt'   => isset( $post_data['excerpt'] ) ? $post_data['excerpt'] : '',
		'post_parent'    => isset( $post_data['parent_id'] ) ? $post_data['parent_id'] : 0,
		'post_password'  => $post_data['post_password'],
		'post_title'     => $post_data['post_title'],
		'post_type'      => $post_data['post_type'],
		'tags_input'     => ( isset( $post_data['tax_input']['post_tag'] ) ? $post_data['tax_input']['post_tag'] : '' ),
	);

	if ( $use_post_id && isset( $post_data['post_ID'] ) ) {
		$dup_post['ID'] = $post_data['post_ID'];
	}

	return array_merge( $dup_post, $default );
}

function caweb_live_drafts_migrate_post_meta( $from, $to, $exclude = array() ) {
	$exclusions = is_string( $exclude ) ? explode( $exclude, ',' ) : $exclude;
	$excluded   = array_merge( array( '_edit_lock', '_edit_last' ), $exclusions );

	$custom = get_post_custom( $from );

	foreach ( $custom as $ckey => $cvalue ) {
		if ( ! in_array( $ckey, $excluded, true ) ) {
			foreach ( $cvalue as $mvalue ) {
				if ( '_et_pb_ab_current_shortcode' === $ckey ) {
					add_post_meta( $to, $ckey, array( sprintf( '[et_pb_split_track id="%1$s"]', $to ) ), true );
				} else {
					add_post_meta( $to, $ckey, $mvalue, true );
				}
			}
		}
	}
}

function caweb_live_drafts_pre_post_update( $post_id, $post ) {

	// check if the caweb save draft button was pressed.
	if ( ! isset( $_REQUEST['caweb_save_draft'] ) ||
		( isset( $_REQUEST['caweb_save_draft'] ) &&
		! in_array( $_REQUEST['caweb_save_draft'], array( 'saving', 'old-divi' ), true )
		)
	) {
		return $post_id;
	}

	// Check if this is an auto save routine. If it is we dont want to do anything.
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return $post_id;
	}

	// Only continue if this request is for the post or page post type.
	if ( isset( $_POST['post_type'] ) &&
		! in_array( $_POST['post_type'], array( 'post', 'page' ), true ) ) {
		return $post_id;
	}

	// Check permissions.
	if ( isset( $_POST['post_type'] ) &&
		! current_user_can( 'edit_' . ( 'posts' === $_POST['post_type'] ? 'posts' : 'page' ), $post_id ) ) {
		return $post_id;
	}

	// Catch only when a draft is saved of a live page.
	if ( isset( $_REQUEST['save'], $_REQUEST['post_status'] ) &&
		'Save Draft' === $_REQUEST['save'] &&
		'publish' === $_REQUEST['post_status']
		) {
		// Check for post meta that identifies this as a 'live draft'.
		$_pc_draft_id = get_post_meta( $post_id, '_pc_draftId', true );

		if ( ! empty( $_pc_draft_id ) &&
			'trash' !== get_post_status( $_pc_draft_id ) ) {
			return $post_id;
		}

		// Duplicate post and set as a draft.
		$draft_post = caweb_live_drafts_duplicate_post(
			$_REQUEST,
			array(
				'post_content' => $post['post_content'],
				'post_status'  => 'draft',
			),
			false
		);

		// unhook action.
		remove_action( 'pre_post_update', 'caweb_live_drafts_pre_post_update' );

		// Insert the post into the database.
		$new_id = wp_insert_post( $draft_post );

		// re-hook action.
		add_action( 'pre_post_update', 'caweb_live_drafts_pre_post_update', 10, 2 );

		// Migrate meta data.
		caweb_live_drafts_migrate_post_meta( $post_id, $new_id, array( '_pc_liveId', '_pc_draftId' ) );

		// Add a hidden meta data value to indicate that this is a draft of a live page.
		update_post_meta( $new_id, '_pc_liveId', $post_id );

		// Add a hidden meta data value to indicate the draft exist for a live page.
		update_post_meta( $post_id, '_pc_draftId', $new_id );
	}

}

function caweb_live_drafts_post_update( $post_id, $post ) {

	// Check if this is an auto save routine. If it is we dont want to do anything.
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return $post_id;
	}

	// Only continue if this request is for the post or page post type.
	if ( isset( $_POST['post_type'] ) &&
		! in_array( $_POST['post_type'], array( 'post', 'page' ), true ) ) {
		return $post_id;
	}

	// Check permissions.
	if ( isset( $_POST['post_type'] ) &&
		! current_user_can( 'edit_' . ( 'posts' === $_POST['post_type'] ? 'posts' : 'page' ), $post_id ) ) {
		return $post_id;
	}

	// Catch when a draft is saved of a live page.
	if ( isset( $_REQUEST['post_ID'], $_REQUEST['save'], $_REQUEST['post_status'], $_REQUEST['caweb_save_draft'] ) &&
			'Save Draft' === $_REQUEST['save'] &&
			'publish' === $_REQUEST['post_status'] &&
			in_array( $_REQUEST['caweb_save_draft'], array( 'saving', 'old-divi' ), true ) &&
			! wp_is_post_revision( $_REQUEST['post_ID'] )
		) {

			// Check for post meta that identifies this as a 'live draft'.
			$_pc_draft_id = get_post_meta( $_REQUEST['post_ID'], '_pc_draftId', true );

		if ( empty( $_pc_draft_id ) ) {
			return;
		}

				// Divi saves the original even when a draft is created, revert to previous revision.
				$revs = wp_get_post_revisions( $_REQUEST['post_ID'] );

		if ( ! empty( $revs ) ) {
			array_shift( $revs );
			/**
			 * Avoiding infite loop
			 *
			 * @link https://developer.wordpress.org/reference/hooks/save_post/#avoiding-infinite-loops
			 */
			// unhook actions.
			caweb_live_drafts_post_hooks( false );

			// Divi is saving the original page even if a draft is created, duplicate post, and rollback to previous post_content.
			$rollback_post = caweb_live_drafts_duplicate_post(
				$_REQUEST,
				array(
					'post_status'    => 'publish',
					'post_content'   => array_shift( $revs )->post_content,
				)
			);

			wp_update_post( $rollback_post );

			// re-hook actions.
			caweb_live_drafts_post_hooks();
		}

			// Send user to new edit page.
			wp_redirect( admin_url( 'post.php?action=edit&post=' . $_pc_draft_id ) );
			exit();

	}

	// Catch when a draft is published.
	if ( isset( $_REQUEST['publish'] ) && 'Schedule' !== $_REQUEST['publish'] ) {
		// Check for post meta that identifies this as a 'draft of a live page'.
		$_pc_live_id = get_post_meta( $post_id, '_pc_liveId', true );

		if ( empty( $_pc_live_id ) ) {
			return;
		}

		// Duplicate post and replace live page.
		$updated_post = caweb_live_drafts_duplicate_post(
			$_REQUEST,
			array(
				'ID'             => $_pc_live_id,
				'post_status'    => 'publish',
				'post_content'   => isset( $_REQUEST['content'] ) ? $_REQUEST['content'] : $post->post_content,
				'post_date'      => current_time( 'mysql' ),
			)
		);

		/**
		* Avoiding infinite loop
		*
		* @link https://developer.wordpress.org/reference/hooks/save_post/#avoiding-infinite-loops
		*/
		// unhook actions.
		caweb_live_drafts_post_hooks( false );

		// Insert the post into the database.
		wp_update_post( $updated_post );

		// re-hook action.
		caweb_live_drafts_post_hooks();

		// Clear existing meta data.
		$existing = get_post_custom( $_pc_live_id );
		foreach ( $existing as $ekey => $evalue ) {
			delete_post_meta( $_pc_live_id, $ekey );
		}

		// Migrate custom meta data from draft.
		caweb_live_drafts_migrate_post_meta( $post_id, $_pc_live_id, array( '_pc_liveId', '_pc_draftId' ) );

		// Delete draft post, force delete since 2.9, no sending to trash.
		wp_delete_post( $post_id, true );

		unset( $_SESSION[ "post_$_pc_live_id" ] );

		if ( isset( $_REQUEST['publish'] ) && 'Schedule' !== $_REQUEST['publish'] ) {
			// Send user to new edit page.
			wp_redirect( admin_url( 'post.php?action=edit&post=' . $_pc_live_id ) );
			exit();
		}
	}

}

?>
