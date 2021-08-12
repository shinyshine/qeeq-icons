
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const CouponBannerSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 19.91 18.94"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M37 37.64a5.82 5.82 0 1 0-5.62-5.82A5.75 5.75 0 0 0 37 37.64zm.13 1.52a7.58 7.58 0 0 1-4.88-1.9c-2.85 1.5-4.86 3.42-5.2 6.73a.86.86 0 0 0 .78.94h.12c3.85-.16 6.87-.24 9.05-.26s5.21.07 9.06.25a.87.87 0 0 0 .9-.81.53.53 0 0 0 0-.13c-.33-3.29-2.34-5.11-5.07-6.73a7 7 0 0 1-4.81 1.91z","class":"cls-1","transform":"translate(-27 -26)"}}]},"name":"coupon_banner"};

const CouponBanner = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={CouponBannerSvg} />;

CouponBanner.displayName = 'CouponBanner';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(CouponBanner);
