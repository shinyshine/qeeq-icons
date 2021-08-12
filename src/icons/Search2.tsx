
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const Search2Svg: IconDefinition = {"icon":{"tag":"svg","attrs":{"xmlns:xlink":"http://www.w3.org/1999/xlink","viewBox":"0 0 20 20"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"path","attrs":{"id":"b","d":"M9 1a8 8 0 0 1 6.34 12.88l2.93 2.94a1.03 1.03 0 1 1-1.45 1.45l-2.94-2.93A8 8 0 1 1 9 1zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 9 3z"}},{"tag":"filter","attrs":{"id":"a","width":"213.8%","height":"213.8%","x":"-56.9%","y":"-45.5%","filterUnits":"objectBoundingBox"},"children":[{"tag":"feOffset","attrs":{"dy":"2","in":"SourceAlpha","result":"shadowOffsetOuter1"}},{"tag":"feGaussianBlur","attrs":{"in":"shadowOffsetOuter1","result":"shadowBlurOuter1","stdDeviation":"3"}},{"tag":"feColorMatrix","attrs":{"in":"shadowBlurOuter1","values":"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"}}]}]},{"tag":"g","attrs":{"fill":"none","fill-rule":"evenodd","stroke":"none","stroke-width":"1","transform":"translate(-1188 -77) translate(1178 67) translate(10 10)"},"children":[{"tag":"use","attrs":{"fill":"#000","filter":"url(#a)","xlink:href":"#b"}},{"tag":"use","attrs":{"fill":"#FFF","xlink:href":"#b"}}]}]},"name":"search2"};

const Search2 = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={Search2Svg} />;

Search2.displayName = 'Search2';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Search2);
