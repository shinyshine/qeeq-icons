
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const GlobalSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 14 14","version":"1.1","viewBox":"0 0 14 14","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M14 7c0-3.9-3.1-7-7-7S0 3.1 0 7c0 3.5 2.6 6.5 6.1 6.9.2 0 .4.1.7.1H7c3.9-.1 7-3.2 7-7zm-1 .1c0-.3-.1-.7-.2-1v-.3c.1.4.2.8.2 1.3zM1 7c0-.4.1-.8.2-1.2.2.2.9.2.9-.2.2.2.7.2.7.5 0 1.1 0 2.1 1 2.2 0 0 .5.2.7.8.1.2.4 0 .7 0 .2 0 0 .3 0 1s1.4 1.6 1.4 1.6c0 .4 0 .7.1 1.1-.3 0-.6 0-.8.1A6 6 0 0 1 1 7zm7.5 5.8c0-.2-.2-.2-.4-.2.2-.8.3-1.3.7-1.6.6-.5.1-1.1-.4-1-.3 0-.2-.4-.4-.5-.3 0-.7-.7-1.2-.9-.3-.1-.5-.4-.9-.4-.3 0-.8.2-.8.1C5.1 7.5 5 7 5 6.8c0-.2-.1-.1.3-.1.2 0 .2-.5.3-.5.2 0 .8.2 1 .2.2-.1 1 2.2 1 .4 0-.2-.1-.6 0-.8.4-.8.9-1.5.8-1.6 0-.1-.5-.1-.8 0-.1 0 0 .2-.2.2-.7.2-1.2-.2-1-.5.2-.3.9-.2 1-.7 0-.3.1-.7.1-1.1.8.2.7-1.2-.5-1.2 2.6 0 4.8 1.7 5.6 4 0 0-.1-.1-.2-.1-.4-1.1-1.3-.3-1 .5-1.7 1.3-1.2 2.2-.7 2.7.3.2.6.7.7 1-.2.6.7.3 1.2-.7-.4 2.1-2.1 3.8-4.1 4.3z","class":"st0"}}]},"name":"global"};

const Global = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={GlobalSvg} />;

Global.displayName = 'Global';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Global);
