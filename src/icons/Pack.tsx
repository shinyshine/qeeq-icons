
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const PackSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 19 20"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M30.5 19h2.64a2 2 0 0 1 2.11 2.06v1.27a.68.68 0 0 1-1.33.18.89.89 0 0 1 0-.23v-1.19a.69.69 0 0 0-.77-.76h-5.27a.68.68 0 0 0-.77.75v1.2a.67.67 0 0 1-.51.69.66.66 0 0 1-.84-.6 13.56 13.56 0 0 1 0-1.6 2 2 0 0 1 2-1.77h2.74zm-3.39 12v-2.57a1.72 1.72 0 0 0 0-.21.66.66 0 0 0-.56-.56.67.67 0 0 0-.79.69V33.67a.68.68 0 0 0 .83.63.67.67 0 0 0 .53-.69L27.11 31zm6.79 0v2.64a.66.66 0 0 0 .43.65.68.68 0 0 0 .93-.65v-5.3a.68.68 0 1 0-1.35 0c-.02.89-.02 1.77-.02 2.66zm-7.58 6.67a2 2 0 0 1-3.83 0 .24.24 0 0 0-.15-.16A2 2 0 0 1 21 35.8v-9.35a2 2 0 0 1 1.18-1.92 2.09 2.09 0 0 1 .94-.19H38a2 2 0 0 1 2 1.52 2.34 2.34 0 0 1 .06.56v9.18a2 2 0 0 1-1.36 2 .23.23 0 0 0-.11.12 2 2 0 0 1-3.8.09.15.15 0 0 0-.16-.1h-8.31z","class":"cls-1","transform":"translate(-21 -19)"}}]},"name":"pack"};

const Pack = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={PackSvg} />;

Pack.displayName = 'Pack';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Pack);
