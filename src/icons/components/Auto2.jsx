
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const Auto2Svg = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 20 20"},"children":[{"tag":"path","attrs":{"fill":"#222","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"M10 2.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm.83 3.35H9.45L6.6 13.27h1.3l.67-1.86h3.1l.68 1.86h1.3l-2.83-7.42zm-.67 1.31 1.17 3.25H8.95l1.17-3.25h.04z","transform":"translate(-792 -255) translate(398 144) translate(244 110) translate(150 1)"}}]},"name":"auto2"};

const Auto2 = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={Auto2Svg} />;

Auto2.displayName = 'Auto2';
export default React.forwardRef(Auto2);
