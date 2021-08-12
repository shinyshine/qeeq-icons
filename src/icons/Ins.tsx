
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const InsSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 24 24"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M35.41 33.25a2.2 2.2 0 0 0-2.16 2.25 2.25 2.25 0 0 0 4.5 0c.09-1.41-.75-2.25-2.34-2.25z","class":"cls-1","transform":"translate(-23.19 -23.16)"}},{"tag":"path","attrs":{"d":"M38.5 29.59h-6a2.84 2.84 0 0 0-2.91 2.81v6.19a2.84 2.84 0 0 0 2.91 2.81h6a2.84 2.84 0 0 0 2.91-2.81v-6.18a2.84 2.84 0 0 0-2.91-2.82zm0 8.91a4.39 4.39 0 0 1-7.31-3 4.38 4.38 0 0 1 7.5-2.81 3.62 3.62 0 0 1 1 2.91 4.11 4.11 0 0 1-1.19 2.9zm1-6a.94.94 0 1 1 .94-.94.94.94 0 0 1-.91.94z","class":"cls-1","transform":"translate(-23.19 -23.16)"}},{"tag":"path","attrs":{"d":"M44.52 23.16H25.85a2.67 2.67 0 0 0-2.67 2.67v18.66a2.67 2.67 0 0 0 2.67 2.67h18.67a2.67 2.67 0 0 0 2.67-2.67V25.82a2.67 2.67 0 0 0-2.67-2.66zM43 38.59A4.48 4.48 0 0 1 38.5 43h-6a4.48 4.48 0 0 1-4.5-4.41v-6.18A4.48 4.48 0 0 1 32.5 28h6a4.48 4.48 0 0 1 4.5 4.41z","class":"cls-1","transform":"translate(-23.19 -23.16)"}}]},"name":"ins"};

const Ins = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={InsSvg} />;

Ins.displayName = 'Ins';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Ins);
