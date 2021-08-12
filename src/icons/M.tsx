
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const MSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 17","version":"1.1","viewBox":"0 0 16 17","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Combined-Shape","d":"M8 15c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm3.2-3.1V6.2H9.7L8 10.3 6.4 6.2H4.9v5.7H6V8l1.6 3.9h.9l1.6-4v4h1.1z","class":"st0"}}]},"name":"M"};

const M = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={MSvg} />;

M.displayName = 'M';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(M);
