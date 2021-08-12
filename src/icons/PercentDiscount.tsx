
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const PercentDiscountSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Combined-Shape","d":"m8 14.3-1.6.8c-.5.3-1.1.1-1.3-.4l-.8-1.6-1.7-.3c-.5-.1-.9-.6-.8-1.1L2 10 .7 8.7c-.4-.4-.4-1 0-1.4L2 6l-.3-1.7c-.1-.5.3-1.1.8-1.1l1.7-.3.8-1.6c.2-.5.8-.7 1.3-.5l1.7.9L9.6.9c.5-.3 1.1-.1 1.3.4l.8 1.6 1.7.3c.5.1.9.6.8 1.1L14 6l1.3 1.2c.4.4.4 1 0 1.4L14 10l.3 1.7c.1.5-.3 1.1-.8 1.2l-1.7.3-.8 1.6c-.2.5-.8.7-1.3.5l-1.7-1zM4.5 6c0 .8.7 1.5 1.5 1.5S7.5 6.9 7.5 6c0-.8-.7-1.5-1.5-1.5S4.5 5.2 4.5 6zm4 5c0 .8.7 1.5 1.5 1.5s1.5-.6 1.5-1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5zm-2.4 1.4 5.2-7.9H9.9l-5.2 7.9h1.4z","class":"st0"}}]},"name":"percent-discount"};

const PercentDiscount = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={PercentDiscountSvg} />;

PercentDiscount.displayName = 'PercentDiscount';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(PercentDiscount);
