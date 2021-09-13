
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const LockSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 17 20"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M36.58 33v3c0 .77-.09 1.37-1.08 1.37s-1.07-.62-1.07-1.39v-3a1.93 1.93 0 0 1-.69-1.43c0-.91.8-1.39 1.79-1.39s1.79.5 1.79 1.39a2 2 0 0 1-.74 1.45zm5.68-5.37H28.74a1.64 1.64 0 0 0-1.74 1.5v9.37a1.64 1.64 0 0 0 1.74 1.5h13.52A1.64 1.64 0 0 0 44 38.49v-9.36a1.64 1.64 0 0 0-1.74-1.51z","class":"cls-1","transform":"translate(-27 -20)"}},{"tag":"path","attrs":{"d":"M39.44 25.56v-.87a3.48 3.48 0 0 0-6.93 0v3.89h-1.73v-3.89A5 5 0 0 1 36 20a5 5 0 0 1 5.19 4.69v.87z","class":"cls-1","transform":"translate(-27 -20)"}}]},"name":"lock"};

const Lock = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={LockSvg} />;

Lock.displayName = 'Lock';
export default React.forwardRef(Lock);
