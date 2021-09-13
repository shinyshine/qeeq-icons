
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const CloseThinkSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 21.21 21.21"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M12.02 10.61 20.51 2.12 21.21 1.41 19.8 0 19.09.71 10.61 9.19 2.12.71 1.41 0 0 1.41.71 2.12 9.19 10.61.71 19.09 0 19.8 1.41 21.21 2.12 20.51 10.61 12.02 19.09 20.51 19.8 21.21 21.21 19.8 20.51 19.09 12.02 10.61z","class":"cls-1"}}]},"name":"close-think"};

const CloseThink = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={CloseThinkSvg} />;

CloseThink.displayName = 'CloseThink';
export default React.forwardRef(CloseThink);
