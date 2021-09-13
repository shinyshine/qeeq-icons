
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const GallerySvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -1151)"},"children":[{"tag":"g","attrs":{"id":"Gallery","transform":"translate(51 1137)"},"children":[{"tag":"g","attrs":{"id":"icon_Gallery","transform":"translate(16 14)"},"children":[{"tag":"path","attrs":{"id":"形状结合","d":"M19.7 5.1c.1-.1.3-.2.6.1l6 4.4H36V31H4V9.6h9.7l6-4.5zm13.2 7.6H7.1v15.2h25.8V12.7zm-7.9 3 7.4 7.8v3.9H7.6v-2.6l6.3-6 4.5 4.2 6.6-7.3zm-7-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm2-7c-.4 0-.7-.3-.8-.6l-4.7 3.5h11l-4.7-3.5c-.1.3-.4.6-.8.6z","class":"st0"}}]}]}]}]}]},"name":"Gallery"};

const Gallery = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={GallerySvg} />;

Gallery.displayName = 'Gallery';
export default React.forwardRef(Gallery);
