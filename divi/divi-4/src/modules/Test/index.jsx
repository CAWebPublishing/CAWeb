// External Dependencies
import React, { Fragment } from 'react';

import  CAWeb_Component from '../component.jsx';

class CAWebModuleTest extends CAWeb_Component {
  static slug = 'et_pb_ca_test';

  render() {
   var moduleID = "" !== this.props.module_id ? this.props.module_id : ''
		var classes = undefined !== this.props.module_class ? this.props.module_class : '';
		var classList = "et_pb_ca_test et_pb_module " + classes;

    return (
			<Fragment>
        <div id={moduleID} className={classList}>
          {this.props.title}
          {this.props.content()}
        </div>
     </Fragment>
		);
  }
}

export default CAWebModuleTest;
