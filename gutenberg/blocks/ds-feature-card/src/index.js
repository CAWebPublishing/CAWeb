/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';


import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('cagov-design-system/ds-feature-card', {
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2',
		},
		body: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
		buttontext: {
			type: 'array',
			source: 'children',
			selector: 'a',
		},
		buttonurl: {
			type: 'array',
			source: 'children',
			selector: 'button',
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		mediaAlt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
		},
		mediaWidth: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'width',
		},
		mediaHeight: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'height',
		},
	},
	example: {
		attributes: {
			title: __('Annual meeting, January 14, 2022', 'cagov-design-system'),
			body: __('Registration opens November 5, 2022', 'cagov-design-system'),
			buttontext: __('Register', 'cagov-design-system'),
			buttonurl: __('https://example.com', 'cagov-design-system'),
			mediaURL: 'http://www.fillmurray.com/750/500', // @TODO Change to cats
			mediaAlt: 'Image Description',
			mediaWidth: '750',
			mediaHeight: '500',
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
});
