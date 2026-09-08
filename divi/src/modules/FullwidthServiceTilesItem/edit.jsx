// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import {
  ModuleContainer,
} from '@divi/module';

import {
  getAttrByMode,
} from '@divi/module-utils';

// Local Dependencies.
import { FullwidthServiceTilesItemModuleEditProps } from './types.ts';
import { ModuleStyles } from './styles.jsx';
import { moduleClassnames } from './module-classnames.js';
import { ModuleScriptData } from './module-script-data.jsx';

let width = 0;
let tile_contents = [];

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {FullwidthServiceTilesItemModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = (props) => {
  const {
    attrs,
    id,
    name,
    elements,
    parentAttrs,
    isFirst,
    isLooped,
    loopIndex
  } = props;

  let title = getAttrByMode(attrs?.title?.innerContent);

  let {
    size
  } = getAttrByMode(attrs?.title?.advanced);

  let {
    show
  } = getAttrByMode(attrs?.button?.advanced);

  let { linkUrl } = getAttrByMode(attrs?.button?.innerContent);

  let content = getAttrByMode(attrs?.content?.innerContent);

  switch( size.toLowerCase() ){
    case 'half':
      size = 'w-50';
      width += 50;
      break;
    case 'full':
      size = 'w-100';
      width += 100;
      break;
    default:
      size = 'w-25';
      width += 25;
  }

  // reset everytime the width exceeds 100%
  if( 100 < width ){
    width -= 100;
    tile_contents = [];
  }

  // if width hasn't exceeded 100% and not showing as a link,
  // create the tile contents
  if( 100 >= width && 'off' === show ){
    tile_contents.push(
    <div>
      <div className="card card-default py-4 mb-0">
        <div className="container pt-0">
          <div className="card card-block p-3 mb-0 bg-white">
            <button 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#%3$s #card-%2$s" 
              className="btn btn-sm btn-secondary ca-gov-icon-close-mark float-end" 
              aria-expanded="false"></button>
						{elements.render({
              attrName: 'content'
            })}
          </div>
        </div>
      </div>
    </div>
    );
  }

  console.log( width );
  return (
    <>
    <ModuleContainer
      attrs={attrs}
      parentAttrs={parentAttrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
      isFirst={isFirst}
      isLooped={isLooped}
      loopIndex={loopIndex}
      htmlAttrs={{
        tabIndex: 0,
        className: `service-tile ${size}`
      }}
    >
      {
        elements.styleComponents({
          attrName: 'module',
        })
      }

      {
        'on' === show ? 
        <>
          {
            elements.render({
              attrName: 'image',
              htmlAttributes: {
                style: {
                  backgroundSize: 'cover',
                  height: '320px'
                }
              },
            })
          }
          <div className="teaser bg-black text-white py-1 text-center">
            <a href={linkUrl} className="title h4 text-decoration-none text-white lh-base">{title}<span className="ca-gov-icon-link d-block"></span></a>
          </div>
        </> 
        : 
        <>
          {
            elements.render({
              attrName: 'image',
              htmlAttributes: {
                style: {
                  backgroundSize: 'cover',
                  height: '320px'
                }
              },
            })
          }
          <div className="teaser bg-black text-white py-1 text-center">
            <a 
              href={linkUrl} 
              className="title h4 text-decoration-none text-white lh-base" 
              data-bs-toggle="collapse" 
              data-bs-target={`#${id}`} 
              aria-expanded="false"
              >
                {title}<span className="ca-gov-icon-plus-fill d-block"></span>
            </a>
          </div>
        </> 
      }
      
    </ModuleContainer>
    {
      100 === width && (tile_contents) 
    }
    </>
  );
}

export {
  ModuleEdit,
};
