
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const WarningSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 4 12","version":"1.1","viewBox":"0 0 4 12","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M1.1 9.2h1.7c.4 0 .6.3.6.6v1.5c0 .4-.3.6-.6.6H1.1c-.4 0-.6-.3-.6-.6V9.9c0-.4.3-.7.6-.7zM1.1 0h1.7c.4 0 .6.3.6.6V7c0 .4-.3.6-.6.6H1.1C.8 7.6.5 7.3.5 7V.6c0-.3.3-.6.6-.6z","class":"st0"}}]},"name":"warning"};

const Warning = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={WarningSvg} />;

Warning.displayName = 'Warning';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Warning);
