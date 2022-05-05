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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/
import { RichText, MediaUpload, InnerBlocks } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

// https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/
// https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/rich-text/README.md

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	let { setAttributes } = props;
	const attributes = props.attributes;
	let {
		title,
		mediaID,
		mediaURL,
		mediaAlt,
		mediaWidth,
		mediaHeight,
	} = attributes;
	const ALLOWED_BLOCKS = ['core/button', 'core/paragraph'];

	const onSelectImage = function (media) {
		return props.setAttributes({
			mediaURL: media.sizes.large.url,
			mediaID: media.id,
			mediaAlt: media.description,
			mediaWidth: media.sizes.large.width,
			mediaHeight: media.sizes.large.height,
		});
	};

	return (
		<div class="cagov-feature-card cagov-with-sidebar cagov-with-sidebar-start cagov-background-gray">
			<div>
				<div class="cagov-feature-card-sidebar">
					<RichText
						tagName="h2"
						placeHolder={__('Write title…', 'cagov-design-system')}
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>

					<div class="cagov-feature-card-body-content">
						<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
					</div>
				</div>
			
				<MediaUpload
					onSelect={onSelectImage}
					allowedTypes="image"
					value={mediaID}
					render={(obj) => {
						return (
							<div class="cagov-feature-card-image">
								{mediaID && (
									<img
										class="cagov-featured-image"
										src={mediaURL}
										alt={mediaAlt}
										width={mediaWidth}
										height={mediaHeight}
									/>
									)
								}
								<Button
									className={
										attributes.mediaID
											? 'image-button'
											: 'button button-large'
									}
									onClick={obj.open}
								>
									{!mediaID ? 
									__('Upload image', 'cagov-design-system')
									 : __('Change image', 'cagov-design-system') 
									}
								</Button>
							</div>
						);
					}}
				/>
				
			</div>
		</div>
	);
}
