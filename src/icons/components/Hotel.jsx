
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const HotelSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 18 16","version":"1.1","viewBox":"0 0 18 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状","d":"M16.9 1.9c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5H.5C.2 0 0 .2 0 .5v1c0 .3.2.5.5.5H1v11.6H.5c-.3-.1-.5.1-.5.4v1c0 .3.2.5.5.5h7.2V13c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v2.4h7.2c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-.5V1.9h.5zM7.7 3.3c0-.2.2-.4.4-.4h1.2c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H8.1c-.2 0-.4-.2-.4-.4V3.3zm0 2.9c0-.2.2-.4.4-.4h1.2c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H8.1c-.2 0-.4-.2-.4-.4V6.2zM3.9 3.3c0-.2.2-.4.4-.4h1.2c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H4.2c-.2 0-.4-.2-.4-.4V3.3zm1.5 4.4H4.2c-.2 0-.4-.2-.4-.4V6.2c0-.2.2-.4.4-.4h1.2c.2 0 .4.2.4.4v1.2c0 .1-.2.3-.4.3zm.4 3.9a2.9 2.9 0 0 1 5.8 0H5.8zm7.7-4.3c0 .2-.2.4-.4.4H12c-.2 0-.4-.2-.4-.4V6.2c0-.2.2-.4.4-.4h1.2c.2 0 .4.2.4.4v1.1zm0-2.9c0 .2-.2.4-.4.4H12c-.2 0-.4-.2-.4-.4V3.3c0-.2.2-.4.4-.4h1.2c.2 0 .4.2.4.4v1.1z","class":"st0"}}]},"name":"hotel"};

const Hotel = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={HotelSvg} />;

Hotel.displayName = 'Hotel';
export default React.forwardRef(Hotel);
