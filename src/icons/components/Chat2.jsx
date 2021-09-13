
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const Chat2Svg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M7.9 2.3c-2.4 0-4.3 1.9-4.3 4.2 0 2.3 1.9 4.2 4.3 4.2s4.3-1.9 4.3-4.2c0-2.3-1.9-4.2-4.3-4.2z","class":"st0"}},{"tag":"path","attrs":{"d":"M2.9 8.2V4.3h-.2C3.6 2.3 5.6 1 7.9 1c2.3 0 4.3 1.3 5.2 3.3h-.2v3.9a2 2 0 0 0 2-2c0-.7-.4-1.4-1-1.7C13 2.1 10.7.3 7.9.3S2.8 2 1.9 4.5c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2zM12.2 10.4a6.6 6.6 0 0 1-4.3 1.7c-1.7 0-3.2-.6-4.3-1.7-2 1-3.4 2.8-3.4 5.3h15.4c0-2.4-1.3-4.2-3.4-5.3z","class":"st0"}}]},"name":"chat2"};

const Chat2 = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={Chat2Svg} />;

Chat2.displayName = 'Chat2';
export default React.forwardRef(Chat2);
