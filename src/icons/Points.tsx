
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const PointsSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 9.99 10"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"id":"Combined-Shape","d":"M5 3.75c-2.95 0-5-1-5-1.88S2.05 0 5 0s5 1 5 1.87-2.06 1.88-5 1.88zM0 7c.86.8 2.77 1.36 5 1.36S9.14 7.77 10 7v1.12C10 9 7.94 10 5 10S0 9 0 8.12V7zm0-2.11c.86.8 2.77 1.36 5 1.36s4.14-.56 5-1.36V6c0 .89-2 1.87-5 1.87S0 6.93 0 6V4.89zm0-2.08c.86.8 2.77 1.36 5 1.36s4.14-.56 5-1.36V4c0 .88-2 1.87-5 1.87S0 4.84 0 4z","class":"cls-1"}}]},"name":"points"};

const Points = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={PointsSvg} />;

Points.displayName = 'Points';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Points);
