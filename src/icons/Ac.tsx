
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const AcSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状结合","d":"M7.3 11.8 6 12.9c-.3.3-.8.2-1.1-.1s-.3-.8.1-1.1l2.3-1.9v-.9h-1l-1.9 2.3c-.3.3-.8.4-1.1.1-.3-.3-.4-.8-.1-1.1l1.1-1.3H2.8c-.4 0-.8-.4-.8-.8s.4-.8.8-.8h1.5L3.3 6c-.3-.3-.2-.8.1-1.1.3-.3.8-.2 1.1.1l1.9 2.3h.9v-.9L5 4.6c-.4-.3-.4-.8-.2-1.1s.8-.4 1.1-.1l1.3 1.1V2.9c0-.4.4-.8.8-.8s.8.4.8.8v1.5l1.3-1.1c.3-.3.8-.2 1.1.1.3.3.2.8-.1 1.1L8.8 6.4v.9h.9L11.6 5c.3-.3.8-.4 1.1-.1.3.3.4.8.1 1.1l-1.1 1.3h1.5c.4 0 .8.4.8.8s-.4.8-.8.8h-1.5l1.1 1.3c.3.3.2.8-.1 1.1-.3.3-.8.2-1.1-.1L9.8 8.9h-1v.9l2.3 1.9c.3.3.4.8.1 1.1-.3.3-.8.4-1.1.1l-1.3-1.1v1.5c0 .4-.4.8-.8.8s-.8-.4-.8-.8v-1.5z","class":"st0"}}]},"name":"AC"};

const Ac = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={AcSvg} />;

Ac.displayName = 'Ac';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Ac);
