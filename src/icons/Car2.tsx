
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const Car2Svg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 14 10","version":"1.1","viewBox":"0 0 14 10","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Shape","d":"M12.8 3.2H11.6L11 1.8C10.8 1 10.2.6 9.4.6H4.6c-.9 0-1.4.5-1.6 1.2l-.5 1.4H1.2c-.2 0-.3.1-.3.3v.3c0 .1.1.2.3.2l.4.1c-.1.2-.2.5-.2.8l-.1 1.7v2.2c0 .3.3.5.6.5h.9c.3 0 .6-.2.6-.5v-.6h7.5v.6c0 .3.3.5.6.5h.9c.3 0 .6-.2.6-.5V6.6l-.2-1.7c0-.3-.1-.6-.2-.8l.2-.1c.2 0 .3-.1.3-.3v-.2c0-.2-.1-.3-.3-.3zm-9.3-.4.4-.9c0-.2.1-.2.2-.3h5.8c.1.1.2.2.2.3l.4.9.1.5c0 .3-.5.6-.9.6H4.2c-.4 0-.9-.3-.9-.6l.2-.5zm.3 4.3c-.5 0-1-.3-1-.7 0-.4.4-.7 1-.7s1 .3 1 .7c0 .4-.4.7-1 .7zm6.9 0c-.5 0-1-.3-1-.7 0-.4.4-.7 1-.7.5 0 1 .3 1 .7 0 .4-.5.7-1 .7z","class":"st0"}}]},"name":"car2"};

const Car2 = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={Car2Svg} />;

Car2.displayName = 'Car2';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Car2);
