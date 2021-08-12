
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const ExtraServiceSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 14 13"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M7 10.78 2.67 13 3.5 8.3 0 4.97 4.84 4.28 7 0 9.16 4.28 14 4.97 10.5 8.3 11.33 13 7 10.78z","class":"cls-1"}}]},"name":"extra-service"};

const ExtraService = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={ExtraServiceSvg} />;

ExtraService.displayName = 'ExtraService';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(ExtraService);
