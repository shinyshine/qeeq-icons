
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const VoucherSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 28 28","version":"1.1","viewBox":"0 0 28 28","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M10 20.9c-2.4-1.4-4-4-4-6.9 0-4.4 3.6-8 8-8s8 3.6 8 8c0 3-1.6 5.5-4 6.9v1.2c0 .5-.4.9-.9.9h-6.2a.9.9 0 0 1-.9-.9v-1.2z","class":"st0"}},{"tag":"path","attrs":{"d":"M11 26c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1h-6zM13 2c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1s-1-.4-1-1V2zM21.3 4.3c.4-.4 1-.5 1.4-.1.4.4.5 1 .1 1.4l-1.3 1.5c-.4.4-1 .5-1.4.1-.4-.4-.5-1-.1-1.4l1.3-1.5zM26.1 11.3c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-2 .3c-.5.1-1.1-.3-1.2-.8-.1-.5.3-1.1.8-1.2l2-.3zM1.5 13.3c-.5-.1-.9-.6-.8-1.2.1-.5.6-.9 1.2-.8l2 .3c.5.1.9.6.8 1.2-.1.5-.6.9-1.2.8l-2-.3zM5.2 5.6c-.4-.5-.3-1.1.1-1.4.4-.4 1.1-.3 1.4.1L8 5.8c.4.4.3 1.1-.1 1.4-.4.4-1.1.3-1.4-.1L5.2 5.6z","class":"st1"}}]},"name":"voucher"};

const Voucher = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={VoucherSvg} />;

Voucher.displayName = 'Voucher';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Voucher);
