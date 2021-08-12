
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const RebookBannerSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 23 16"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M43.63 37.19A2.53 2.53 0 0 1 44 38.5a2.5 2.5 0 0 1-5 0 2.54 2.54 0 0 1 .2-1l-3-3.6a2.39 2.39 0 0 1-.66.09h-.27l-3.6 5.2A2.53 2.53 0 0 1 32 40.5a2.52 2.52 0 1 1-2-2.45L33.49 33a2.44 2.44 0 0 1-.49-1.5 2.5 2.5 0 0 1 5 0 2.4 2.4 0 0 1-.29 1.16l2.95 3.48a2.6 2.6 0 0 1 .84-.14 2.52 2.52 0 0 1 .48 0l3.51-5a2.44 2.44 0 0 1-.49-1.5 2.5 2.5 0 1 1 2.5 2.5h-.27z","class":"cls-1","transform":"translate(-27 -27)"}}]},"name":"rebook_banner"};

const RebookBanner = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={RebookBannerSvg} />;

RebookBanner.displayName = 'RebookBanner';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(RebookBanner);
