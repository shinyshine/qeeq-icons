
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const FromReturnArrowSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 12 12","version":"1.1","viewBox":"0 0 12 12","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状结合","d":"M6 0c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm1 3v2H3c-.6 0-1 .4-1 1s.4 1 1 1h4v2l4-3-4-3z","class":"st0"}}]},"name":"from-return-arrow"};

const FromReturnArrow = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={FromReturnArrowSvg} />;

FromReturnArrow.displayName = 'FromReturnArrow';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(FromReturnArrow);
