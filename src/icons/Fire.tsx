
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const FireSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 11.98 13.99"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M176 178s-4.28 2.19-4.28 5.68a5.3 5.3 0 0 0 .86 3.1 12.23 12.23 0 0 1-2.58-2.28c0 5.74 3 7.49 6 7.49 4.28 0 6-3 6-5.21 0-3.26-2.76-3.69-2.76-7.27a3.17 3.17 0 0 0-1.61 3S176 182.24 176 178z","class":"cls-1","transform":"translate(-170 -178)"}}]},"name":"fire"};

const Fire = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={FireSvg} />;

Fire.displayName = 'Fire';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Fire);
