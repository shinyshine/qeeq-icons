
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const ExclamationSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 22 23","version":"1.1","viewBox":"0 0 22 23","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"三角形","d":"M21.8 22.5 11 .9.2 22.5h21.6zM11 3.1l9.2 18.4H1.8L11 3.1z","class":"st0"}},{"tag":"path","attrs":{"id":"_xFF01_","d":"m11.5 16.8.4-7.8H9.8l.4 7.8h1.3zm-.7 3.2c.3 0 .6-.1.9-.3.2-.2.3-.5.3-.8 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.9-.3s-.6 0-.8.2c-.2.2-.4.5-.4.8 0 .3.1.6.4.8.2.3.5.4.8.4z","class":"st0"}}]},"name":"exclamation"};

const Exclamation = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={ExclamationSvg} />;

Exclamation.displayName = 'Exclamation';
export default React.forwardRef(Exclamation);
