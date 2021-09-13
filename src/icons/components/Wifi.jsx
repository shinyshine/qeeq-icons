
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const WifiSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 13.64 10.64"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M8.62.68a9.1 9.1 0 0 0-6.51 2.8l-.31.32.3.33 1 1.06.28.31.29-.29a7 7 0 0 1 5-2.11 7 7 0 0 1 5 2.11l.29.29.28-.31 1-1.06.3-.33-.31-.32A9.08 9.08 0 0 0 8.62.68z","class":"cls-1","transform":"translate(-1.8 -.68)"}},{"tag":"path","attrs":{"d":"M12.92 6a6.1 6.1 0 0 0-4.3-1.81h-.27a6.13 6.13 0 0 0-4 1.8L4 6.33l.31.33 1 1.08.28.3.29-.28a4 4 0 0 1 2.74-1.15 4 4 0 0 1 2.76 1.15l.29.28.28-.3 1-1.08.31-.33z","class":"cls-1","transform":"translate(-1.8 -.68)"}},{"tag":"path","attrs":{"d":"m8.62 11.32.3-.32 1.61-1.74.32-.35-.35-.32a2.72 2.72 0 0 0-1.87-.66 2.94 2.94 0 0 0-1.87.66l-.35.32.32.35L8.33 11z","class":"cls-1","transform":"translate(-1.8 -.68)"}}]},"name":"wifi"};

const Wifi = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={WifiSvg} />;

Wifi.displayName = 'Wifi';
export default React.forwardRef(Wifi);
