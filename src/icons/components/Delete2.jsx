
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const Delete2Svg = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 10 10"},"children":[{"tag":"path","attrs":{"fill":"#FF2D55","fill-rule":"evenodd","stroke":"none","stroke-width":"1","d":"M6 .5a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2H7v4a1 1 0 0 1-2 0v-4H1a1 1 0 1 1 0-2h4v-4a1 1 0 0 1 1-1z","transform":"translate(-1096 -1587) translate(1093 1583) translate(0 1) rotate(45 5.3 9.39)"}}]},"name":"delete2"};

const Delete2 = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={Delete2Svg} />;

Delete2.displayName = 'Delete2';
export default React.forwardRef(Delete2);
