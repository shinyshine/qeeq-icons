
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const DocSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 10 12","version":"1.1","viewBox":"0 0 10 12","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M6.4 10.1V12L9 9.7H6.8c-.2 0-.4.2-.4.4zM8.6 1H.4c-.2 0-.4.3-.4.5v10.1c0 .2.2.4.4.4H6V9.7c0-.2.2-.4.4-.4H9V1.4c0-.1-.2-.4-.4-.4zM1.9 8.7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm0-2.3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm0-2.3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm5.3 4.2c0 .1-.1.2-.2.2H3.4c-.1 0-.2-.1-.2-.2V8c0-.1.1-.2.2-.2H7c.1 0 .2.1.2.2v.3zm0-2.3c0 .1-.1.2-.2.2H3.4c-.1 0-.2-.1-.2-.2v-.2c0-.1.1-.2.2-.2H7c.1 0 .2.1.2.2V6zm0-2.3c0 .2-.1.3-.2.3H3.4c-.1 0-.2-.1-.2-.3v-.2c0-.1.1-.2.2-.2H7c.1 0 .2.1.2.2v.2zM9.6 0H1.3C1 0 .8.3.8.6H9c.2 0 .4.2.4.4v7.7c.3 0 .6-.2.6-.5V.4c0-.2-.2-.4-.4-.4z","class":"st0"}}]},"name":"doc"};

const Doc = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={DocSvg} />;

Doc.displayName = 'Doc';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Doc);
