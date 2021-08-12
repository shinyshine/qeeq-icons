
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const AddressDetailPhoneSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 12 14","version":"1.1","viewBox":"0 0 12 14","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"phone","d":"M11.4 10.8c.4.6.1 1.4-.1 1.6-.2.1-.2.2-1 .8-.9.6-2.4-.1-3.1-.4-.7-.3-2.5-1.8-4-3.7C1.6 7.2 1 5 .7 3.8c-.2-1.2.1-1.6.3-2 .2-.4.5-.7 1.3-1 .8-.3 1.1 0 1.2.2.2.1 1 1 1.2 1.7.2.8 0 1.2-.2 1.4-.3.1-.5.3-.7.4-.2.1-.3.3-.3.7 0 .4 1.1 2 1.4 2.3.2.3 1.7 2.3 2.3 2.5.6.2.8 0 .9-.1.1-.1.4-.4.7-.6.3-.2 1 0 1.2.1.1.2 1 .8 1.4 1.4z","class":"st0"}}]},"name":"address-detail-phone"};

const AddressDetailPhone = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={AddressDetailPhoneSvg} />;

AddressDetailPhone.displayName = 'AddressDetailPhone';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(AddressDetailPhone);
