import React from 'react';


export function normalizeAttrs(attrs = {}) {
  return Object.keys(attrs).reduce((acc, key) => {
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
    node,
    key,
    rootProps,
  ) {
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