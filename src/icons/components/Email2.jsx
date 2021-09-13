
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const Email2Svg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 24 16","version":"1.1","viewBox":"0 0 24 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状","d":"M20.6 0H2.5C1.1 0 0 1.1 0 2.4v11.1c0 1.3 1.1 2.4 2.4 2.4h18.2c1.3 0 2.4-1.1 2.4-2.4V2.4c.1-1.3-1-2.4-2.4-2.4zm1.5 2.4v11.1c0 .2-.1.4-.1.6l-6.3-6.3 6.2-6.2c.1.3.2.6.2.8zM20.6 1c.2 0 .3.1.5.1H21l-8.5 8.6c-.5.5-1.5.5-2.1 0L2 1.1c.1-.1.3-.1.5-.1h18.1zM1.1 14.1c0-.2-.1-.3-.1-.5V2.4c0-.3.1-.6.3-.8l6.2 6.2-6.4 6.3zm1.4.9c-.3 0-.5-.1-.7-.2l6.3-6.3 1.8 1.8c.5.5 1 .7 1.7.7.6 0 1.2-.3 1.7-.7L15 8.6l6.3 6.3c-.2.1-.5.2-.7.2L2.5 15z","class":"st0"}}]},"name":"email-2"};

const Email2 = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={Email2Svg} />;

Email2.displayName = 'Email2';
export default React.forwardRef(Email2);
