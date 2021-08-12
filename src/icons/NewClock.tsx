
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const NewClockSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 28 28","version":"1.1","viewBox":"0 0 28 28","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"机场页","transform":"translate(-361 -3602)"},"children":[{"tag":"g","attrs":{"id":"customer-reviews","transform":"translate(0 2993)"},"children":[{"tag":"g","attrs":{"id":"right"},"children":[{"tag":"g","attrs":{"id":"编组-3","transform":"translate(32 295)"},"children":[{"tag":"g","attrs":{"id":"编组-2","transform":"translate(32 32)"},"children":[{"tag":"g","attrs":{"id":"icon_clock备份","transform":"translate(297 282)"},"children":[{"tag":"g","attrs":{"id":"分组-7","transform":"translate(3 3)"},"children":[{"tag":"path","attrs":{"id":"椭圆形","d":"M11-1C4.4-1-1 4.4-1 11s5.4 12 12 12 12-5.4 12-12S17.6-1 11-1zm0 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S1 16.5 1 11 5.5 1 11 1z","class":"st0"}},{"tag":"path","attrs":{"id":"矩形","d":"M10 4h.2c.5 0 .9.4.9.9V13H10a.9.9 0 0 1-.9-.9V4.9c0-.5.4-.9.9-.9z","class":"st1"}},{"tag":"path","attrs":{"d":"M10 11h5.2c.5 0 .9.4.9.9v.2c0 .5-.4.9-.9.9H10v-2z","class":"st1"}}]}]}]}]}]}]}]}]}]},"name":"new-clock"};

const NewClock = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={NewClockSvg} />;

NewClock.displayName = 'NewClock';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(NewClock);
