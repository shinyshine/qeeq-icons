
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const CashbackSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 13 12","version":"1.1","viewBox":"0 0 13 12","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M11.9 6.9 5.2.2C5 0 4.7 0 4.5.2L.8 3.9c-.1.1-.1.5 0 .7l.2.1-.9 1.5c-.2.2-.1.5.1.6l7.2 4.3.1.1c.1.1.2.1.3.1l.2.1c.1 0 .2-.1.3-.1l3.6-3.6c.2-.2.2-.6 0-.8zm-1.2.8-.6.6c-.3-.3-.9-.3-1.2 0-.3.3-.3.9 0 1.2l-.6.5c-.2.2-.5.2-.7 0L2.1 4.6c-.2-.2-.2-.6 0-.7l.6-.6c.3.3.9.3 1.2 0s.3-.9 0-1.2l.6-.6c.2-.2.5-.2.7 0L10.7 7c.2.1.2.5 0 .7z","class":"st0"}},{"tag":"path","attrs":{"d":"M5.1 4.5c-.6.7-.6 1.8 0 2.5.7.7 1.8.7 2.5 0s.7-1.8 0-2.5-1.8-.7-2.5 0z","class":"st0"}}]},"name":"cashback"};

const Cashback = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={CashbackSvg} />;

Cashback.displayName = 'Cashback';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Cashback);
