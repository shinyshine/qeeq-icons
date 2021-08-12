
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const PickSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 58.56 57.71"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M51.28 6.57H47A1.53 1.53 0 0 0 45.57 8 1.35 1.35 0 0 0 47 9.43h4.29a7.07 7.07 0 0 1 7.14 7.14v2.86H9.86v-2.86A7.07 7.07 0 0 1 17 9.43h4.29A1.35 1.35 0 0 0 22.72 8a1.35 1.35 0 0 0-1.43-1.43H17a10.12 10.12 0 0 0-10 10v16.57a1.35 1.35 0 0 0 1.43 1.43 1.35 1.35 0 0 0 1.43-1.43V22.29h48.57v28.56A7.07 7.07 0 0 1 51.28 58H17a7.07 7.07 0 0 1-7.14-7.14v-7.72a1.35 1.35 0 0 0-1.43-1.43A1.35 1.35 0 0 0 7 43.14v7.71a10.12 10.12 0 0 0 10 10h34.28a10.12 10.12 0 0 0 10-10V16.57a10.12 10.12 0 0 0-10-10z","class":"cls-1","transform":"translate(-2.72 -3.15)"}},{"tag":"path","attrs":{"d":"M22.72 45.14 31.29 38l-8.57-7.14v5.71H4.15a1.43 1.43 0 1 0 0 2.86h18.57v5.71zM42.71 13.15a1.35 1.35 0 0 0 1.43-1.43V4.57a1.43 1.43 0 0 0-2.86 0v7.14a1.35 1.35 0 0 0 1.43 1.44zM25.57 13.15A1.35 1.35 0 0 0 27 11.72V4.57a1.43 1.43 0 0 0-2.86 0v7.14a1.35 1.35 0 0 0 1.43 1.44zM30.14 9.43h8.57A1.35 1.35 0 0 0 40.14 8a1.35 1.35 0 0 0-1.43-1.43h-8.57A1.35 1.35 0 0 0 28.71 8a1.35 1.35 0 0 0 1.43 1.43z","class":"cls-1","transform":"translate(-2.72 -3.15)"}}]},"name":"pick"};

const Pick = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={PickSvg} />;

Pick.displayName = 'Pick';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Pick);
