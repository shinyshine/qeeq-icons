
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const Star2Svg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 14 13","version":"1.1","viewBox":"0 0 14 13","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"星形ed","d":"M7 10.3 3.2 12.3 3.9 8.1.8 5.1 5.1 4.5 7 .6 8.9 4.5 13.2 5.1 10.1 8.1 10.8 12.3z","class":"st0"}}]},"name":"star2"};

const Star2 = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={Star2Svg} />;

Star2.displayName = 'Star2';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Star2);
