
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const RightSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 17.8 13.06"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M16.36 0 15.67.72 6.48 10.23 2.11 6.01 1.39 5.32 0 6.75.72 7.45 5.81 12.36 6.53 13.06 6.78 12.8 6.78 12.8 7.48 12.08 17.11 2.11 17.8 1.39 16.36 0z","class":"cls-1"}}]},"name":"right"};

const Right = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={RightSvg} />;

Right.displayName = 'Right';
export default React.forwardRef(Right);
