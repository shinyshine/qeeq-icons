
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const PaymentSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 11 10","version":"1.1","viewBox":"0 0 11 10","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M7.1 6.2h3.3V9s0 .9-.9.9H.9C.4 9.9 0 9.6 0 9V.9C0 .4.4 0 .9 0h8.5c.9 0 .9.9.9.9v.7H7.1c-.8 0-1.5.8-1.5 1.6v1.4c0 .9.7 1.6 1.5 1.6zM11 2.6v2.6s0 .3-.3.3H7.1a.9.9 0 0 1-.9-.9V3.2c0-.5.4-.9.9-.9h3.5c.4 0 .4.3.4.3zM7.9 3.9c0-.3-.2-.5-.5-.5s-.4.2-.4.5.2.5.5.5c.2 0 .4-.2.4-.5z","class":"st0"}}]},"name":"payment"};

const Payment = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={PaymentSvg} />;

Payment.displayName = 'Payment';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Payment);
