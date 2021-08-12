
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const SecuritySvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 12 14","version":"1.1","viewBox":"0 0 12 14","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M11.3 8.4C11 11.6 6.1 14 6.1 14S1.2 11.6.8 8.4c-.4-3.2-.1-7-.1-7s1.8.4 2.8 0C5.2.9 6.1 0 6.1 0s.9.8 2.5 1.4c1 .4 2.8 0 2.8 0s.3 3.8-.1 7zM5.8 3.6c-.5 0-.8.2-1.1.4-.4.3-.6.7-.6 1.2 0 .6.3 1.1.8 1.4l.9.4v1.9c-.2 0-.4-.1-.6-.2-.1-.2-.2-.5-.3-1H4c0 .7.2 1.2.6 1.5.3.3.7.4 1.2.5v.7h.5v-.7c.5 0 .8-.2 1.2-.4.4-.2.6-.7.6-1.3 0-.6-.3-1.1-.8-1.4 0 0-.4-.2-1-.4V4.4c.2 0 .3.1.5.2.1.1.2.4.3.7H8c-.1-.6-.3-1-.6-1.3-.3-.2-.7-.4-1.1-.4v-.7h-.5v.7zm.5 3.6c.6.2.9.5.9.9 0 .3-.1.5-.3.6-.2.1-.4.2-.6.2V7.2zM5.8 6c-.5-.2-.8-.4-.8-.8 0-.3.1-.5.3-.7.1-.1.3-.1.5-.2V6z","class":"st0"}}]},"name":"security"};

const Security = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={SecuritySvg} />;

Security.displayName = 'Security';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Security);
