import * as React from 'react';
import { AbstractNode, IconDefinition } from './types';

export interface Attrs {
  [key: string]: string;
}

export function normalizeAttrs(attrs: Attrs = {}): Attrs {
  return Object.keys(attrs).reduce((acc: Attrs, key) => {
    const val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        acc[key] = val;
    }
    return acc;
  }, {});
}


// 二次封装createElement
export function generate(
    node: AbstractNode,
    key: string,
    rootProps?: { [key: string]: any } | false,
  ): any {
    if (!rootProps) {
      return React.createElement(
        node.tag,
        { key, ...normalizeAttrs(node.attrs) },
        (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`)),
      );
    }
    return React.createElement(
      node.tag,
      {
        key,
        ...normalizeAttrs(node.attrs),
        ...rootProps,
      },
      (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`)),
    );
  }