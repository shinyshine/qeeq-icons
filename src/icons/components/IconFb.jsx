
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const IconFbSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 9.63 18"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"id":"icon_fb","d":"M3.53 3.48V7H.32v3.52h3.21V18h3.21v-7.47H10V7H6.74V4.68A1.11 1.11 0 0 1 7.8 3.52h2.11V0H6.7a3.3 3.3 0 0 0-3.17 3.48z","class":"cls-1","data-name":"icon fb","transform":"translate(-.32)"}}]},"name":"icon_fb"};

const IconFb = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={IconFbSvg} />;

IconFb.displayName = 'IconFb';
export default React.forwardRef(IconFb);
