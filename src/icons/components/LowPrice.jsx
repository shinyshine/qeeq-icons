
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const LowPriceSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Combined-Shape","d":"M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm5.4-7.8L8.9 3.7c-.1-.1-.3-.2-.5-.2l-3.9.2c-.4 0-.7.3-.7.6l-.2 4c0 .2.1.4.2.5l4.5 4.5c.3.3.7.3 1 0l4-4.1c.4-.2.4-.7.1-1zm-7.1-2c-.2.1-.5.2-.7.1-.3 0-.5-.2-.5-.5-.1-.2 0-.5.2-.7.3-.3.7-.3 1 0 .3.3.3.8 0 1.1z","class":"st0"}}]},"name":"low-price"};

const LowPrice = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={LowPriceSvg} />;

LowPrice.displayName = 'LowPrice';
export default React.forwardRef(LowPrice);
