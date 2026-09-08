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
import { SectionCarouselSlideModuleEditProps } from './types.ts';
import { ModuleStyles } from './styles.jsx';
import { moduleClassnames } from './module-classnames.js';
import { ModuleScriptData } from './module-script-data.jsx';

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {SectionCarouselSlideModuleEditProps} props React component props.
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
  } = props;

  let title = getAttrByMode(attrs?.title?.innerContent);

  let {
    size
  } = getAttrByMode(attrs?.title?.advanced);

  let {
    show
  } = getAttrByMode(attrs?.button?.advanced);

  let { linkUrl } = getAttrByMode(attrs?.button?.innerContent);

  return (
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
    >
      {
        elements.styleComponents({
          attrName: 'module',
        })
      }
      {
        elements.render({
          attrName: 'image',
          htmlAttributes: {
            className: 'd-block w-100',
          },
        })
      }
      <div className="carousel-caption d-block">
        {
          elements.render({
            attrName: 'title',
            tagName: size
          })
        }
        {
          elements.render({
            attrName: 'desc',
          })
        }
        {
          'on' === show && linkUrl.length && title.length && (
            <>
              <br />
              <a href={linkUrl} className="btn btn-primary" target="_blank">
                <strong>More Information</strong>
                <span className="sr-only">More Information about {title}</span>
              </a>
            </>
          )
        }
      </div>
      
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
