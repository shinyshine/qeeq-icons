
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const IdpSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 14 18","version":"1.1","viewBox":"0 0 14 18","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"矩形","d":"M0 0v18h11c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3H0zm2 16V2h9c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H2z"}},{"tag":"path","attrs":{"id":"形状","d":"M5 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm1.4 1.2h-.6c-.1-.3-.2-.5-.3-.7.4.1.7.4.9.7zM5 3.4c.2.2.3.5.4.8h-.8c.1-.3.2-.6.4-.8zm-1.5 2c0-.1-.1-.3-.1-.4s0-.3.1-.4h.7v.8h-.7zm.1.4h.6c.1.2.2.5.3.7-.4-.1-.7-.4-.9-.7zm.6-1.6h-.6c.2-.3.5-.6.9-.7-.1.2-.2.4-.3.7zM5 6.6c-.2-.2-.3-.5-.4-.8h.8c-.1.3-.2.6-.4.8zm.5-1.2h-1v-.8h.9V5c0 .1.1.3.1.4zm0 1.1c.1-.2.2-.5.3-.7h.6c-.2.3-.5.6-.9.7zm.4-1.1v-.8h.7c0 .1.1.3.1.4s0 .3-.1.4h-.7z"}},{"tag":"path","attrs":{"id":"矩形_1_","d":"M3 9H10V11H3z","class":"st0"}},{"tag":"path","attrs":{"id":"矩形备份","d":"M3 12H7V14H3z","class":"st0"}}]},"name":"idp"};

const Idp = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={IdpSvg} />;

Idp.displayName = 'Idp';
export default React.forwardRef(Idp);
