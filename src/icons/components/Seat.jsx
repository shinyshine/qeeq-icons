
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const SeatSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M3.2 7.8c-.3-.6-.1-1.2.5-1.5l.2-.1c.5-.2 1.2-.1 1.6.3l.3.3c.2.3.4.5.6.8.2.3.4.5.5.8.1.1.2.3.3.4 0 .2.1.4.2.5v.1c.1.2.2.5.3.7.1.1.1.3.1.3.1.2.4.4.7.4h3.7c.6 0 1.1.5 1.1 1.1v.4c0 .6-.5 1.1-1.1 1.1H6.6c-.6 0-1.2-.4-1.4-1 0-.1-.1-.3-.2-.5-.1-.4-.3-.8-.4-1.2v-.1c-.3-.7-.5-1.2-.6-1.4 0-.1-.1-.3-.2-.5 0 0 0-.1-.1-.2s-.2-.3-.3-.5c-.1-.1-.1-.2-.2-.2zm.3-1.9C2.7 5.9 2 5.3 2 4.5S2.7 3 3.5 3 5 3.7 5 4.5s-.7 1.4-1.5 1.4z","class":"st0"}}]},"name":"seat"};

const Seat = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={SeatSvg} />;

Seat.displayName = 'Seat';
export default React.forwardRef(Seat);
