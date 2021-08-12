
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const ReturnSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 59.15 50.84"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M49 40.81a1.19 1.19 0 0 0-1.26 1.26v6.54a6.23 6.23 0 0 1-6.29 6.29H11.24a6.23 6.23 0 0 1-6.29-6.29V23.44h42.78v8.81a1.26 1.26 0 0 0 2.52 0V18.41a8.92 8.92 0 0 0-8.81-8.81h-3.78a1.35 1.35 0 0 0-1.26 1.26 1.19 1.19 0 0 0 1.26 1.26h3.78a6.23 6.23 0 0 1 6.29 6.29v2.52H4.94v-2.52a6.23 6.23 0 0 1 6.29-6.29H15a1.19 1.19 0 0 0 1.26-1.26A1.19 1.19 0 0 0 15 9.6h-3.76a8.92 8.92 0 0 0-8.81 8.81v30.2a8.92 8.92 0 0 0 8.81 8.81h30.2a8.92 8.92 0 0 0 8.81-8.81v-6.54A1.19 1.19 0 0 0 49 40.81z","class":"cls-1","transform":"translate(-2.43 -6.58)"}},{"tag":"path","attrs":{"d":"M61.57 37.29 54 31v5H37.66a1.26 1.26 0 0 0 0 2.52H54v5zM33.89 15.39a1.19 1.19 0 0 0 1.26-1.26V7.84a1.26 1.26 0 1 0-2.52 0v6.29a1.19 1.19 0 0 0 1.26 1.26zM18.79 15.39A1.19 1.19 0 0 0 20 14.13V7.84a1.26 1.26 0 1 0-2.52 0v6.29a1.19 1.19 0 0 0 1.31 1.26zM22.81 12.12h7.55a1.19 1.19 0 0 0 1.26-1.26 1.19 1.19 0 0 0-1.26-1.26h-7.55a1.19 1.19 0 0 0-1.26 1.26 1.19 1.19 0 0 0 1.26 1.26z","class":"cls-1","transform":"translate(-2.43 -6.58)"}}]},"name":"return"};

const Return = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={ReturnSvg} />;

Return.displayName = 'Return';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Return);
