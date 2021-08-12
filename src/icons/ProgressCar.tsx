
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const ProgressCarSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 16","version":"1.1","viewBox":"0 0 40 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状备份","d":"M39.9 11c-.1 1-.7 1.8-1.6 2.2.1-.3.1-.6.1-.9 0-2.8-2.3-5.1-5.1-5.1s-5.1 2.3-5.1 5.1c0 .4.1.8.1 1.1h-15c.1-.3.1-.7.1-1.1 0-2.8-2.3-5.1-5.1-5.1s-5.1 2.3-5.1 5.1v.7C1.4 12.2.1 10.6 0 8.4c0-.4 0-.8.5-1.6.2-.5.5-1.2.5-2 .1-.8.7-1.5 1.5-1.7 1.8-.4 2.7.3 3.7-.5 4-2.6 8.7-3.3 14.5-2 .6.1.6.2 7 3.3.2.2.6.3 1.1.3 2.3 0 9.4 1.4 10 2.2 1.1 1.4 1.4 2.9 1.1 4.6zm-24-6.9-.4-2.3c-2.9 0-5.4.6-7.5 1.9l1.3.4h6.6zm8.3.2c-3.4-1.7-3.4-1.7-3.7-1.8-1.1-.2-2.2-.4-3.2-.5l.4 2.1v.1h6.5zm-12.5 8.1c0 2-1.6 3.5-3.5 3.5-2 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.5 3.5 3.5zm25.2 0c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5 3.5 1.5 3.5 3.5z","class":"st0"}}]},"name":"progress-car"};

const ProgressCar = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={ProgressCarSvg} />;

ProgressCar.displayName = 'ProgressCar';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(ProgressCar);
