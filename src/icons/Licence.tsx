
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const LicenceSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 14 10","version":"1.1","viewBox":"0 0 14 10","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M12.6 0H1.7C1.1 0 .6.5.6 1v8c0 .5.5 1 1.1 1h10.9c.6 0 1.1-.5 1.1-1V1c-.1-.5-.6-1-1.1-1zM4.2 2.1c.3-.3.7-.4 1.1-.4s.8.2 1.1.5c.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1-.3.3-.7.4-1.1.4s-.8-.2-1.1-.4c-.4-.3-.5-.7-.5-1.2 0-.4.1-.8.5-1.1zm3.7 5.6c0 .2-.2.5-.5.5H3.2c-.3 0-.5-.2-.5-.5v-.8c0-.9.8-1.7 1.7-1.7h1.8c.9 0 1.7.8 1.7 1.7v.8zm3.7-.7c0 .3-.2.5-.5.5H9.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1.7c.2.1.4.3.4.5zm0-2c0 .3-.2.5-.5.5H8.9c-.3 0-.5-.3-.5-.5 0-.3.2-.5.5-.5h2.2c.3 0 .5.2.5.5zm0-2.1c0 .3-.2.5-.5.5H8.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2.7c.2 0 .4.2.4.5z","class":"st0"}}]},"name":"licence"};

const Licence = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={LicenceSvg} />;

Licence.displayName = 'Licence';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Licence);
