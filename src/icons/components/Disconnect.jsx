
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const DisconnectSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Rectangle","d":"M3.8 3.8c.2-.2.5-.2.7 0l7.8 7.8c.2.2.2.5 0 .7-.2.2-.5.2-.7 0L3.8 4.5c-.2-.2-.2-.5 0-.7z","class":"st0"}},{"tag":"path","attrs":{"id":"Shape","d":"M8 4.6c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7l.4-.4c1.4-1.4 3.6-1.4 4.9 0s1.4 3.6 0 4.9l-.5.5c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7l.5-.5c1-1 1-2.6 0-3.5s-2.6-1-3.5 0l-.4.4zm.1 6.9c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-.5.5C7 14 4.8 14 3.4 12.7s-1.4-3.6 0-5l.5-.5c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-.5.5c-1 1-1 2.6 0 3.5s2.6 1 3.5 0l.5-.4z","class":"st0"}}]},"name":"disconnect"};

const Disconnect = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={DisconnectSvg} />;

Disconnect.displayName = 'Disconnect';
export default React.forwardRef(Disconnect);
