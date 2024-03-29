/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface GithubAlikeCalendar {
    'responsive': boolean;
    'username': string;
  }
}

declare global {


  interface HTMLGithubAlikeCalendarElement extends Components.GithubAlikeCalendar, HTMLStencilElement {}
  var HTMLGithubAlikeCalendarElement: {
    prototype: HTMLGithubAlikeCalendarElement;
    new (): HTMLGithubAlikeCalendarElement;
  };
  interface HTMLElementTagNameMap {
    'github-alike-calendar': HTMLGithubAlikeCalendarElement;
  }
}

declare namespace LocalJSX {
  interface GithubAlikeCalendar extends JSXBase.HTMLAttributes<HTMLGithubAlikeCalendarElement> {
    'responsive'?: boolean;
    'username'?: string;
  }

  interface IntrinsicElements {
    'github-alike-calendar': GithubAlikeCalendar;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


