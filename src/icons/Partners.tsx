
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const PartnersSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 32.97 28.98"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M37 28a2.38 2.38 0 0 1 0-.28 2.7 2.7 0 0 0-.61-1.72 8.39 8.39 0 0 0-2.41-2 24.6 24.6 0 0 0-5.61-2.43c-.79-.24-1.78-.73-1.79-1.46a2.6 2.6 0 0 1 .51-1.77 11.76 11.76 0 0 0 2.16-4.57 10.72 10.72 0 0 0 .19-4.58 6.14 6.14 0 0 0-2.12-3.82A5.34 5.34 0 0 0 23.89 4a6.29 6.29 0 0 0-1.53.2A5.27 5.27 0 0 0 20 5.48a7.21 7.21 0 0 1 1.58 1 7.46 7.46 0 0 1 2.6 4.63 12.13 12.13 0 0 1-.2 5.16 13 13 0 0 1-2.42 5.09 1.09 1.09 0 0 0-.21.71 2.88 2.88 0 0 0 .85.39A25.86 25.86 0 0 1 28.12 25a9.79 9.79 0 0 1 2.78 2.37 4 4 0 0 1 .86 2.57v.13a2.81 2.81 0 0 1 0 .71h3.35s2-1.45 1.89-2.78z","class":"cls-1","transform":"translate(-4.02 -4.04)"}},{"tag":"path","attrs":{"d":"M30.43 29.91a2.7 2.7 0 0 0-.59-1.72 8.39 8.39 0 0 0-2.41-2 24.6 24.6 0 0 0-5.61-2.43C21 23.48 20 23 20 22.26a2.6 2.6 0 0 1 .51-1.77 11.76 11.76 0 0 0 2.16-4.57 10.72 10.72 0 0 0 .19-4.58 6.14 6.14 0 0 0-2.12-3.82 5.34 5.34 0 0 0-3.42-1.25 6.29 6.29 0 0 0-1.53.2 5.47 5.47 0 0 0-4 4.08 10.07 10.07 0 0 0 2.34 9.56.77.77 0 0 1 .14.19 3 3 0 0 1-1.72 3.38c-.92.32-1.83.67-2.73 1.06a17.61 17.61 0 0 0-4 2.26 4.31 4.31 0 0 0-1.72 2.15A6.23 6.23 0 0 0 4 30.6a2 2 0 0 0 .75 1.62A12.26 12.26 0 0 0 6 33h22.54s2-1.46 1.9-2.82a2.37 2.37 0 0 1-.01-.27z","class":"cls-1","transform":"translate(-4.02 -4.04)"}}]},"name":"partners"};

const Partners = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={PartnersSvg} />;

Partners.displayName = 'Partners';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Partners);
