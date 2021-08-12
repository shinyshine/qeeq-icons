
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const StarSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 14 13.98"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M35.57 40.15a2 2 0 0 0 2.88 0 .44.44 0 0 0-.62-.62 1.16 1.16 0 0 1-1.65 0 .43.43 0 0 0-.61 0 .44.44 0 0 0 0 .62zm8.12-2-2.6 2.42A6.46 6.46 0 0 1 37 42.42a6.49 6.49 0 0 1-4.09-1.81l-2.59-2.39a1 1 0 0 1-.27-1.06 1 1 0 0 1 .82-.69l3.6-.65 1.61-3.25A1 1 0 0 1 37 32a1 1 0 0 1 .91.57l1.61 3.24 3.61.64a1 1 0 0 1 .82.69 1 1 0 0 1-.26 1.05zM38.43 43.76a.53.53 0 0 0 .08.89L41 45.88a1 1 0 0 0 1.47-1.08L42 42.11a.51.51 0 0 0-.81-.32zm-3 0a.52.52 0 0 1-.08.89l-2.5 1.23a1 1 0 0 1-1.07-.09 1 1 0 0 1-.4-1l.52-2.69a.51.51 0 0 1 .81-.32z","class":"cls-1","transform":"translate(-30 -32)"}}]},"name":"star"};

const Star = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={StarSvg} />;

Star.displayName = 'Star';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Star);
