
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const CouponUsedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 129.26 110.07"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M110.82 25.62A55 55 0 0 0 9.34 53.09l4 .14a51 51 0 0 1 94.11-25.47zM18.23 85.05a55 55 0 0 0 101-27l-4-.22a51 51 0 0 1-93.67 25z","class":"cls-1","transform":"translate(.04 .03)"}},{"tag":"path","attrs":{"d":"M92.51 26.29a40 40 0 0 0-66.41 17.8 1 1 0 1 0 1.92.54A38 38 0 0 1 91.1 27.69a1 1 0 1 0 1.41-1.4zM36.78 83.67a40 40 0 0 0 66.32-17.81 1 1 0 0 0-1.89-.65v.1a38 38 0 0 1-63 16.92 1 1 0 1 0-1.39 1.44zM3 52.82l114-30.53a4 4 0 0 1 4.9 2.83l7.25 27a4 4 0 0 1-2.83 4.9l-114 30.57a4 4 0 0 1-4.9-2.83L.1 57.72a4 4 0 0 1 2.84-4.89zm1 3.86 7.25 27 114-30.54-7.25-27z","class":"cls-1","transform":"translate(.04 .03)"}},{"tag":"path","attrs":{"d":"m81.95 45.07 2.58 9.63 2.26-.61c2.77-.74 3.87-2.86 3-6s-2.88-4.33-5.6-3.6zm-3.85-1.84 5.9-1.58c4.45-1.19 7.75.82 9 5.51 1.3 4.87-.51 8.28-5 9.48l-5.89 1.58zm.48 13.06-6.79 1.82-1-3.64 6.4-1.72-.66-2.48L70.15 52l-.94-3.5L76 46.67 75.28 44l-9.92 2.66 4 15L79.3 59zm-24.86 5.07c.86 2.76 3.65 3.89 7.22 2.94 3.76-1 5.58-3.47 4.77-6.49-.62-2.32-2.27-3.27-5.45-3.1l-1.91.1c-1.85.1-2.71-.24-3-1.16-.31-1.14.54-2.15 2.1-2.57s2.83.09 3.29 1.23l2.95-.79c-.81-2.64-3.64-3.86-6.94-3-3.46.93-5.23 3.39-4.47 6.21.61 2.28 2.33 3.35 5.21 3.19l2.06-.11c1.94-.1 2.84.25 3.09 1.21.3 1.13-.64 2.23-2.27 2.66s-3.2 0-3.67-1.15zm-14.8-7.62-3.13.84 2.63 9.81c.89 3.32 3.93 4.9 7.75 3.87S51.84 64.34 51 61l-2.63-9.81-3.13.84 2.54 9.48a3 3 0 0 1-2.32 3.93 3 3 0 0 1-4-2.25z","class":"cls-2","transform":"translate(.04 .03)"}}]},"name":"coupon-used"};

const CouponUsed = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={CouponUsedSvg} />;

CouponUsed.displayName = 'CouponUsed';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(CouponUsed);
