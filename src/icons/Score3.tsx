
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const Score3Svg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 29.94 29.72"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"ellipse","attrs":{"cx":"9.98","cy":"11.96","class":"cls-1","rx":"1.98","ry":"1.96"}},{"tag":"ellipse","attrs":{"cx":"19.98","cy":"11.96","class":"cls-1","rx":"1.98","ry":"1.96"}},{"tag":"path","attrs":{"d":"M21.72 38.34A13.18 13.18 0 1 0 8.44 25.17a13.23 13.23 0 0 0 13.28 13.17zm0 1.68a14.86 14.86 0 1 1 15-14.86 14.91 14.91 0 0 1-15 14.84z","class":"cls-1","transform":"translate(-6.75 -10.31)"}},{"tag":"path","attrs":{"d":"M25.94 30.31H18.6a.84.84 0 1 0 0 1.68h7.34a.84.84 0 1 0 0-1.68z","class":"cls-1","transform":"translate(-6.75 -10.31)"}}]},"name":"score-3"};

const Score3 = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={Score3Svg} />;

Score3.displayName = 'Score3';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Score3);
