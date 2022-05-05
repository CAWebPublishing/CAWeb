/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText, BlockControls, MediaUpload } from '@wordpress/block-editor';

/**
 * Add additional WordPress React Components
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
 import { Toolbar, IconButton  } from '@wordpress/components';

 /**
  * Add additional WordPress React Components
  * 
  * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
  */
 import { Fragment  } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const {
		attributes: { title, body, mediaURL },
		setAttributes
	} = props;
	const blockProps = useBlockProps();
	const onChangeTitle = ( newTitle ) => {
		setAttributes( { title: newTitle } );
	};
	
	const onChangeBody = ( newBody ) => {
		setAttributes( { body: newBody } );
	};

	const onChangeImage = ( newImage ) => {
		console.log(newImage);
		setAttributes( { mediaURL: newImage.url } );
	};

	
	return (
		<Fragment>
			<BlockControls>
				<Toolbar>
					<MediaUpload 
						onSelect={onChangeImage}
						allowedTypes={['image']}
						labels={{
							title: __('Featured Card Image'),
						}}
						render={ ( { open } ) => (
							<IconButton 
							className="components-toolbar__control"
							label={__('Edit Featured Card Image')}
							icon="format-image"
							onClick={open}
							/>
						) }
					/>
				</Toolbar>
			</BlockControls>
			<div {...blockProps}
		  class="wp-block-ca-design-system-hero cagov-with-sidebar cagov-with-sidebar-left cagov-featured-section cagov-bkgrd-gry cagov-block wp-block-cagov-hero"
		>
				<div>
					<div class="cagov-stack cagov-p-2 cagov-featured-sidebar">
					<RichText 
						tagName="h1" 
						value={title} 
						onChange={ onChangeTitle }
						placeholder="Featured Card Title"
					/>
					<RichText 
						tagName="div" 
						className='cagov-hero-body-content' 
						value={body} 
						onChange={ onChangeBody }
						placeholder="Featured Card Body"
					/>
					</div>
					{
						mediaURL ?
						<div>
							<img
								class="cagov-featured-image"
								src={mediaURL}
								alt=""
								width="1024"
								height="683"
							/>
						</div>
						:
						''
					}
				</div>
			</div>

		</Fragment>
	);
}
