
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const ShoppingSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -395)"},"children":[{"tag":"g","attrs":{"id":"Shopping-Center","transform":"translate(51 381)"},"children":[{"tag":"g","attrs":{"id":"icon_Shopping-Center","transform":"translate(16 14)"},"children":[{"tag":"g","attrs":{"id":"编组","transform":"translate(5 3)"},"children":[{"tag":"path","attrs":{"id":"Fill-1","d":"M24.3 14.7h-5.7v-1c0-1.6 1.3-2.9 2.8-2.9s2.8 1.3 2.8 2.9v1zm4.8 0h-2.8v-1c0-2.6-2.1-4.8-4.7-4.8s-4.7 2.1-4.7 4.8v1h-2.8c-.5 0-.9.4-.9 1v10.5c0 2.1 1.7 3.8 3.8 3.8h9.4c2.1 0 3.8-1.7 3.8-3.8V15.7c-.2-.5-.6-1-1.1-1z","class":"st0"}},{"tag":"path","attrs":{"id":"Fill-3","d":"M5.7 5.6a3.8 3.8 0 1 1 7.6 0v1.9H5.7V5.6zM3.8 30h9.1c-.9-1-1.5-2.3-1.5-3.8V15.9c0-1.6 1.3-2.8 2.9-2.8h1c.3-2.2 1.7-4 3.7-4.9-.1-.4-.5-.7-.9-.7h-2.9V5.6c0-3.1-2.6-5.6-5.7-5.6S3.8 2.5 3.8 5.6v1.9H1c-.5 0-1 .4-1 .9v17.8C0 28.3 1.7 30 3.8 30z","class":"st0"}}]}]}]}]}]}]},"name":"Shopping"};

const Shopping = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={ShoppingSvg} />;

Shopping.displayName = 'Shopping';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Shopping);
