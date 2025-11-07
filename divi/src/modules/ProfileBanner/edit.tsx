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
 * Divi 4 Module edit component of visual builder.
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
  console.log( attrs)

  console.log( portrait ) 
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
      <figure className={
        "executive-profile p-3 d-flex flex-" + 
        ("on" === portrait?.vertical ? 'column bg-light vertical' : 'row')
        }>
        {
          elements.render({
            attrName: 'portrait',
            attrSubName: 'src',
            className: 
              ("on" === portrait?.rounded ? 'rounded-circle ' : '') + // rounded image +
              ("on" === portrait?.vertical ? 'align-self-center ' : 'me-3 ') // vertical alignment
              ,
          })
          }
        <div className={"body" + ("on" === portrait?.vertical ? ' text-center' : '')}>
          
          
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
          <a href={profile.url}>{profile.text}</a> : ''
          } 
        </div>
      </figure>
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
