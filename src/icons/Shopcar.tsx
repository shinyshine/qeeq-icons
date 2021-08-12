
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const ShopcarSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 12 11","version":"1.1","viewBox":"0 0 12 11","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M3.8 8.7c.1 0 .3 0 .4.1.2 0 .3.1.4.2.1.1.2.2.2.3s.1.3.1.4 0 .3-.1.4-.1.2-.2.3c-.1.1-.2.2-.3.2s-.3.2-.5.2-.3 0-.4-.1c-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.2-.3s-.2-.3-.2-.5 0-.3.1-.4.2-.2.2-.3c.1-.1.2-.2.3-.2.2-.1.4-.1.5-.1zM8.6 8.7c.1 0 .3 0 .4.1.2 0 .3.1.4.2.1.1.2.2.2.3s.1.3.1.4c0 .1 0 .3-.1.4s-.1.2-.2.3c-.1.1-.2.2-.3.2s-.3.1-.4.1c-.1 0-.3 0-.4-.1s-.2-.1-.3-.2c-.1-.1-.2-.2-.2-.3-.1-.1-.1-.3-.1-.4 0-.1 0-.3.1-.4-.1-.1 0-.2.1-.3.1-.1.2-.2.3-.2.1-.1.3-.1.4-.1zM10.5 2.2c.2 0 .4 0 .5.1.1.1.2.1.3.2 0 .1.1.2.1.3V3c0 .1-.1.2-.1.4-.1.2-.2.5-.2.7s-.2.5-.3.8c-.1.3-.2.5-.2.6-.1.3-.2.5-.4.6s-.5.2-.7.2h-6l.2 1h5.8c.4 0 .6.2.6.5 0 .2 0 .3-.1.4-.2.1-.3.2-.5.2H3.4c-.2 0-.3 0-.4-.1-.1-.1-.2-.2-.2-.3-.1-.1-.1-.2-.2-.4 0-.1-.1-.3-.1-.4 0 0 0-.2-.1-.3 0-.2-.1-.4-.1-.7 0-.3-.1-.6-.2-.9 0-.2-.1-.6-.1-.9-.2-.8-.3-1.6-.5-2.6H.6c-.1 0-.2 0-.3-.1l-.2-.2C0 1.4 0 1.3 0 1.3V1C0 .8.1.7.2.6S.4.5.6.5h1.1c.2 0 .3 0 .4.1s.2.1.2.2c.1.1.1.1.1.2s0 .1.1.2v.6c0 .1 0 .3.1.4h7.9z","class":"st0"}},{"tag":"path","attrs":{"d":"M9.7 1.8H5.5L7 .3c.2-.2.4-.3.6-.3.2 0 .4.1.5.3l1.6 1.5z","class":"st0"}}]},"name":"shopcar"};

const Shopcar = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={ShopcarSvg} />;

Shopcar.displayName = 'Shopcar';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Shopcar);
