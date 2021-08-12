
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const Score1Svg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 29.84 29.72"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M21.72 38.34A13.18 13.18 0 1 0 8.49 25.17a13.21 13.21 0 0 0 13.23 13.17zm0 1.68a14.86 14.86 0 1 1 14.92-14.85A14.89 14.89 0 0 1 21.72 40z","class":"cls-1","transform":"translate(-6.8 -10.31)"}},{"tag":"path","attrs":{"d":"M17.07 18.78v.09l-.16.28a7 7 0 0 1-.6.84l-.32.36a5.77 5.77 0 0 1-.48.42 9 9 0 0 1-.85.59l-.28.17-.09.05a.84.84 0 1 0 .8 1.48l.47-.28a10.71 10.71 0 0 0 1-.71 7.44 7.44 0 0 0 .62-.55q.22-.22.43-.47a8.66 8.66 0 0 0 .74-1l.28-.49a.84.84 0 0 0-1.52-.74zM23.88 19.52c.05.11.15.28.28.49a8.66 8.66 0 0 0 .74 1q.21.25.43.47a7.44 7.44 0 0 0 .62.55 10.71 10.71 0 0 0 1 .71l.47.28a.84.84 0 1 0 .8-1.48l-.09-.05-.28-.17a9 9 0 0 1-.85-.59 5.77 5.77 0 0 1-.48-.42 3.73 3.73 0 0 1-.32-.36 7 7 0 0 1-.6-.84l-.16-.28v-.09a.84.84 0 0 0-1.52.74zM28.75 31.15a8.15 8.15 0 0 0-13.82 0 .84.84 0 0 0 1.43.89 6.46 6.46 0 0 1 11 0 .84.84 0 0 0 1.44-.89z","class":"cls-1","transform":"translate(-6.8 -10.31)"}}]},"name":"score-1"};

const Score1 = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={Score1Svg} />;

Score1.displayName = 'Score1';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Score1);
