
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const CouponFrozenSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 129.26 110.07"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M110.82 25.62A55 55 0 0 0 9.34 53.09l4 .14a51 51 0 0 1 94.11-25.47zM18.23 85.05a55 55 0 0 0 101-27l-4-.22a51 51 0 0 1-93.67 25z","class":"cls-1","transform":"translate(.04 .03)"}},{"tag":"path","attrs":{"d":"M92.51 26.29a40 40 0 0 0-66.41 17.8 1 1 0 1 0 1.92.54A38 38 0 0 1 91.1 27.69a1 1 0 1 0 1.41-1.4zM36.78 83.67a40 40 0 0 0 66.32-17.81 1 1 0 0 0-1.89-.65v.1a38 38 0 0 1-63 16.92 1 1 0 1 0-1.39 1.44zM3 52.82l114-30.53a4 4 0 0 1 4.9 2.83l7.25 27a4 4 0 0 1-2.83 4.9l-114 30.57a4 4 0 0 1-4.9-2.83L.1 57.72a4 4 0 0 1 2.84-4.89zm1 3.86 7.25 27 114-30.54-7.25-27z","class":"cls-1","transform":"translate(.04 .03)"}},{"tag":"path","attrs":{"d":"m96.89 54.72-2.51-9.37.19-.05 9.43 7.52 2.59-.7-4-15-3 .8 2.5 9.33-.19.05-9.39-7.48-2.61.7 4 15zm-6.53-1.12-6.79 1.82-1-3.64L89 50.06l-.66-2.48-6.4 1.72-.94-3.5 6.78-1.8-.72-2.68L77.14 44l4 15 9.92-2.66zm-23.5 9.17 11.56-3.1L77.7 57 70 59.06l-.05-.19 4.83-12-.56-2.11L63 47.75l.72 2.68 7.36-2 .05.19-4.86 12zM54.74 52.5c-2.43.65-3.47 3.06-2.63 6.19s2.89 4.71 5.38 4.05 3.46-3.07 2.62-6.2-2.93-4.69-5.37-4.04zM54 49.75c4.42-1.18 8 1.09 9.3 5.94s-.65 8.62-5.08 9.8-8-1.09-9.32-5.94.71-8.62 5.1-9.8zM39 64.42l1.45 5.43-3.13.84-4-15L39.58 54c3.29-.88 5.8.4 6.6 3.38a4.58 4.58 0 0 1-1.58 5l4.74 5.07-3.55 1-4.25-4.68zm-1.88-7L38.34 62l2.75-.74a2.28 2.28 0 0 0 1.89-3 2.34 2.34 0 0 0-3.15-1.64zm-8.9 15.7-1.56-5.83 6.09-1.63-.69-2.56L26 64.73l-1-3.9L31.6 59l-.72-2.68L21.07 59l4 15z","class":"cls-2","transform":"translate(.04 .03)"}}]},"name":"coupon-frozen"};

const CouponFrozen = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={CouponFrozenSvg} />;

CouponFrozen.displayName = 'CouponFrozen';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(CouponFrozen);