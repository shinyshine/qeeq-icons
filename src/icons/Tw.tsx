
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const TwSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 24 24"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M44.33 23H25.67A2.67 2.67 0 0 0 23 25.67v18.66A2.67 2.67 0 0 0 25.67 47h18.66A2.67 2.67 0 0 0 47 44.33V25.67A2.67 2.67 0 0 0 44.33 23zm-3 9.24v.43A9.31 9.31 0 0 1 41 35.3a9.55 9.55 0 0 1-1.17 2.52 9.9 9.9 0 0 1-1.9 2.18 8.33 8.33 0 0 1-2.62 1.48A9.56 9.56 0 0 1 32 42a9.08 9.08 0 0 1-5-1.47 7 7 0 0 0 .79 0 6.41 6.41 0 0 0 4.06-1.4 3.28 3.28 0 0 1-3.06-2.27 4.15 4.15 0 0 0 .62.05 3.38 3.38 0 0 0 .86-.11 3.22 3.22 0 0 1-1.88-1.13 3.17 3.17 0 0 1-.74-2.08 3.24 3.24 0 0 0 1.48.42 3.27 3.27 0 0 1-1.06-1.17 3.29 3.29 0 0 1 .05-3.22 9.27 9.27 0 0 0 3 2.42 9.12 9.12 0 0 0 3.77 1 3.67 3.67 0 0 1-.08-.75A3.28 3.28 0 0 1 40.46 30a6.42 6.42 0 0 0 2.08-.79 3.19 3.19 0 0 1-1.44 1.81 6.49 6.49 0 0 0 1.9-.47 6.84 6.84 0 0 1-1.66 1.69z","class":"cls-1","transform":"translate(-23 -23)"}}]},"name":"tw"};

const Tw = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={TwSvg} />;

Tw.displayName = 'Tw';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Tw);
