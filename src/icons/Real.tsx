
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const RealSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 9.33 12"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"m20.45 13.59-3.13 3.05a.5.5 0 0 1-.69 0l-2.08-2a.47.47 0 0 1 0-.68.5.5 0 0 1 .69 0L17 15.62l2.78-2.72a.5.5 0 0 1 .69 0 .47.47 0 0 1-.02.69zm-.25-3.86a10.41 10.41 0 0 1-2.95-1 6.12 6.12 0 0 1-2.46 1 5.18 5.18 0 0 1-2-.48v6.24c0 2.92 3.93 5.28 4.67 5.28s4.67-2.36 4.67-5.28V9.25a5.17 5.17 0 0 1-1.93.48z","class":"cls-1","transform":"translate(-12.83 -8.77)"}}]},"name":"real"};

const Real = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={RealSvg} />;

Real.displayName = 'Real';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Real);
