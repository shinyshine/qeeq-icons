
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const DoneSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 22 22"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M17.5 3.77a11 11 0 0 0-9.38 16.76 1 1 0 0 0 1.7-1A9 9 0 1 1 12 21.86a1 1 0 1 0-1.23 1.57A11 11 0 1 0 17.5 3.77z","class":"cls-1","transform":"translate(-6.5 -3.77)"}},{"tag":"path","attrs":{"d":"M15.17 19.26a1 1 0 0 0 .17.1 1 1 0 0 0 .19 0 1 1 0 0 0 .19 0 1 1 0 0 0 .19 0 1 1 0 0 0 .18 0 1 1 0 0 0 .16-.11 1 1 0 0 0 .14-.1l6.28-6.46a1 1 0 1 0-1.43-1.39L15.62 17l-1.93-1.68a1 1 0 1 0-1.31 1.51L15 19.17a1 1 0 0 0 .17.09z","class":"cls-1","transform":"translate(-6.5 -3.77)"}}]},"name":"done"};

const Done = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={DoneSvg} />;

Done.displayName = 'Done';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Done);
