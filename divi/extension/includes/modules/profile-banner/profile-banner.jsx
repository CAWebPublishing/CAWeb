// External Dependencies
import React, { Fragment } from 'react';
import  CAWEeb_Component from '../component.jsx';

class CAWeb_Module_Profile_Banner extends CAWEeb_Component {

  static slug = 'et_pb_profile_banner';

  render() {
		var moduleID = "" !== this.props.module_id ? this.props.module_id : ''
		var classes = undefined !== this.props.module_class ? this.props.module_class : '';
		var classList = "et_pb_profile_banner et_pb_module " + classes;

    var image_class = '';
    var figure_class = ' bg-white border rounded';

    if( 'on' === this.props.round_image ){
      var image_class = ' rounded-circle';
      var figure_class = ' border-0 bg-greylight-radialgradient';
    }

    var image = "" !== this.props.portrait_url ? 
        <img 
          className={ 'width-80 height-80' + image_class } 
          src={this.props.portrait_url} 
          alt={ "" !== this.props.portrait_alt ? this.props.portrait_alt : '' } />
         : '';

    var job_title = "" !== this.props.job_title ? 
      <div class="d-block">
        <span class="font-size-13">{ this.props.job_title }</span></div> : '';

    var profile_link = "" !== this.props.profile_link && "" !== this.props.url ? 
    <a href={this.props.url} class="font-size-12" aria-label={ "Link to " + this.props.name + " Website"}>{this.props.profile_link}</a> : '';
		
    var name         = "" !== this.props.name ? <h3 class="h4 m-0">{this.props.name}</h3> : '';

    var media_body = <Fragment>{name}{job_title}<hr class ="m-t-sm m-b-0" />{profile_link}</Fragment>;

    if( 'on' !== this.props.is_vertical ){
      var body = <Fragment>
        <div class="media">
          <div class="d-flex m-r-md">{image}</div>
          <div class="media-body">{media_body}</div>
          </div>
        </Fragment>
    }else{
      classList += ' text-center';

      var body = <Fragment>{image}{media_body}</Fragment>;
    }

    return (
			<Fragment>
        <div id={moduleID} className={classList}>
          <figure className={'p-a' + figure_class}>
              {body}
          </figure>
        </div>
     </Fragment>
		);
  }
}

export default CAWeb_Module_Profile_Banner;
