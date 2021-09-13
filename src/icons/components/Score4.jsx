
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const Score4Svg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 29.94 29.72"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"ellipse","attrs":{"cx":"9.98","cy":"11.96","class":"cls-1","rx":"1.98","ry":"1.96"}},{"tag":"ellipse","attrs":{"cx":"19.98","cy":"11.96","class":"cls-1","rx":"1.98","ry":"1.96"}},{"tag":"path","attrs":{"d":"M21.72 38.34A13.18 13.18 0 1 0 8.44 25.17a13.23 13.23 0 0 0 13.28 13.17zm0 1.68a14.86 14.86 0 1 1 15-14.86 14.91 14.91 0 0 1-15 14.84z","class":"cls-1","transform":"translate(-6.75 -10.31)"}},{"tag":"path","attrs":{"d":"M27.3 28.71a6.49 6.49 0 0 1-11 0 .85.85 0 0 0-1.17-.27.84.84 0 0 0-.27 1.16 8.19 8.19 0 0 0 13.87 0 .84.84 0 0 0-.27-1.16.85.85 0 0 0-1.16.27z","class":"cls-1","transform":"translate(-6.75 -10.31)"}}]},"name":"score-4"};

const Score4 = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={Score4Svg} />;

Score4.displayName = 'Score4';
export default React.forwardRef(Score4);
