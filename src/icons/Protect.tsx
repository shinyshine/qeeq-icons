
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const ProtectSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 57 67.9"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M52.32 25.53 34 43.29a2.58 2.58 0 0 1-.42.54 2.88 2.88 0 0 1-3.9 0 2.59 2.59 0 0 1-.43-.54l-9.77-9.5a2.53 2.53 0 0 1 0-3.66 2.73 2.73 0 0 1 3.77 0l8.38 8.14 16.93-16.4a2.72 2.72 0 0 1 3.77 0 2.53 2.53 0 0 1-.01 3.66zm10.28-15a4.44 4.44 0 0 0-3-1.14h-2.17a40.11 40.11 0 0 1-8.76-.93c-4.36-1-9.39-5.86-10.85-6.81a4.5 4.5 0 0 0-4.87 0c-.18.12-5.44 5.58-10.59 6.81a40.62 40.62 0 0 1-8.83.93h-2.16a4.46 4.46 0 0 0-3 1.14A4.19 4.19 0 0 0 7 13.65v10.63c0 39.3 26.5 44.36 27.63 44.56a4.8 4.8 0 0 0 1.55 0C37.3 68.63 64 63.57 64 24.28V13.65a4.19 4.19 0 0 0-1.39-3.11z","class":"cls-1","transform":"translate(-7 -1)"}}]},"name":"protect"};

const Protect = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={ProtectSvg} />;

Protect.displayName = 'Protect';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Protect);
