
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const QeeqSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 66 18"},"children":[{"tag":"path","attrs":{"fill":"#616161","fill-rule":"evenodd","stroke":"none","stroke-width":"1","d":"M32.95.7 31.8 3.67h-8.44v4.28h8.11v2.83l-8.11-.04v4.14h8.16l1.42 2.99-10.88.04c-.8 0-1.45-.65-1.45-1.45V1.97c0-.67.54-1.27 1.2-1.27h11.14zm14.22 0-1.16 2.97h-8.44v4.28h8.12v2.83l-8.12-.04v4.14h8.17l1.42 2.99-10.89.04c-.8 0-1.45-.65-1.45-1.45V1.84c0-.63.52-1.14 1.15-1.14h11.2zm9.15-.07c4.73 0 7.17 1.87 7.17 8.56 0 2.2-.38 4.02-1.14 5.4l.08.07c.14.14.33.21.52.21h2.69l-1.62 2.85h-1.8c-.61.01-1.2-.2-1.65-.62l-.3-.28a7.14 7.14 0 0 1-3.95.94c-4.71-.1-7.17-1.85-7.17-8.57 0-6.69 2.47-8.56 7.17-8.56zM1.9 5.23C5.2-.6 8.27-1 12.36 1.32c4.11 2.33 5.31 5.16 2 10.98-.33.6-.68 1.13-1.04 1.62l.77.73c.14.14.33.21.53.21h2.68l-1.61 2.85h-1.8c-.61.01-1.2-.2-1.65-.62l-1.06-.98c-2.16 1.59-4.64 1.67-7.28.1-4.05-2.43-5.32-5.16-2-11zm54.34-1.87c-3.52 0-4.27 1.85-4.27 5.85 0 4.12.75 5.83 4.27 5.83 3.54 0 4.3-1.7 4.3-5.83-.01-4-.76-5.85-4.3-5.85zm-45.3.3c-3.05-1.74-4.62-.5-6.6 2.97-2.03 3.59-2.23 5.44.83 7.18 3.08 1.75 4.57.64 6.61-2.95 1.98-3.47 2.24-5.45-.84-7.2z","transform":"translate(-223 -1179) translate(-326 1021) translate(457 95) translate(92 63)"}}]},"name":"qeeq"};

const Qeeq = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={QeeqSvg} />;

Qeeq.displayName = 'Qeeq';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Qeeq);
