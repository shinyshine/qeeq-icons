
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const SelectSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 20 20"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M21.38 41.34h20v-20zm10.46-1.71h-.05l-.53-.54L28 36.34l1-1.22 2.69 2.29 6.41-6.3 1.12 1.14L32.34 39z","class":"cls-1","transform":"translate(-21.38 -21.34)"}}]},"name":"select"};

const Select = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={SelectSvg} />;

Select.displayName = 'Select';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Select);
