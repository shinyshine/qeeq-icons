
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const RadiusRightSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 16 16"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"m79.51 51-7 7.7a.82.82 0 0 1-1.33 0l-3.41-4.32s-.4-.59.1-.94a.8.8 0 0 1 1 .1l3 2.27 6.81-5.89a8.13 8.13 0 1 0 .83 1.08z","class":"cls-1","transform":"translate(-64.61 -47)"}}]},"name":"radius-right"};

const RadiusRight = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={RadiusRightSvg} />;

RadiusRight.displayName = 'RadiusRight';
export default React.forwardRef(RadiusRight);
