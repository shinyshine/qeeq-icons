
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const GroupCopySvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"xmlns:xlink":"http://www.w3.org/1999/xlink","viewBox":"0 0 20 20"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"linearGradient","attrs":{"id":"a","x1":"50%","x2":"50%","y1":"0%","y2":"100%"},"children":[{"tag":"stop","attrs":{"offset":"0%","stop-color":"#00B2FF"}},{"tag":"stop","attrs":{"offset":"100%","stop-color":"#006AFF"}}]},{"tag":"path","attrs":{"id":"b","d":"M10 1C4.93 1 1 4.73 1 9.74a8.53 8.53 0 0 0 2.83 6.45c.14.13.23.32.24.51l.05 1.6c.01.51.54.84 1 .64l1.8-.79a.72.72 0 0 1 .47-.03c.82.22 1.7.34 2.61.34 5.07 0 9-3.7 9-8.72 0-5.01-3.93-8.72-9-8.72z"}}]},{"tag":"g","attrs":{"fill":"none","fill-rule":"evenodd","stroke":"none","stroke-width":"1"},"children":[{"tag":"g","attrs":{"transform":"translate(-1113 -338) translate(636 277) translate(465 51) translate(12 10)"},"children":[{"tag":"use","attrs":{"fill":"url(#a)","xlink:href":"#b"}},{"tag":"use","attrs":{"fill":"#FFF","xlink:href":"#b"}}]},{"tag":"path","attrs":{"fill":"#1889FF","d":"M4.6 12.28 7.24 8.1a1.35 1.35 0 0 1 1.95-.36l2.1 1.58c.2.14.46.14.65 0l2.84-2.16c.38-.29.88.17.62.57l-2.64 4.19c-.42.66-1.32.83-1.95.36l-2.1-1.58a.54.54 0 0 0-.65 0l-2.84 2.16c-.38.29-.88-.17-.62-.57z","transform":"translate(-1113 -338) translate(636 277) translate(465 51) translate(12 10)"}}]}]},"name":"Group-Copy"};

const GroupCopy = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={GroupCopySvg} />;

GroupCopy.displayName = 'GroupCopy';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(GroupCopy);
