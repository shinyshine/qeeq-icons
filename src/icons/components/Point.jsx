
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const PointSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 5 5"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"circle","attrs":{"cx":"2.5","cy":"2.5","r":"2.5","class":"cls-1"}}]},"name":"point"};

const Point = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={PointSvg} />;

Point.displayName = 'Point';
export default React.forwardRef(Point);
