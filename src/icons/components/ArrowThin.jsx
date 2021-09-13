
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const ArrowThinSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 6.33 14.4"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M6.33.61 5.54 0 0 7.2 5.54 14.4 6.33 13.79 1.26 7.2 6.33.61z","class":"cls-1"}}]},"name":"arrow_thin"};

const ArrowThin = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={ArrowThinSvg} />;

ArrowThin.displayName = 'ArrowThin';
export default React.forwardRef(ArrowThin);
