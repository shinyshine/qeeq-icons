
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const CitySvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 30.86 38.61"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M14.75 12.47 0 6.97 0 38.61 6.41 38.61 6.41 21.25 14.75 21.25 14.75 12.47z","class":"cls-1"}},{"tag":"path","attrs":{"d":"M30.86 1.01 28.76 1.01 28.76 0 23.55 0 23.55 1.01 21.44 1.01 21.44 38.61 26.59 38.61 30.86 38.61 30.86 24.59 30.86 1.01z","class":"cls-1"}},{"tag":"path","attrs":{"d":"M17.87 22.38 7.38 22.38 7.38 38.61 20.48 38.61 20.48 22.79 20.48 22.38 20.48 20.22 17.87 20.22 17.87 22.38z","class":"cls-1"}}]},"name":"city"};

const City = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={CitySvg} />;

City.displayName = 'City';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(City);
