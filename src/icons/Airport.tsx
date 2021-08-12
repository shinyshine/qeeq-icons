
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const AirportSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 51.87 48.16"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M6.36 43.15a1 1 0 0 1-.22-1.05l4.47-10.38-4.46-9.81a.93.93 0 0 1 .08-.91 1 1 0 0 1 .85-.44h4.44a1.07 1.07 0 0 1 .77.34l5.12 5.7h10.45L22.14 9.2a.93.93 0 0 1 .13-.88 1 1 0 0 1 .82-.4H29a1 1 0 0 1 .84.42l12.68 18.51h10.25a5.18 5.18 0 0 1 5.17 4.94v.38a4.8 4.8 0 0 1-1.51 3.49 5.26 5.26 0 0 1-3.66 1.45H42.62L30.27 55.65a1 1 0 0 1-.84.43h-6a1 1 0 0 1-.82-.4.94.94 0 0 1-.15-.86l5.26-17.23H17.51l-4.83 5.5a1 1 0 0 1-.77.34H7.07a1 1 0 0 1-.71-.28z","class":"cls-1","transform":"translate(-6.06 -7.92)"}}]},"name":"airport"};

const Airport = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={AirportSvg} />;

Airport.displayName = 'Airport';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Airport);
