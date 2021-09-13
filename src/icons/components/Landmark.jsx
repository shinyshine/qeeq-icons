
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const LandmarkSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 9 12"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M11 5a4.5 4.5 0 0 0-4.5 4.5C6.5 12 10.41 17 11 17s4.5-5 4.5-7.5A4.5 4.5 0 0 0 11 5zm0 6a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 11 11z","class":"cls-1","transform":"translate(-6.5 -5)"}}]},"name":"landmark"};

const Landmark = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={LandmarkSvg} />;

Landmark.displayName = 'Landmark';
export default React.forwardRef(Landmark);
