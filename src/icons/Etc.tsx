
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const EtcSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 13.78 5.93"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M39.33 37.93c-1.63 0-2.64-1.13-2.64-3s1-3 2.64-3a2.33 2.33 0 0 1 2.45 2.11h-1.15a1.26 1.26 0 0 0-1.3-1.04c-.88 0-1.43.73-1.43 1.92s.55 1.93 1.44 1.93a1.25 1.25 0 0 0 1.3-1h1.14a2.28 2.28 0 0 1-2.45 2.08zM35 37.79h-1.21v-4.63H32.1v-1h4.56v1H35zm-3.24-1h-2.58v-1.38h2.41v-.94h-2.41v-1.31h2.55v-1H28v5.64h3.73z","class":"cls-1","transform":"translate(-28 -32)"}}]},"name":"etc"};

const Etc = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={EtcSvg} />;

Etc.displayName = 'Etc';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Etc);
