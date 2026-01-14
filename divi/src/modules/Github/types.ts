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
  title?: {
    innerContent?: FormatBreakpointStateAttr<{
      text?: string;
      level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    }>;
  };
  
  
  request?: {
    innerContent?: FormatBreakpointStateAttr<{
      per_page?:string;
      repo_type?:string;
      access_token?:string;
      username?:string;
      increase_rate_limit?: OnOff;
      client_id?:string;
      client_secret?:string;
      request_email?:string;
      email_body?:string;
    }>;
  };

  definitions?: {
    innerContent?: FormatBreakpointStateAttr<string>;
  };

}

export type SectionPrimaryModuleEditProps = ModuleEditProps<ModuleAttrs>;