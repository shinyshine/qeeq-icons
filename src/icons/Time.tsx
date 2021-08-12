
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const TimeSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 15.98 15.97"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M10.84 9.9V6.35a.62.62 0 0 0-1.25 0v4.17a.62.62 0 0 0 .62.62h4.72a.62.62 0 1 0 0-1.25M10 2a8 8 0 1 0 7.46 10.86l-.93-.36A7 7 0 1 1 17 10h1a8 8 0 0 0-8-8z","class":"cls-1","transform":"translate(-2 -2)"}}]},"name":"time"};

const Time = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={TimeSvg} />;

Time.displayName = 'Time';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Time);
