
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const Score5Svg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 29.84 29.72"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M9.53 13.19 7.97 14.05 8.27 12.22 7 10.93 8.75 10.66 9.53 9 10.32 10.66 12.07 10.93 10.8 12.22 11.1 14.05 9.53 13.19z","class":"cls-1"}},{"tag":"path","attrs":{"d":"M19.53 13.19 17.97 14.05 18.27 12.22 17 10.93 18.75 10.66 19.53 9 20.32 10.66 22.07 10.93 20.8 12.22 21.1 14.05 19.53 13.19z","class":"cls-1"}},{"tag":"path","attrs":{"d":"M21.72 38.34A13.18 13.18 0 1 0 8.49 25.17a13.21 13.21 0 0 0 13.23 13.17zm0 1.68a14.86 14.86 0 1 1 14.92-14.85A14.89 14.89 0 0 1 21.72 40z","class":"cls-2","transform":"translate(-6.8 -10.31)"}},{"tag":"path","attrs":{"d":"M22.12 35.15c-3.79 0-7.32-3-7.32-6.73 0-.74 3.09-1.12 7.32-1.11s7.32.38 7.32 1.11c0 3.76-3.54 6.73-7.32 6.73z","class":"cls-2","transform":"translate(-6.8 -10.31)"}}]},"name":"score-5"};

const Score5 = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={Score5Svg} />;

Score5.displayName = 'Score5';
export default React.forwardRef(Score5);
