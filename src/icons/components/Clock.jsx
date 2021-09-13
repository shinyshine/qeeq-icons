
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const ClockSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 12 12"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"m19.85 17.78-.21.21a.3.3 0 0 1-.42 0L17.27 16c-.07-.07-.06-.2-.06-.33V11.9a.3.3 0 0 1 .3-.3h.3a.3.3 0 0 1 .3.3v3.71l1.74 1.74a.3.3 0 0 1 0 .42zm-2-8.28a6 6 0 1 0 6 6 6 6 0 0 0-6.04-6z","class":"cls-1","transform":"translate(-11.81 -9.5)"}}]},"name":"clock"};

const Clock = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={ClockSvg} />;

Clock.displayName = 'Clock';
export default React.forwardRef(Clock);
