
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const PriceSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 28.24 26.99"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M52.16 40.24a1.85 1.85 0 0 1-1.23 2.3l-10.27 3.12c-2 .61-6-.16-7.19-.42l-2.66-.87-1.19-.42a5.29 5.29 0 0 0-4.15-.23L24 44.1v-9.86l2.25-.86a10.84 10.84 0 0 1 3.35-.46H30.57l.65.09.43.09.38.08.66.19h.14l3.74 1.25 1.81.6.69.23 3.56 1.19a1.83 1.83 0 0 1 .49.26 1.8 1.8 0 0 1 .22.18 1.82 1.82 0 0 1 .13 2.5 1.84 1.84 0 0 1-.57.44l-.19.07a1.82 1.82 0 0 1-1.22 0L35 38.1l-.17.5-.13.38 5 1.66 1.44.48a2.75 2.75 0 0 0 1.74 0L46.71 40l.89-.27 2.26-.73a1.85 1.85 0 0 1 2.3 1.24zM36.49 22.3A4.37 4.37 0 0 0 34 19.2a.16.16 0 0 1 .07-.3h9.13a.16.16 0 0 1 .07.31 4.34 4.34 0 0 0-2.45 3.11 3.77 3.77 0 0 0-.06.65h-4.2a4 4 0 0 0-.07-.67zm.15 11.46-3.52-1.17A11.82 11.82 0 0 0 30.4 32c2.37-2.66 5-5.82 5.86-7.6v-.09a2.34 2.34 0 0 0 .24-.81h4.26a3 3 0 0 0 .26.9c.82 1.67 3.09 4.56 6.76 8.6a4.62 4.62 0 0 1 .72 5.41l-4 1.2a2.82 2.82 0 0 0 .11-.29 2.77 2.77 0 0 0-1.76-3.51l-3-1a1.52 1.52 0 0 0 1.13-1.45c0-1.13-1-1.42-2.24-1.76-.86-.24-1.49-.44-1.49-1s.5-.81 1.23-.81a3.59 3.59 0 0 1 1.74.52l.52-.55a4.63 4.63 0 0 0-1.76-.64V28h-.69v1.12c-1.26.05-2 .7-2 1.56 0 1.05 1 1.35 2.16 1.66 1 .25 1.55.47 1.55 1.1s-.56.88-1.33.88a3 3 0 0 1-.78-.12l-.39-.13a3.16 3.16 0 0 1-.83-.49z","class":"cls-1","transform":"translate(-24 -18.9)"}}]},"name":"price"};

const Price = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={PriceSvg} />;

Price.displayName = 'Price';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Price);
