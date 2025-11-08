// External Dependencies
import React, { Component, Fragment } from 'react';

import  CAWeb_Component from '../component.jsx';

class CAWebModuleProfileBanner extends CAWeb_Component {
  static slug = 'et_pb_profile_banner';

  render() {
    let { name, job_title, profile_link, url, portrait_url, portrait_alt, round_image, is_vertical } = this.props;

		url = "" !== url ? encodeURIComponent( url ) : '';

    var image = "" !== portrait_url ? 
        <img 
          className={ 'on' === round_image ? 'rounded-circle' : '' } 
          src={portrait_url} 
          alt={ portrait_alt } />
         : '';

    job_title = "" !== job_title ? 
        <span>{ job_title }</span> : '';

    profile_link = "" !== profile_link && "" !== url ?
    <a href={url}>{profile_link}</a> : '';

    name = "" !== name ? <h4>{name}</h4> : '';

    return (
			<Fragment>
        <figure className={'executive-profile' + ('on' === is_vertical ? ' vertical' : '')}>
              {image}
              <div className="body">
                {name}
                {job_title}
                {profile_link}
              </div>
          </figure>
     </Fragment>
		);
  }
}

export default CAWebModuleProfileBanner;
