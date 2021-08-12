
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const SimplerSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 25 30"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M22.08 27.52h3.85a1.48 1.48 0 0 0 1.5-1.5v-4.08c0-.56-.28-.7-.7-.28l-5 5.16c-.35.37-.21.7.35.7zm17.68 6h-8a.75.75 0 1 1 0-1.5h8a.74.74 0 0 1 .75.75.77.77 0 0 1-.75.7zm0 5H27.24a.75.75 0 1 1 0-1.5h12.52a.74.74 0 0 1 .75.75.81.81 0 0 1-.75.71zm0 5H27.24a.75.75 0 1 1 0-1.5h12.52a.74.74 0 0 1 .75.75.81.81 0 0 1-.75.73zM43 21H30.47A1.51 1.51 0 0 0 29 22.5v5a1.48 1.48 0 0 1-1.5 1.5h-5a1.48 1.48 0 0 0-1.5 1.5V48a3 3 0 0 0 3 3h19a3 3 0 0 0 3-3V24a3 3 0 0 0-3-3z","class":"cls-1","transform":"translate(-21 -21)"}}]},"name":"Simpler"};

const Simpler = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={SimplerSvg} />;

Simpler.displayName = 'Simpler';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Simpler);
