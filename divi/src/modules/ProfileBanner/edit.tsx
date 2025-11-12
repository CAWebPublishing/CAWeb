// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import {
  ModuleContainer,
  ElementComponents,
  DynamicData,
} from '@divi/module';
import {
  getAttrByMode,
} from '@divi/module-utils';

// Local Dependencies.
import { ProfileBannerModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { moduleClassnames } from './module-classnames';
import { ModuleScriptData } from './module-script-data';

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {ProfileBannerModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = (props: ProfileBannerModuleEditProps): ReactElement => {
  const {
    attrs,
    id,
    name,
    elements,
  } = props;

  let profile = getAttrByMode(attrs?.profile?.innerContent);
  let portrait = getAttrByMode(attrs?.portrait?.advanced);
  
  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
    >
      {
        elements.styleComponents({
          attrName: 'module',
        })
      }
      <figure className={`executive-profile${ ("on" === portrait?.vertical ? ' vertical' : '') }`}>
        {
          elements.render({
            attrName: 'portrait',
            attrSubName: 'src',
            className: `${("on" === portrait?.rounded ? 'rounded-circle' : '')}` // rounded image
          })
          }
        <div className="body">
          {
          elements.render({
            attrName: 'name',
          })
          }
          {
          elements.render({
            attrName: 'job',
          })
          }
          {
          profile?.text && profile?.url ? 
          elements.render({
            attrName: 'profile',
            attrSubName: 'text',
            htmlAttributes: {
              href: profile?.url,
            }
          }) : ''
          } 
        </div>
      </figure>
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
