// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  FormatBreakpointStateAttr,
  InternalAttrs,
  type Element,
  type Module,
  type OnOff
} from '@divi/types';

export interface ModuleCssAttr extends Module.Css.AttributeValue {
}

export type ModuleCssGroupAttr = FormatBreakpointStateAttr<ModuleCssAttr>;

export interface ModuleAttrs extends InternalAttrs {
  // CSS options is used across multiple elements inside the module thus it deserves its own top property.
  css?: ModuleCssGroupAttr;

  module?: {
    meta?: Element.Meta.Attributes;
    advanced?: {
      link?: Element.Advanced.Link.Attributes;
      htmlAttributes?: Element.Advanced.IdClasses.Attributes;
      text?: Element.Advanced.Text.Attributes;
    };
    decoration?: Element.Decoration.PickedAttributes<
      'animation' |
      'background' |
      'border' |
      'boxShadow' |
      'disabledOn' |
      'filters' |
      'overflow' |
      'position' |
      'scroll' |
      'sizing' |
      'spacing' |
      'sticky' |
      'transform' |
      'transition' |
      'zIndex'
    >;
  };

  // Fields
  layout?: {
    innerContent?: FormatBreakpointStateAttr<string>;
  };

  title?: {
    innerContent?: FormatBreakpointStateAttr<string>;
    advanced?: FormatBreakpointStateAttr<{
      align?: 'left' | 'center' | 'right';
      size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
      color?: string;
    }>;
  };

  content?: {
    innerContent?: FormatBreakpointStateAttr<string>;
  };

  button?: {
    innerContent?: Element.Types.Button.InnerContent.Attributes;
    advanced?: FormatBreakpointStateAttr<{
      show?: OnOff;
    }>;
  };

  icon?: {
    innerContent?: FormatBreakpointStateAttr<string>;
    advanced?: FormatBreakpointStateAttr<{
      show?: OnOff;
    }>;
  };
}

export type FullwidthPanelModuleEditProps = ModuleEditProps<ModuleAttrs>;