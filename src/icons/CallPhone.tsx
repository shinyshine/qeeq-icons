
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const CallPhoneSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 26.63 26.44"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"id":"Path","d":"M26.67 20.83a3.32 3.32 0 0 1 .21 3.52 6.57 6.57 0 0 1-2.07 2.13c-1.82 1.17-5.24.5-6.82 0s-5.89-3.26-9.87-7a28 28 0 0 1-7-11.21c-.85-2.6-.41-3.58 0-4.42a6.27 6.27 0 0 1 2.66-2.66C5.5.2 6.13 1 6.57 1.19a10 10 0 0 1 3 3.52c.67 1.6.35 2.63-.17 3.11a12.79 12.79 0 0 1-1.3 1.23c-.42.3-.51.72-.45 1.55s3.06 4.07 3.65 4.67 4.48 4.63 5.84 4.94 1.84-.28 2-.44a11.27 11.27 0 0 1 1.28-1.39 3.08 3.08 0 0 1 2.63-.08 14.35 14.35 0 0 1 3.62 2.53z","class":"cls-1","transform":"translate(-.66 -.7)"}}]},"name":"call-phone"};

const CallPhone = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={CallPhoneSvg} />;

CallPhone.displayName = 'CallPhone';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(CallPhone);
