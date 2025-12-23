/* eslint-disable @typescript-eslint/naming-convention */
import { ModuleConversionOutline } from '@divi/types';

// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields

export const conversionOutline: ModuleConversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation:   'module.decoration.animation',
    background:  'module.decoration.background',
    borders:     {
      default: 'module.decoration.border',
    },
    box_shadow: {
      default: 'module.decoration.boxShadow',
    },
    disabled_on: 'module.decoration.disabledOn',
    filters:     {
      default: 'module.decoration.filters',
    },
    fonts: {
      body:       'content.decoration.bodyFont.body',
      body_link:  'content.decoration.bodyFont.link',
      body_ol:    'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul:    'content.decoration.bodyFont.ul',
      header:     'title.decoration.font',
    },
    height:          'module.decoration.sizing',
    link_options:    'module.advanced.link',
    margin_padding:  'module.decoration.spacing',
    max_width:       'module.decoration.sizing',
    module:          'module.advanced.htmlAttributes',
    overflow:        'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll:          'module.decoration.scroll',
    sticky:          'module.decoration.sticky',
    text:            'module.advanced.text',
    text_shadow:     {
      default: 'module.advanced.text.textShadow',
    },
    transform:  'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index:    'module.decoration.zIndex',
  },
  css: {
    after:         'css.*.after',
    before:        'css.*.before',
    main_element:  'css.*.mainElement',
    content:       'css.*.content',
    title:         'css.*.title',
  },
  module: {
    section_heading:         'title.innerContent.*.text',
    heading_text_color: 'title.innerContent.*.color',
    heading_align: 'title.innerContent.*.alignment',
    heading_size: 'title.innerContent.*.level',
    content:  'content.innerContent.*',
    section_background_color: 'module.decoration.background.*.color',
    show_more_button: 'link.innerContent.*.show',
    section_link:  'link.innerContent.*.url',
    featured_image_button:    'image.innerContent.*.show',
    left_right_button: 'image.innerContent.*.alignment',
    section_image:          'image.innerContent.*.src',
    slide_image_button: 'image.innerContent.*.fade',
  }
};
