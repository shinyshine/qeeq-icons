
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const PayPointsSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 12 12","version":"1.1","viewBox":"0 0 12 12","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状结合","d":"M11.5 4.8v2.7C9.9 8.2 8.1 8.6 6 8.6S2.1 8.2.5 7.5V4.8c1.6.7 3.4 1 5.5 1s3.9-.3 5.5-1zm0-.6C9.9 5 8.1 5.3 6 5.3S2.1 5 .5 4.2V1.9C.5 1.1 3 .4 6 .4s5.5.7 5.5 1.5V4.2zm0 3.8v1.9c0 .8-2.5 1.5-5.5 1.5S.5 10.7.5 9.9V8c1.6.7 3.4 1.1 5.5 1.1s3.9-.4 5.5-1.1zM6 2.9c2.5 0 4.5-.4 4.5-1s-2-1-4.5-1-4.5.4-4.5 1 2 1 4.5 1z","class":"st0"}}]},"name":"pay-points"};

const PayPoints = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={PayPointsSvg} />;

PayPoints.displayName = 'PayPoints';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(PayPoints);
