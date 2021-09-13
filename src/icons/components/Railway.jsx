
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const RailwaySvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -59)"},"children":[{"tag":"g","attrs":{"id":"Railway-Station","transform":"translate(51 45)"},"children":[{"tag":"g","attrs":{"id":"icon_Railway-Station","transform":"translate(16 14)"},"children":[{"tag":"g","attrs":{"id":"编组","transform":"translate(8 4)"},"children":[{"tag":"path","attrs":{"id":"形状结合","d":"m7 25.1-1.4 2.1h12.8L17 25.1h2.9L24 31h-2.9l-1.4-2.1H4.4L2.9 31H0l4.1-5.9H7zM19.2 0c1.9 0 3.5 1.6 3.5 3.5v17.3c0 2-1.6 3.5-3.5 3.5H4.8c-1.9 0-3.5-1.6-3.5-3.5V3.5c0-2 1.6-3.5 3.5-3.5h14.4zm-1.8 17.9a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-10.8 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm12-14.4H5.4C4 3.5 2.8 4.7 2.8 6.1v7.2h18.4V6.1c0-1.4-1.2-2.6-2.6-2.6z","class":"st0"}}]}]}]}]}]}]},"name":"Railway"};

const Railway = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={RailwaySvg} />;

Railway.displayName = 'Railway';
export default React.forwardRef(Railway);
