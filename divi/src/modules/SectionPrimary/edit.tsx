// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import {
  ModuleContainer,
  ElementComponents,
  DynamicData,
} from '@divi/module';
import {
  type Module,
  type OnOff
} from '@divi/types';
import {
  getAttrByMode,
} from '@divi/module-utils';

// Local Dependencies.
import { SectionPrimaryModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { moduleClassnames } from './module-classnames';
import { ModuleScriptData } from './module-script-data';
import { processColorPickerValue } from '../Utils';


/**
 * Renders the Header
 *
 * @param {{
 *       text?: string;
 *       color?: string;
 *       alignment?: 'start' | 'center' | 'end';
 *       level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
 * }} props 
 * @returns {ReactElement} 
 */
const renderHeader = (props: {
      text?: string;
      color?: string;
      alignment?: 'start' | 'center' | 'end';
      level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

}): ReactElement => {
  let {
    text,
    color,
    alignment,
    level: Tag,
  } = props;

  let style = {};
  
  if( color ){
      style = Object.assign( style, processColorPickerValue(color) );
  }

  return <Tag className={ `text-${alignment}`} style={style}>{text}</Tag>
}

/**
 * Renders the Featured Image
 *
 * @param {{
 *     elements?: Module.ModuleElements,
 *     image?: {
 *       src?: string,
 *       alt?: string,
 *       title?: string,
 *       show?: OnOff,
 *       alignment?: OnOff,
 *       fade?: OnOff
 *     }
 * }} props 
 * @returns {ReactElement} 
 */
const renderImage = (props: {
    elements?: Module.ModuleElements,
    image?: {
      src?: string,
      alt?: string,
      title?: string,
      show?: OnOff,
      alignment?: OnOff,
      fade?: OnOff
    }
}) : ReactElement => {

  const { elements, image } = props;

  if( 'off' === image?.show ){
    return <></>;
  }

  let classes = 'col-4';

  classes += ( 'on' === image?.alignment ) ? ' ps-3 float-end' : ' pe-3 float-start';
  classes += ( 'on' === image?.fade ) ? ' animate__animated  animate__fadeInLeft' : '';

  return <div className={ classes }>
    {
      elements.render({
            attrName: 'image',
        })
    }
  </div>
}

/**
 * Renders the More Button
 *
 * @param {{
 *     text?: string;
 *     link?: {
 *       url?: string;
 *       show?: OnOff;
 *     }
 * }} props 
 * @returns {ReactElement} 
 */
const renderButton = (props: {
    text?: string;
    link?: {
      url?: string;
      show?: OnOff;
    }
}): ReactElement => {
  let {
    text,
    link,
  } = props;

  if( !link || 'off' === link?.show || !link?.url ){
    return <></>;
  }

  return <div>
    <a href={ link?.url } className="btn btn-outline-dark" target="_blank">
      More Information
      <span className="sr-only">More information about { text } </span></a>
    </div>
}

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {SectionPrimaryModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = (props: SectionPrimaryModuleEditProps): ReactElement => {
  const {
    attrs,
    id,
    name,
    elements,
  } = props;

  let title = getAttrByMode(attrs?.title?.innerContent);
  let image = getAttrByMode(attrs?.image?.innerContent);
  let link = getAttrByMode(attrs?.link?.innerContent);
  
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
      {
        renderImage({ elements, image } )
      }
      {
        renderHeader(title)
      }
      {
        elements.render({
          attrName: 'content',
        })
      }
      {
        renderButton({ text: title?.text, link})
      }
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
