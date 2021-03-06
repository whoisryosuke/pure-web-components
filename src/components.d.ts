/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PureBase {}
  interface PureButton {
    /**
    * HTML element to use as basis
    */
    'as': string;
    /**
    * Background color
    */
    'color': string;
    /**
    * Is disabled?
    */
    'disabled': boolean;
    /**
    * Displays button as link
    */
    'href': string | undefined;
    /**
    * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
    */
    'target': string | undefined;
    /**
    * The button or input type (usually submit)
    */
    'type': "submit" | "reset" | "button";
    /**
    * Optional prop for input to show text
    */
    'value': string;
  }
  interface PureForm {
    /**
    * Makes labels and input elements inline inside groups
    */
    'aligned': boolean;
    /**
    * HTML tag/element for form container
    */
    'as': string;
    /**
    * Stack form elements
    */
    'stacked': boolean;
  }
  interface PureGrid {
    /**
    * HTML tag/element for form container
    */
    'as': string;
  }
  interface PureMenu {
    /**
    * Display different HTML element or component as table wrapper
    */
    'as': string | undefined;
    /**
    * Display menu items horizontally
    */
    'horizontal': boolean | undefined;
    /**
    * Add a scrollbar for overflowed menu content
    */
    'scrollable': boolean | undefined;
  }
  interface PureTable {
    /**
    * Add border to table
    */
    'bordered': boolean | undefined;
    /**
    * Display table horizontally
    */
    'horizontal': boolean | undefined;
    /**
    * Add stripe to table
    */
    'striped': boolean | undefined;
  }
}

declare global {


  interface HTMLPureBaseElement extends Components.PureBase, HTMLStencilElement {}
  var HTMLPureBaseElement: {
    prototype: HTMLPureBaseElement;
    new (): HTMLPureBaseElement;
  };

  interface HTMLPureButtonElement extends Components.PureButton, HTMLStencilElement {}
  var HTMLPureButtonElement: {
    prototype: HTMLPureButtonElement;
    new (): HTMLPureButtonElement;
  };

  interface HTMLPureFormElement extends Components.PureForm, HTMLStencilElement {}
  var HTMLPureFormElement: {
    prototype: HTMLPureFormElement;
    new (): HTMLPureFormElement;
  };

  interface HTMLPureGridElement extends Components.PureGrid, HTMLStencilElement {}
  var HTMLPureGridElement: {
    prototype: HTMLPureGridElement;
    new (): HTMLPureGridElement;
  };

  interface HTMLPureMenuElement extends Components.PureMenu, HTMLStencilElement {}
  var HTMLPureMenuElement: {
    prototype: HTMLPureMenuElement;
    new (): HTMLPureMenuElement;
  };

  interface HTMLPureTableElement extends Components.PureTable, HTMLStencilElement {}
  var HTMLPureTableElement: {
    prototype: HTMLPureTableElement;
    new (): HTMLPureTableElement;
  };
  interface HTMLElementTagNameMap {
    'pure-base': HTMLPureBaseElement;
    'pure-button': HTMLPureButtonElement;
    'pure-form': HTMLPureFormElement;
    'pure-grid': HTMLPureGridElement;
    'pure-menu': HTMLPureMenuElement;
    'pure-table': HTMLPureTableElement;
  }
}

declare namespace LocalJSX {
  interface PureBase {}
  interface PureButton {
    /**
    * HTML element to use as basis
    */
    'as'?: string;
    /**
    * Background color
    */
    'color'?: string;
    /**
    * Is disabled?
    */
    'disabled'?: boolean;
    /**
    * Displays button as link
    */
    'href'?: string | undefined;
    /**
    * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
    */
    'target'?: string | undefined;
    /**
    * The button or input type (usually submit)
    */
    'type'?: "submit" | "reset" | "button";
    /**
    * Optional prop for input to show text
    */
    'value'?: string;
  }
  interface PureForm {
    /**
    * Makes labels and input elements inline inside groups
    */
    'aligned'?: boolean;
    /**
    * HTML tag/element for form container
    */
    'as'?: string;
    /**
    * Stack form elements
    */
    'stacked'?: boolean;
  }
  interface PureGrid {
    /**
    * HTML tag/element for form container
    */
    'as'?: string;
  }
  interface PureMenu {
    /**
    * Display different HTML element or component as table wrapper
    */
    'as'?: string | undefined;
    /**
    * Display menu items horizontally
    */
    'horizontal'?: boolean | undefined;
    /**
    * Add a scrollbar for overflowed menu content
    */
    'scrollable'?: boolean | undefined;
  }
  interface PureTable {
    /**
    * Add border to table
    */
    'bordered'?: boolean | undefined;
    /**
    * Display table horizontally
    */
    'horizontal'?: boolean | undefined;
    /**
    * Add stripe to table
    */
    'striped'?: boolean | undefined;
  }

  interface IntrinsicElements {
    'pure-base': PureBase;
    'pure-button': PureButton;
    'pure-form': PureForm;
    'pure-grid': PureGrid;
    'pure-menu': PureMenu;
    'pure-table': PureTable;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pure-base': LocalJSX.PureBase & JSXBase.HTMLAttributes<HTMLPureBaseElement>;
      'pure-button': LocalJSX.PureButton & JSXBase.HTMLAttributes<HTMLPureButtonElement>;
      'pure-form': LocalJSX.PureForm & JSXBase.HTMLAttributes<HTMLPureFormElement>;
      'pure-grid': LocalJSX.PureGrid & JSXBase.HTMLAttributes<HTMLPureGridElement>;
      'pure-menu': LocalJSX.PureMenu & JSXBase.HTMLAttributes<HTMLPureMenuElement>;
      'pure-table': LocalJSX.PureTable & JSXBase.HTMLAttributes<HTMLPureTableElement>;
    }
  }
}


