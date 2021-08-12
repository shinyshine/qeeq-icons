
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const HolidaySvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 13 11.98"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M40 47c0-1-1.37-1.84-3-1.84a4.74 4.74 0 0 0-.86.08 5 5 0 0 0-3.77-1.46C30 43.77 28.07 45.39 28 47zM29.07 36.35h.06zM41 36.5c0-.16-.23-.28-.55-.35a4.21 4.21 0 0 0-3.71-.23 9.9 9.9 0 0 0-1.32.54 4.85 4.85 0 0 0-1.55-1 4.07 4.07 0 0 0-3.91.08h-.09l-.09.07a.22.22 0 0 0-.07.09.28.28 0 0 0 0 .2.3.3 0 0 0 0 .08c-.11.45 1 1.14 2.67 1.69a4.75 4.75 0 0 0-2.62 2.71c-.13.23-.08.5-.08.33 0 .19.22.26.41.26s.13 0 .23-.1a4.66 4.66 0 0 1 2.14-1.13 4.51 4.51 0 0 1 5.48 3 2.8 2.8 0 0 1 .11.35c.12.26.2.35.46.35.09 0 .25-.16.3-.31a4.85 4.85 0 0 0-1.66-4.75c2.23-.47 3.96-1.33 3.85-1.88zm-6.92 8.84a9.67 9.67 0 0 1 1.3-5.08l-2.38.38a9.84 9.84 0 0 0-1.73 5.86c0 .32 0-.91.05-.6h3c-.15-.67-.25.17-.25-.56zm.7-6.42h1l.14.58a8.71 8.71 0 0 1 1.71-1.66 7.31 7.31 0 0 0-2.86 1.08z","class":"cls-1","transform":"translate(-28 -35.01)"}}]},"name":"holiday"};

const Holiday = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={HolidaySvg} />;

Holiday.displayName = 'Holiday';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Holiday);
