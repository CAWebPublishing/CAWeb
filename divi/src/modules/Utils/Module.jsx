// External Dependencies.
import { set } from 'lodash';
import React, { ReactElement, CSSProperties, useEffect } from 'react';

// Divi Dependencies.
import { useFetch } from '@divi/rest';

// WordPress Dependencies.
import { addQueryArgs } from '@wordpress/url';

/**
 * Process Divi Color Picker Value
 *
 * @param  string $color Color value from color picker.
 * @return string
 */
const processColorPickerValue = ( color ) => {
    let colorProp = {
        color
    };

    if( color.startsWith('$variable(') && color.endsWith(')$') ){
        try{
            let colorString = color.slice(10, -2);
            let colorObj = JSON.parse( colorString );

            // if object is a color type
            if( 'color' === colorObj?.type ){
                // if opacity has been set
                if( colorObj?.value?.settings?.opacity ){
                    // divide the opacity by 100
                    colorObj.value.settings.opacity = colorObj.value.settings.opacity / 100;
                }

                // add color and any settings to the CSSProperty
                colorProp = {
                    color: `var(--${colorObj?.value?.name})`,
                    ...colorObj.value.settings
                }
            }

        }catch(e){
            // color isn't valid JSON
        }
    }

    return colorProp;
}

/**
 * Returns address in CSV format
 *
 * @param  array|address $addr Address to format.
 * @return string
 */
const get_address = (address) => {
   if( "" === address || address.length === 0 ){
       return;
   }else if( 'string' === typeof address ){
       address = address.split( ',' );
   }

   return address.map( (part) => part?.trim() ).filter(Boolean).join(', ');
};

/**
 * Create a GoogleMap Place Link/Embedded IFrame
 *
 * @param  array|string $addr Address to format.
 * @param  mixed        $embed Whether to create a link or embedded iframe.
 * @param  mixed        $target The links target, default _blank.
 * @param  mixed        $classes Class for the link.
 * @return string
 */
const get_google_map_place_link = (address, embed = false, target = '_blank', classes = '') => {
    
    let addr = get_address(address);

    if( ! addr ){
        return null;
    }

    if( embed ){
        let map_url = `https://www.google.com/maps/embed/v1/place?q=${addr}&zoom=10&key=key`;
    
        return(<iframe title={`IFrame for Address ${addr}`} src={map_url}></iframe>);
    } else {
        return(<a href={`https://www.google.com/maps/place/${addr}`} target={target} className={classes}>{addr}</a>);
    }
};

/**
 * Create icon span
 *
 * @param  string $icon Icon to render.
 * @param  string $classes Classes for the span.
 * @param  string $styles Styles for the span.
 * @return string
 */
const get_icon_span = (icon) => {
    if( "" === icon ){
        return;
    }

    return(<span className={`ca-gov-icon-${icon}`}></span>);
};

const RenderWordPressShortcode = ({shortcodeText}) => {
    const {
        fetch,
        isLoading,
        response,
    } = useFetch([]);
    
    useEffect(() => {
        let { ajax_url, js_shortcode_nonce } = CawebDiviExtensionModulesBuilderBundleScriptData;
        // Build the request payload
        const formData = new FormData();
        formData.append('action', 'render_shortcode_via_js');
        formData.append('security', js_shortcode_nonce);
        formData.append('shortcode', shortcodeText);
        
        fetch({
            url: ajax_url,
            method:    'POST',
            data: formData,
        })
        
        
    }, [shortcodeText])
    
    return isLoading ? <></> : <div dangerouslySetInnerHTML={{__html: response.data}}></div>;
};

export { 
    get_icon_span, 
    get_address, 
    get_google_map_place_link, 
    processColorPickerValue,
    RenderWordPressShortcode
};