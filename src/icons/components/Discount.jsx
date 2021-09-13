
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const DiscountSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"icon_x2F_discount"},"children":[{"tag":"path","attrs":{"id":"Shape","d":"M9.8 4.7 5.3.2C5.1.1 5 0 4.8 0L.8.1C.4.1.1.4.1.8L0 4.7c0 .2.1.4.2.5l4.5 4.5c.3.3.7.3 1 0l4-4.1c.4-.2.4-.6.1-.9zM2.6 2.6c-.1.2-.4.3-.7.2-.2-.1-.4-.2-.5-.5-.1-.2 0-.5.2-.7.3-.3.7-.3 1 0s.3.7 0 1z","class":"st0","transform":"translate(3 3)"}}]}]},"name":"discount"};

const Discount = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={DiscountSvg} />;

Discount.displayName = 'Discount';
export default React.forwardRef(Discount);
