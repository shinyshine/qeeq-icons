
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const ExcessSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 22 22"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M6.24 21.2a11 11 0 1 0-4-3.86 1 1 0 0 0 1.7-1A9 9 0 1 1 6 18.67a1 1 0 1 0-1.2 1.58 11 11 0 0 0 1.44.95z","class":"cls-1","transform":"translate(-.58 -.58)"}},{"tag":"path","attrs":{"d":"M10.58 17.08a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0z","class":"cls-1","transform":"translate(-.58 -.58)"}},{"tag":"circle","attrs":{"cx":"11","cy":"6","r":"1","class":"cls-1"}}]},"name":"excess"};

const Excess = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={ExcessSvg} />;

Excess.displayName = 'Excess';
export default React.forwardRef(Excess);
