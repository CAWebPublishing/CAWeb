// External Dependencies.
import React, { ReactElement } from 'react';

const get_icon_span = (icon: string): ReactElement => {
    if( "" === icon ){
        return;
    }

    return(<span className={`ca-gov-icon-${icon}`}></span>);
};

export { get_icon_span };