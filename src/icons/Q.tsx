
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const QSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 28 28","version":"1.1","viewBox":"0 0 28 28","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"reward-program_未登录","transform":"translate(-97 -1858)"},"children":[{"tag":"g","attrs":{"id":"benefits","transform":"translate(-326 1021)"},"children":[{"tag":"g","attrs":{"id":"_x32_","transform":"translate(326 745)"},"children":[{"tag":"g","attrs":{"id":"_x35_0Q","transform":"translate(55 92)"},"children":[{"tag":"g","attrs":{"id":"Q","transform":"translate(42)"},"children":[{"tag":"path","attrs":{"id":"Fill-26","d":"M9.2 20.4c-3.9-2.2-3.6-4.6-1-9.2 2.5-4.5 4.5-6.1 8.3-3.8 3.9 2.2 3.6 4.8 1.1 9.2-2.7 4.6-4.5 6-8.4 3.8m11.2 1-1-.9c.5-.6.9-1.3 1.3-2.1C25 11 23.4 7.3 18.3 4.3c-5.2-3-9.1-2.5-13.2 5-4.2 7.5-2.6 11 2.5 14.1 3.3 2 6.5 1.9 9.2-.1l1.3 1.3c.6.5 1.3.8 2.1.8h2.3l2-3.7h-3.4c-.2 0-.5-.1-.7-.3","class":"st0"}}]}]}]}]}]}]}]},"name":"Q"};

const Q = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={QSvg} />;

Q.displayName = 'Q';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Q);
