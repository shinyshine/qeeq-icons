
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const ParkSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -311)"},"children":[{"tag":"g","attrs":{"id":"Park","transform":"translate(51 297)"},"children":[{"tag":"g","attrs":{"id":"icon_Park","transform":"translate(16 14)"},"children":[{"tag":"g","attrs":{"id":"编组","transform":"translate(3 4)"},"children":[{"tag":"path","attrs":{"id":"形状结合","d":"M5 12.9v14.9h1.8l.7 3.2H.7l.8-3.2h1.7V12.9H5zm29 9.9v2.9h-2.4V31h-2.4v-5.3H10.8V31H8.4v-5.3H6.1v-2.9H34zm-2.2-9.2v3.5h-2.4v1.1h2.4v3.5H8.3v-3.5h2.1v-1.1H8.3v-3.5h23.5zm-3.7 3.5H11.7v1.1h16.4v-1.1zM7.4 0l.7 1.7-1.3 9.7H1.3L0 1.7.7 0h6.7zm-.8 3.1h-5l.9 7h3.1l1-7z","class":"st0"}}]}]}]}]}]}]},"name":"Park"};

const Park = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={ParkSvg} />;

Park.displayName = 'Park';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Park);
