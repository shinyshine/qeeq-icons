
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const CommonSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 20 20"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M23.87 21.57a1.94 1.94 0 0 0-1.94 1.94v11.62a1.94 1.94 0 0 0 1.94 1.94h11.62a1.94 1.94 0 0 0 1.94-1.94v-7.75l1.94-1.94v10.33A3.23 3.23 0 0 1 36.14 39H23.23A3.23 3.23 0 0 1 20 35.77V22.86a3.23 3.23 0 0 1 3.23-3.23h10.33l-1.94 1.94h-7.75zm7.22 9.36-4.33 1.23L28 27.85zm.43-.43-3.1-3.08 6.81-6.77 3.1 3.08zm8.21-8.16-.93.92-3.1-3.08.93-.92a.85.85 0 0 1 1.2 0l1.94 1.92a.84.84 0 0 1-.04 1.16z","class":"cls-1","transform":"translate(-20 -19)"}}]},"name":"common"};

const Common = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={CommonSvg} />;

Common.displayName = 'Common';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Common);
