
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const Star1Svg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 14 13","version":"1.1","viewBox":"0 0 14 13","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"星形","d":"m7 10.3-3.8 2L3.9 8 .8 5l4.3-.6L7 .6l1.9 3.9 4.3.6-3.1 3 .7 4.3L7 10.3zm-2.5.2L7 9.2l2.5 1.3L9 7.7l2-2-2.8-.3L7 2.8 5.7 5.4 3 5.8l2 2-.5 2.7z","class":"st0"}}]},"name":"star1"};

const Star1 = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={Star1Svg} />;

Star1.displayName = 'Star1';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Star1);
