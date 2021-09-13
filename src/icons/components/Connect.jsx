
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const ConnectSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 19 19","version":"1.1","viewBox":"0 0 19 19","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Rectangle","d":"M5.5 14.2c-.3-.3-.3-.8 0-1.1l7.1-7.6c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-7.1 7.6c-.3.3-.8.3-1.1 0z","class":"st0"}},{"tag":"path","attrs":{"id":"Shape","d":"M11 13.6c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1L10 17c-2.2 2.2-5.7 2.2-7.9 0S-.1 11.2 2 9l2.2-2.2c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-2.2 2.2c-1.6 1.6-1.6 4.1 0 5.7s4.1 1.6 5.7 0l2.2-2.2zM7.6 5.9c-.3.3-.8.3-1.1 0-.3-.3-.3-.8 0-1.1l2-2.3c2.1-2.3 5.6-2.5 7.9-.4s2.5 5.6.4 7.9l-2.1 2.3c-.3.3-.8.4-1.1.1-.3-.3-.4-.8-.1-1.1L15.6 9c1.5-1.6 1.3-4.2-.3-5.6s-4.2-1.3-5.7.3l-2 2.2z","class":"st1"}}]},"name":"connect"};

const Connect = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={ConnectSvg} />;

Connect.displayName = 'Connect';
export default React.forwardRef(Connect);
