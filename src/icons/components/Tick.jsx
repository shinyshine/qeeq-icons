
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const TickSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Line","d":"m5.2 7.9 2.5 2c.2.2.5.1.7-.1.2-.2.1-.5-.1-.7l-2.5-2c-.2-.2-.5-.1-.7.1-.2.2-.1.5.1.7z","class":"st0"}},{"tag":"path","attrs":{"id":"Line-Copy","d":"m12.2 5.1-4.5 4c-.2.2-.2.5 0 .7.2.2.5.2.7 0l4.5-4c.2-.2.2-.5 0-.7-.2-.1-.5-.2-.7 0z","class":"st0"}},{"tag":"path","attrs":{"id":"路径","d":"M13.2 5c-1.1-1.8-3-3-5.2-3-3.3 0-6 2.6-6 6a5.95 5.95 0 0 0 9.3 5c.2-.1.4-.3.6-.4.5-.5 1-1 1.3-1.6.2-.3.3-.7.5-1.1.1-.3-.1-.5-.3-.6-.3-.1-.5.1-.6.3-.1.3-.2.6-.4.9-.3.5-.7 1-1.1 1.3-.2.1-.3.3-.5.4-.8.5-1.8.8-2.8.8-2.8 0-5-2.2-5-5s2.2-5 5-5c1.8 0 3.4 1 4.3 2.5.1.2.4.3.7.2.3-.2.4-.5.2-.7z","class":"st0"}}]},"name":"tick"};

const Tick = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={TickSvg} />;

Tick.displayName = 'Tick';
export default React.forwardRef(Tick);
