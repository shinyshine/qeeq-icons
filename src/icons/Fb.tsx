
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const FbSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 24 24"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M42.33 27H23.67A2.67 2.67 0 0 0 21 29.67v18.66A2.67 2.67 0 0 0 23.67 51H33v-9.33h-2.67v-3.3H33v-2.74c0-2.89 1.62-4.91 5-4.91h2.4v3.48h-1.6a1.76 1.76 0 0 0-1.8 1.91v2.25h3.42l-.76 3.3H37V51h5.33A2.67 2.67 0 0 0 45 48.33V29.67A2.67 2.67 0 0 0 42.33 27z","class":"cls-1","transform":"translate(-21 -27)"}}]},"name":"fb"};

const Fb = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={FbSvg} />;

Fb.displayName = 'Fb';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Fb);
