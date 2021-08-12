
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const PassportSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 17","version":"1.1","viewBox":"0 0 16 17","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状","d":"M5 5.8h1.3c.1-.9.2-1.7.5-2.3-.9.4-1.6 1.3-1.8 2.3zm0 1.1c.2 1 .9 1.9 1.8 2.3-.3-.7-.4-1.5-.5-2.3H5zm3.2 2.5c.3-.2.7-1.1.8-2.5H7.4c.1 1.4.6 2.3.8 2.5zm-.8-3.6H9c-.1-1.5-.5-2.3-.8-2.6-.2.3-.7 1.1-.8 2.6zm2.2 3.4c1-.4 1.7-1.3 1.8-2.3h-1.3c0 .8-.2 1.6-.5 2.3zM14.8 0H2.7C1.5 0 .5 1 .5 2.1v12.6c0 1.2 1 2.1 2.2 2.1h12.1c.6 0 1.1-.5 1.1-1V1.1c0-.6-.5-1.1-1.1-1.1zm-2.7 13.7H4.4c-.3 0-.6-.2-.6-.5s.2-.5.6-.5h7.7c.3 0 .6.2.6.5s-.3.5-.6.5zm-3.9-3.2c-2.4 0-4.4-1.9-4.4-4.2s2-4.2 4.4-4.2 4.4 1.9 4.4 4.2-2 4.2-4.4 4.2zm1.4-7c.3.6.4 1.4.5 2.3h1.3c-.1-1-.8-1.9-1.8-2.3z","class":"st0"}}]},"name":"passport"};

const Passport = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={PassportSvg} />;

Passport.displayName = 'Passport';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Passport);
