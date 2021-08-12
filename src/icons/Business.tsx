
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const BusinessSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -1403)"},"children":[{"tag":"g","attrs":{"id":"Business-Zone","transform":"translate(51 1389)"},"children":[{"tag":"g","attrs":{"id":"icon_Business-Zone","transform":"translate(16 14)"},"children":[{"tag":"path","attrs":{"id":"Fill-3","d":"M32.2 17.4c-1.3 0-1.9-.5-2.4-1.3-.5.8-1.4 1.3-2.4 1.3s-1.9-.5-2.4-1.3c-.5.8-1.4 1.3-2.4 1.3s-1.9-.5-2.4-1.3c-.5.8-1.4 1.3-2.4 1.3s-1.9-.5-2.4-1.3c-.5.8-1.4 1.3-2.4 1.3s-1.9-.5-2.4-1.3c-.5.8-1.4 1.3-2.4 1.3-1.7 0-3.6-1.5-3-3.2L7.4 7h25.2l2.6 7.2c.6 1.7-1.7 3.2-3 3.2zm.4.8v11.7h1.3c1.1 0 2.1.9 2.1 2.1H4c0-1.2.9-2.1 2.1-2.1h1.3V18.2h.4c.9 0 1.8-.3 2.4-.9.7.6 1.5.9 2.4.9.9 0 1.8-.3 2.4-.9.7.6 1.5.9 2.4.9.9 0 1.8-.3 2.4-.9.7.6 1.5.9 2.4.9.9 0 1.8-.3 2.4-.9.7.6 1.5.9 2.4.9.9 0 1.7-.3 2.4-.9.7.7 1.5.9 2.5.9h.7zm-8.8 11.1h4.7v-9.6h-4.7v9.6zm-13.7-1.8h11.3v-7.6H10.1v7.6z","class":"st0"}}]}]}]}]}]},"name":"Business"};

const Business = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={BusinessSvg} />;

Business.displayName = 'Business';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Business);
