
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const DropSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 11.41 5.34"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M5.7 5.34 0 .78.63 0 5.7 4.06 10.78 0 11.41.78 5.7 5.34z","class":"cls-1"}}]},"name":"drop"};

const Drop = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={DropSvg} />;

Drop.displayName = 'Drop';
export default React.forwardRef(Drop);
