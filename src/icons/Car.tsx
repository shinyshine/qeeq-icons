
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const CarSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 25 19"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M39 38c-1.1 0-2-.67-2-1.5s.9-1.5 2-1.5 2 .67 2 1.5-.9 1.5-2 1.5zm-14 0c-1.1 0-2-.67-2-1.5s.9-1.5 2-1.5 2 .67 2 1.5-.9 1.5-2 1.5zm-.72-9.38.72-1.85c.08-.37.24-.44.49-.73h11.98c.25.3.41.37.48.72l.77 1.9.28 1c-.06.75-1.06 1.35-1.88 1.35H25.88c-.83 0-1.82-.6-1.88-1.35zm19.06 1H41a.66.66 0 0 0-.31.08l-1.06-3.07A3 3 0 0 0 36.47 24h-9.92a3.07 3.07 0 0 0-3.18 2.59l-1.06 3.08a.66.66 0 0 0-.32-.09h-2.34a.64.64 0 0 0-.65.63v.55a.64.64 0 0 0 .65.63l.89.15a3.85 3.85 0 0 0-.44 1.84L19.77 37a2.57 2.57 0 0 0 0 .32 1.1 1.1 0 0 0 0 .2v4.36A1.14 1.14 0 0 0 20.93 43h1.78a1.14 1.14 0 0 0 1.16-1.12v-1.4h15.28v1.4A1.14 1.14 0 0 0 40.31 43h1.78a1.14 1.14 0 0 0 1.16-1.12v-4.36a1.09 1.09 0 0 0 0-.2 2.69 2.69 0 0 0 0-.32l-.33-3.62a3.85 3.85 0 0 0-.44-1.84l.87-.14a.64.64 0 0 0 .65-.63v-.55a.64.64 0 0 0-.65-.64z","class":"cls-1","transform":"translate(-19 -24)"}}]},"name":"car"};

const Car = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={CarSvg} />;

Car.displayName = 'Car';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Car);
