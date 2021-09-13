
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const DepositSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 13 14","version":"1.1","viewBox":"0 0 13 14","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状","d":"M11.8 4.1s-.6-.2-1.1-.6c-.5-.3-1.1-.9-1.2-1.6 0 0-.3-.8-1.3-.8H3.9c-1-.1-1.3.7-1.3.7-.1.8-.7 1.3-1.2 1.7-.6.4-1.1.6-1.1.6l-.2.1v.2c.2 3.9.6 4.9.7 5 .3.7.8 1.3 1.4 1.9A11.51 11.51 0 0 0 6 13.8l.1.2.1-.1s1-.4 2.1-1.1c.6-.4 1.2-.9 1.7-1.4.6-.6 1.1-1.3 1.4-1.9 0-.1.5-1.1.7-5v-.2l-.3-.2z","class":"st0"}},{"tag":"path","attrs":{"d":"M5.9 2.9h.6v.7c.5 0 1 .2 1.3.5.4.3.6.8.7 1.4h-1c0-.4-.2-.6-.4-.8-.2-.1-.4-.2-.6-.2v2.1c.7.2 1 .3 1.1.4.6.4.9.8.9 1.5 0 .6-.2 1.1-.7 1.4-.4.2-.8.4-1.4.4v.8h-.5v-.8c-.6 0-1.1-.2-1.4-.5-.3-.4-.6-.9-.6-1.7h1c0 .5.2.8.4 1 .2.2.4.3.7.3V7.3l-1-.4c-.7-.3-1-.8-1-1.5 0-.6.2-1 .7-1.4.3-.2.7-.3 1.2-.3v-.8zm0 1.6c-.3 0-.5.1-.6.2-.2.1-.3.4-.3.7 0 .4.3.7.9.9V4.5zm.6 5c.3 0 .5-.1.7-.2.3-.2.4-.4.4-.7 0-.4-.3-.7-.9-1-.1 0-.1 0-.2-.1v2z","class":"st1"}}]},"name":"deposit"};

const Deposit = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={DepositSvg} />;

Deposit.displayName = 'Deposit';
export default React.forwardRef(Deposit);
