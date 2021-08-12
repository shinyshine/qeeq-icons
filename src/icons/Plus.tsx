
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const PlusSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 18 18"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"id":"Line-Copy-17","d":"M17 10 18 10 18 8 17 8 1 8 0 8 0 10 1 10 17 10z","class":"cls-1"}},{"tag":"path","attrs":{"id":"Line-Copy-18","d":"M8 17 8 18 10 18 10 17 10 1 10 0 8 0 8 1 8 17z","class":"cls-1"}}]},"name":"plus"};

const Plus = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={PlusSvg} />;

Plus.displayName = 'Plus';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Plus);
