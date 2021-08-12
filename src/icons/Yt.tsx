
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const YtSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 24 24"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M34.33 29.5a.38.38 0 0 0-.38 0 .37.37 0 0 0-.2.33v6.45a.37.37 0 0 0 .38.37.38.38 0 0 0 .2-.06l5.08-3.23a.37.37 0 0 0 0-.63z","class":"cls-1","transform":"translate(-24 -21)"}},{"tag":"path","attrs":{"d":"M45.33 21H26.67A2.67 2.67 0 0 0 24 23.67v18.66A2.67 2.67 0 0 0 26.67 45h18.66A2.67 2.67 0 0 0 48 42.33V23.67A2.67 2.67 0 0 0 45.33 21zM45 36.73a3 3 0 0 1-3 2.93H30a3 3 0 0 1-3-2.93v-6.8A3 3 0 0 1 30 27h12a3 3 0 0 1 3 2.93z","class":"cls-1","transform":"translate(-24 -21)"}}]},"name":"yt"};

const Yt = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={YtSvg} />;

Yt.displayName = 'Yt';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Yt);
