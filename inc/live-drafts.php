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

function caweb_live_drafts_init(){

	// Admin head.
	add_action( 'admin_head-post.php', 'caweb_live_drafts_admin_head' );

	// Pre-post update.
	add_action( 'pre_post_update', 'caweb_live_drafts_pre_post_update', 10, 2 );

	// Save post action.
	add_action( 'save_post', 'caweb_live_drafts_post_update', 10, 2 );
	add_action( 'publish_future_post', 'caweb_live_drafts_post_update', 10, 2 );

	// Admin footer.
	add_action( 'admin_footer-post.php', 'caweb_live_drafts_admin_footer', 10 );

	add_action( 'admin_notices', 'caweb_live_drafts_admin_notice' );
}

function caweb_live_drafts_admin_head() {
	global $post;

	// Only show on published pages.
	if ( in_array( $post->post_type, array( 'post', 'page' ), true ) && 'publish' === $post->post_status ) {

		?>
		<script type="text/javascript">

			// Add save draft button to live pages.
			jQuery(document).ready(function($) {

				$('<input type="submit" class="button button-highlighted" tabindex="4" value="Save Draft" id="save-post" name="save"><input type="hidden" name="caweb_save_draft"/>').prependTo('#save-action');

				$('input#save-post').on('click', function(){
					if( undefined === arguments[0].originalEvent && 'saving' !== $('input[name="caweb_save_draft"]').val() ){
						$('input[name="caweb_save_draft"]').val('divi');
					}else{
						$('input[name="caweb_save_draft"]').val('saving');
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

function caweb_live_drafts_pre_post_update( $post_id, $post ) {

	// If toggling Divi Page builder.
	if ( isset( $_REQUEST['caweb_save_draft'] ) && 'divi' === $_REQUEST['caweb_save_draft'] ) {
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
	if ( isset( $_REQUEST['save'] ) &&
		isset( $_REQUEST['post_status'] ) &&
		$_REQUEST['save'] == 'Save Draft' &&
		$_REQUEST['post_status'] == 'publish'
		) {

		// Check for post meta that identifies this as a 'live draft'.
		$_pc_draft_id = get_post_meta( $post_id, '_pc_draftId', true );

		if ( ! empty( $_pc_draft_id ) ) {
			return $post_id;
		}

		// Duplicate post and set as a draft.
		$draft_post = array(
			'menu_order'     => $_REQUEST['menu_order'],
			'comment_status' => ( empty( $_REQUEST['comment_status'] ) || $_REQUEST['comment_status'] == 'open' ? 'open' : 'closed' ),
			'ping_status'    => ( empty( $_REQUEST['ping_status'] ) || $_REQUEST['ping_status'] == 'open' ? 'open' : 'closed' ),
			'post_author'    => $_REQUEST['post_author'],
			'post_category'  => ( isset( $_REQUEST['post_category'] ) ? $_REQUEST['post_category'] : array() ),
			'post_content'   => isset( $_REQUEST['content'] ) ? $_REQUEST['content'] : $post['post_content'],
			'post_excerpt'   => $_REQUEST['excerpt'],
			'post_parent'    => $_REQUEST['parent_id'],
			'post_password'  => $_REQUEST['post_password'],
			'post_status'    => 'draft',
			'post_title'     => $_REQUEST['post_title'],
			'post_type'      => $_REQUEST['post_type'],
			'tags_input'     => ( isset( $_REQUEST['tax_input']['post_tag'] ) ? $_REQUEST['tax_input']['post_tag'] : '' ),
		);

		// Insert the post into the database.
		$new_id = wp_insert_post( $draft_post );

		// Custom meta data.
		$custom = get_post_custom( $post_id );
		foreach ( $custom as $ckey => $cvalue ) {
			if ( '_edit_lock' !== $ckey && '_edit_last' !== $ckey ) {
				foreach ( $cvalue as $mvalue ) {
					if ( '_et_pb_ab_current_shortcode' === $ckey ) {
						add_post_meta( $new_id, $ckey, array( sprintf( '[et_pb_split_track id="%1$s"]', $new_id ) ), true );
					} else {
						add_post_meta( $new_id, $ckey, $mvalue, true );
					}
				}
			}
		}

		// Add a hidden meta data value to indicate that this is a draft of a live page.
		update_post_meta( $new_id, '_pc_liveId', $post_id );

		// Add a hidden meta data value to indicate the draft exist for a live page.
		update_post_meta( $post_id, '_pc_draftId', $new_id );

		// Send user to new edit page.
		wp_redirect( admin_url( 'post.php?action=edit&post=' . $new_id ) );
		exit();

	}

}

function caweb_live_drafts_post_update( $post_id, $post ) {

	if (
		( isset( $_REQUEST['publish'] ) && 'Schedule' !== $_REQUEST['publish'] ) ||
		( defined( 'DOING_CRON' ) && DOING_CRON ) ) {

		// Check for post meta that identifies this as a 'live draft'.
		$_pc_liveId = get_post_meta( $post_id, '_pc_liveId', true );

		// If post meta exists then replace live page.
		if ( ! empty( $_pc_liveId ) ) {
			$content = is_object( $post ) ? $post->post_content : $post['post_content'];

			// Duplicate post and set as a draft.
			$updatedPost = array(
				'ID'             => $_pc_liveId,
				'menu_order'     => $_REQUEST['menu_order'],
				'comment_status' => ( 'open' === $_REQUEST['comment_status'] ? 'open' : 'closed' ),
				'ping_status'    => ( 'open' === $_REQUEST['ping_status'] ? 'open' : 'closed' ),
				'post_author'    => $_REQUEST['post_author'],
				'post_category'  => ( isset( $_REQUEST['post_category'] ) ? $_REQUEST['post_category'] : array() ),
				'post_content'   => isset( $_REQUEST['content'] ) ? $_REQUEST['content'] : $content,
				'post_excerpt'   => $_REQUEST['excerpt'],
				'post_parent'    => $_REQUEST['parent_id'],
				'post_password'  => $_REQUEST['post_password'],
				'post_status'    => 'publish',
				'post_title'     => $_REQUEST['post_title'],
				'post_type'      => $_REQUEST['post_type'],
				'tags_input'     => ( isset( $_REQUEST['tax_input']['post_tag'] ) ? $_REQUEST['tax_input']['post_tag'] : '' ),
			);

			// Insert the post into the database.
			wp_update_post( $updatedPost );

			// Clear existing meta data.
			$existing = get_post_custom( $_pc_liveId );
			foreach ( $existing as $ekey => $evalue ) {
				delete_post_meta( $_pc_liveId, $ekey );
			}

			// New custom meta data - from draft.
			$custom = get_post_custom( $post_id );
			foreach ( $custom as $ckey => $cvalue ) {
				if ( '_edit_lock' !== $ckey && '_edit_last' !== $ckey && '_pc_liveId' !== $ckey ) {
					foreach ( $cvalue as $mvalue ) {
						if ( '_et_pb_ab_current_shortcode' === $ckey ) {
							add_post_meta( $_pc_liveId, $ckey, array( sprintf( '[et_pb_split_track id="%1$s"]', $_pc_liveId ) ), true );
						} else {
							add_post_meta( $_pc_liveId, $ckey, $mvalue, true );
						}
					}
				}
			}

			// Delete draft post, force delete since 2.9, no sending to trash.
			wp_delete_post( $post_id, true );

			delete_post_meta( $_pc_liveId, '_pc_liveId' );
			delete_post_meta( $_pc_liveId, '_pc_draftId' );

			unset( $_SESSION[ "post_$_pc_liveId" ] );

			// Send user to live edit page.
			wp_safe_redirect( admin_url( 'post.php?action=edit&post=' . $_pc_liveId ) );
			exit();

		}
	}
}

?>
