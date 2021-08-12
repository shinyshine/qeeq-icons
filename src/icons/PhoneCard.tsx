
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const PhoneCardSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 12.84 9.8"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M13.12 4.66h-1.28V3.19h.64a.69.69 0 0 1 .64.73zm0 2h-1.28V5.4h1.28zm0 2.2a.69.69 0 0 1-.64.73h-.64V7.35h1.28zm-1.93.73H9.7v-6.4h1.5zM9.05 4.66h-1.5v-.73a.69.69 0 0 1 .64-.73h.86zm0 2h-1.5V5.4h1.5zm0 2.94H8.2a.69.69 0 0 1-.64-.73V7.35h1.5zM14 1.48H5.84L2.2 5.65V10a1.16 1.16 0 0 0 1.07 1.22H14A1.16 1.16 0 0 0 15 10V2.7a1.16 1.16 0 0 0-1-1.22z","class":"cls-1","transform":"translate(-2.2 -1.48)"}}]},"name":"phone-card"};

const PhoneCard = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={PhoneCardSvg} />;

PhoneCard.displayName = 'PhoneCard';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(PhoneCard);
