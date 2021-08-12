
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const HistoricalSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -479)"},"children":[{"tag":"g","attrs":{"id":"Historical-Site","transform":"translate(51 465)"},"children":[{"tag":"g","attrs":{"id":"icon_Historical-Site","transform":"translate(16 14)"},"children":[{"tag":"g","attrs":{"id":"icon","transform":"translate(5 5)"},"children":[{"tag":"path","attrs":{"id":"形状结合","d":"M23.8 26.4c.5 0 .9.4.9.9V30h-1.8v-2.7c0-.5.4-.9.9-.9zm-8.8 0c.5 0 .9.4.9.9V30h-1.8v-2.7c0-.5.4-.9.9-.9zm-8.8 0c.5 0 .9.4.9.9V30H5.3v-2.7c0-.5.4-.9.9-.9zM30 22.9v6.2c0 .5-.4.9-.9.9h-2.7v-2.7c0-1.5-1.2-2.6-2.6-2.6-1.5 0-2.6 1.2-2.6 2.6V30h-3.5v-2.7c0-1.5-1.2-2.6-2.6-2.6-1.5 0-2.6 1.2-2.6 2.6V30H8.8v-2.7c0-1.5-1.2-2.6-2.6-2.6-1.5 0-2.6 1.2-2.6 2.6V30H.9a.9.9 0 0 1-.9-.9v-6.2h30zM6.2 19.4c.5 0 .9.4.9.9v.9H5.3v-.9c0-.5.4-.9.9-.9zm16.9-3.5.4 1.8c-1.3.1-2.4 1.2-2.4 2.6v.9h-3.5v-.9c0-1.5-1.2-2.6-2.6-2.6-1.5 0-2.6 1.2-2.6 2.6v.9H8.8v-.9c0-1.5-1.2-2.6-2.6-2.6-1.5 0-2.6 1.2-2.6 2.6v.9H0v-5.3h23.1zm4.2 0c1.2 0 2.3.8 2.6 2 .1.4.1.6.1.6v2.6h-3.8l-.6-2.5-.7-2.7h2.4zM15 19.4c.5 0 .9.4.9.9v.9h-1.8v-.9c0-.5.4-.9.9-.9zm7.9.9c0-.6.6-.9 1.1-.8l.4 1.7h-1.5v-.9zM19 8.8c.4 0 .8.3.9.7l1.2 4.6h-3.3v-.9c0-1.5-1.2-2.6-2.6-2.6-1.5 0-2.6 1.2-2.6 2.6v.9H8.8v-.9c0-1.5-1.2-2.6-2.6-2.6-1.5 0-2.6 1.2-2.6 2.6v.9H0V8.8h19zm-4 3.6c.5 0 .9.4.9.9v.9h-1.8v-.9c0-.5.4-.9.9-.9zm-8.8 0c.5 0 .9.4.9.9v.9H5.3v-.9c0-.5.4-.9.9-.9zm0-7.1c.5 0 .9.4.9.9v.9H5.3v-.9c0-.5.4-.9.9-.9zM11.5 0c.4 0 .8.3.9.7L14 7.1H8.8v-.9c0-1.5-1.2-2.6-2.6-2.6-1.5 0-2.6 1.2-2.6 2.6v.9H0V.9C0 .4.4 0 .9 0h10.6z","class":"st0"}}]}]}]}]}]}]},"name":"Historical"};

const Historical = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={HistoricalSvg} />;

Historical.displayName = 'Historical';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Historical);
