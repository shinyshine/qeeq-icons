
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const IconLinkSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 18 17"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"id":"icon_link","d":"M4.22 1.85A1.86 1.86 0 1 1 2.36 0a1.85 1.85 0 0 1 1.86 1.85zm0 3.32H.48V17h3.75zm6 0H6.49V17h3.73v-6.21c0-3.45 4.52-3.73 4.52 0V17h3.74V9.51c0-5.82-6.69-5.61-8.26-2.74z","class":"cls-1","data-name":"icon link","transform":"translate(-.48)"}}]},"name":"icon_link"};

const IconLink = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={IconLinkSvg} />;

IconLink.displayName = 'IconLink';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(IconLink);
