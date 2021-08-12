
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const RoundRightSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 22 21","version":"1.1","viewBox":"0 0 22 21","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状结合","d":"M10.8.5C16.5.5 21 5.1 21 10.7S16.5 21 10.8 21 .6 16.4.6 10.7 5.2.5 10.8.5zm0 1.7a8.5 8.5 0 1 0-.01 16.99A8.5 8.5 0 0 0 10.8 2.2zm1.6 4.6 3.3 3.3c.3.3.3.8.1 1.1l-.1.1-3.2 3.2c-.3.3-.9.3-1.2 0a.9.9 0 0 1-.1-1.1l.1-.1 1.8-1.8H6.9a.9.9 0 0 1-.9-.9c0-.4.3-.8.7-.8H13L11.2 8a.9.9 0 0 1-.1-1.1l.1-.1c.4-.2.8-.2 1.2 0z","class":"st0"}}]},"name":"round-right"};

const RoundRight = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={RoundRightSvg} />;

RoundRight.displayName = 'RoundRight';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(RoundRight);
