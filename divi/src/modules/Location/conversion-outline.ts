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
    location_layout: 'location.innerContent.*.layout',
    featured_image: 'location.innerContent.*.featured_image.innerContent.*.src',
    name:         'location.innerContent.*.name',
    desc:    'location.innerContent.*.desc',
    show_button:    'location.innerContent.*.desc',
    location_link:    'location.innerContent.*.link',
    addr:    'address.innerContent.*.addr',
    city:    'address.innerContent.*.city',
    state:    'address.innerContent.*.state',
    zip:    'address.innerContent.*.zip',
    show_contact:    'contact.innerContent.*.show_contact',
    phone:    'contact.innerContent.*.phone',
    fax:    'contact.innerContent.*.fax',
    show_icon:    'icon.innerContent.*.show_icon',
    font_icon:    'icon.innerContent.*.font_icon',
    // module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    // module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    // module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur',
  },
  valueExpansionFunctionMap: {
    font_icon: (value) => {

      return value.replace(/%%/g, '');
    }
  }
};
