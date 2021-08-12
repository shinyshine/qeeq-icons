
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const RightBoldSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 22 16","version":"1.1","viewBox":"0 0 22 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"路径","d":"M21.3 2c.4.4.4 1 0 1.4l-11 11c-1 1-2.6 1-3.5 0l-6-6C.4 8 .4 7.4.8 7l.9-.9c.9-.9 2.3-.9 3.2 0l3.7 3.7 8.7-8.7c.9-.9 2.3-.9 3.2 0l.8.9z","class":"st0"}}]},"name":"right_bold"};

const RightBold = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={RightBoldSvg} />;

RightBold.displayName = 'RightBold';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(RightBold);
