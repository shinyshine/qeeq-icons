
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const RightCycleSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 12 13","version":"1.1","viewBox":"0 0 12 13","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状结合","d":"M11.1 4.4s0 .1 0 0L6.3 8.7c-.1.1-.2.1-.3.1-.1 0-.2 0-.3-.1l-2.5-2c-.2-.1-.3-.5-.1-.7.2-.2.5-.3.7-.1L6 7.7 10.2 4C9.2 2.6 7.7 1.8 6 1.8c-2.8 0-5 2.2-5 5s2.2 5 5 5c1 0 2-.3 2.8-.8.2-.1.3-.2.5-.4.4-.4.8-.8 1.1-1.3.2-.3.3-.6.4-.9.1-.3.4-.4.6-.3.3.1.4.4.3.6-.1.4-.3.7-.5 1.1-.3.6-.8 1.2-1.3 1.6-.2.2-.4.3-.6.4a6.02 6.02 0 0 1-9.3-5c0-3.3 2.7-6 6-6 2.2 0 4.1 1.2 5.2 3 .1.2.1.5-.1.6z","class":"st0"}}]},"name":"right-cycle"};

const RightCycle = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={RightCycleSvg} />;

RightCycle.displayName = 'RightCycle';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(RightCycle);
