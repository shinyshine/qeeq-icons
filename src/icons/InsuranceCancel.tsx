
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const InsuranceCancelSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 24 24","version":"1.1","viewBox":"0 0 24 24","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M19.1 6.2c-.2-.2-.5-.3-.8-.3h-.6c-.5 0-1.4 0-2.3-.2-1.1-.3-2.4-1.5-2.8-1.7-.2-.1-.4-.2-.6-.2-.2 0-.4.1-.6.2 0 0-1.4 1.4-2.8 1.7-.9.2-1.9.2-2.4.2h-.6c-.2 0-.5.1-.7.3-.3.2-.4.4-.4.7v2.6c0 9.5 7 10.8 7.3 10.8h.4c.3 0 7.3-1.3 7.3-10.8V6.9c0-.3-.1-.5-.4-.7zm-3.9 7.9c.3.3.3.7 0 1-.3.3-.7.3-1 0L12 12.8 9.8 15c-.3.3-.7.3-1 0-.3-.3-.3-.7 0-1l2.2-2.2-2.2-2.1c-.3-.3-.3-.7 0-1s.7-.3 1 0l2.2 2.2 2.2-2.2c.3-.3.7-.3 1 0s.3.7 0 1L13 11.9l2.2 2.2z","class":"st0"}}]},"name":"InsuranceCancel"};

const InsuranceCancel = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={InsuranceCancelSvg} />;

InsuranceCancel.displayName = 'InsuranceCancel';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(InsuranceCancel);
