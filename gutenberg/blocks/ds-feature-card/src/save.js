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
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {

    const attributes = props.attributes;
    let { title, body, mediaURL, mediaAlt, mediaWidth, mediaHeight } = attributes;

    // let titleTag = "h1"; // was h2 - @TODO update spec with this change - but block will need to search for text with a different attribute

    // Try to remove these classes from main wrapper wp-block-ca-design-system-hero wp-block-cagov-hero
    return (
        <div
            class="cagov-feature-card cagov-block cagov-with-sidebar cagov-with-sidebar-left cagov-bkgrd-gry"
        >
            <div>
                <div class="cagov-stack cagov-p-2 cagov-featured-sidebar">
                    <h1>{title}</h1>
                    <div class="cagov-hero-body-content">
                        <RichText.Content
                            tagName="div"
                            className="cagov-feature-card-body-content"
                            value={ body }
                        >
                            {/*editor.InnerBlocks.Content*/}
                        </RichText.Content> 
                    </div>
                </div>
            </div>
            {mediaURL && 
						<img
							class="cagov-featured-image"
							src={ mediaURL }
							alt={ mediaAlt }
							width={ mediaWidth }
							height={ mediaHeight }
						/>
					}
       </div>
    );
}
