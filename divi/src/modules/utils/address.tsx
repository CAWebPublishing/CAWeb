// External Dependencies.
import React, { ReactElement } from 'react';

/**
 * Returns address in CSV format
 *
 * @param  array|address $addr Address to format.
 * @return string
 */
const get_address = (address: string|string[]) => {
   if( "" === address || address.length === 0 ){
       return;
   }else if( 'string' === typeof address ){
       address = address.split( ',' );
   }

   return address.map( (part) => part?.trim() ).filter(Boolean).join(', ');
};

const get_google_map_place_link = (address: string|string[], embed = false, target = '_blank', classes = ''): ReactElement => {
    
    let addr = get_address(address);

    if( ! addr ){
        return <></>;
    }

    if( embed ){
        let map_url = `https://www.google.com/maps/embed/v1/place?q=${addr}&zoom=10&key=key`;
    
        return(<iframe title={`IFrame for Address ${addr}`} src={map_url}></iframe>);
    } else {
        return(<a href={`https://www.google.com/maps/place/${addr}`} target={target} className={classes}>{addr}</a>);
    }
};

export { get_address, get_google_map_place_link };