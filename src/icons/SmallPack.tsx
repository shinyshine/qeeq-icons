
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const SmallPackSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 11 14"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M37.91 38a.88.88 0 1 1 .8-.88.84.84 0 0 1-.8.88zm-4.82 0a.88.88 0 1 1 .8-.88.84.84 0 0 1-.8.88zm2.41-6.12c1.17 0 2.14 1.5 2.36 3.5h-4.72c.22-2 1.19-3.5 2.36-3.5zm4.88 4.37a.91.91 0 0 0-.86-.87h-.85C38.41 32.89 37.09 31 35.5 31s-2.91 1.89-3.17 4.38h-.85a.91.91 0 0 0-.86.87L30 44.13a.83.83 0 0 0 .87.87h9.26a.84.84 0 0 0 .87-.87z","class":"cls-1","transform":"translate(-30 -31)"}}]},"name":"small-pack"};

const SmallPack = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={SmallPackSvg} />;

SmallPack.displayName = 'SmallPack';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(SmallPack);
