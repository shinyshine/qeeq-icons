
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const CommaSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 2 15"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M0 13H2V15H0z","class":"cls-1"}},{"tag":"path","attrs":{"d":"M0 0H2V11H0z","class":"cls-1"}}]},"name":"comma"};

const Comma = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={CommaSvg} />;

Comma.displayName = 'Comma';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Comma);
