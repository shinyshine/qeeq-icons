
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const UnselectedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 19 19"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M32 41.5a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5zm0-18a8.5 8.5 0 1 0 8.5 8.5 8.51 8.51 0 0 0-8.5-8.5z","class":"cls-1","transform":"translate(-22.5 -22.5)"}}]},"name":"unselected"};

const Unselected = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={UnselectedSvg} />;

Unselected.displayName = 'Unselected';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Unselected);
