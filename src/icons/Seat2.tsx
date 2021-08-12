
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const Seat2Svg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 20 20"},"children":[{"tag":"path","attrs":{"fill":"#222","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"M4.9 7.76c.66-.3 1.53-.12 2 .39a12.37 12.37 0 0 1 1.12 1.32A9.8 9.8 0 0 1 9 11.06a57.75 57.75 0 0 0 .86 1.98c.13.3.55.56.88.56h4.6c.77 0 1.4.62 1.4 1.39v.49a1.4 1.4 0 0 1-1.4 1.38h-7.1c-.73 0-1.46-.52-1.69-1.19a150.8 150.8 0 0 0-.74-2.12l-.06-.16a22.13 22.13 0 0 0-1.01-2.46 20.32 20.32 0 0 0-.7-1.22c-.39-.68-.12-1.5.6-1.83zm-.53-4.01c1.04 0 1.88.82 1.88 1.83 0 1.02-.84 1.84-1.88 1.84A1.85 1.85 0 0 1 2.5 5.58c0-1 .84-1.83 1.88-1.83z","transform":"translate(-642 -255) translate(398 144) translate(244 110) translate(0 1)"}}]},"name":"seat2"};

const Seat2 = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={Seat2Svg} />;

Seat2.displayName = 'Seat2';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Seat2);
