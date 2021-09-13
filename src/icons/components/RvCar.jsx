
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const RvCarSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 22 13","version":"1.1","viewBox":"0 0 22 13","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M16.5 9.7c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm-12-.2c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zM21 0c.5 0 .9.4.9.9v9.2c0 .5-.4.9-.9.9h-2.8v-.1c-.1-.9-.9-1.7-1.8-1.7-1 0-1.8.8-1.8 1.8H6.3v-.1c0-1-.8-1.7-1.8-1.7S2.7 10 2.7 11H.8c-.5 0-.7-1-.8-1.5v-.1c0-.6-.1-1.5 0-2s1.7-.8 1.7-1.2.3-1.3.8-1.7l.6-.3c-.6-.1-1.2-.2-1.3-.5v-.1c0-2 1.6-3.7 3.7-3.7H21zM6.2 6.9h-1c-.1 0-.2.1-.2.2s.1.2.2.2h.9c.1 0 .2-.1.2-.2.1-.1 0-.2-.1-.2zm.2-2.3h-1c-1 0-1.8.8-1.8 1.8h2.8V4.6zm5-1.8H8.7c-.3 0-.5.2-.5.4v1.4c0 .2.2.4.5.4h2.8c.3 0 .5-.2.5-.5V3.2c-.1-.2-.3-.4-.6-.4zm7.3 0H15c-.3 0-.5.2-.5.5v1.4c0 .3.2.5.5.5h3.7c.3 0 .5-.2.5-.5V3.2c0-.2-.2-.4-.5-.4z","class":"st0"}}]},"name":"rv-car"};

const RvCar = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={RvCarSvg} />;

RvCar.displayName = 'RvCar';
export default React.forwardRef(RvCar);
