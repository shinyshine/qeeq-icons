
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const SubwaySvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -227)"},"children":[{"tag":"g","attrs":{"id":"Subway-Station","transform":"translate(51 213)"},"children":[{"tag":"g","attrs":{"id":"icon_Subway-Station","transform":"translate(16 14)"},"children":[{"tag":"g","attrs":{"id":"编组","transform":"translate(5 5)"},"children":[{"tag":"path","attrs":{"id":"形状结合","d":"m11.2 25.6-1.1 1.5h9.6l-1.1-1.5H21l3 4.4h-2.2l-1.1-1.5H9.3L8.2 30H6l3-4.4h2.2zM20.4 7C21.9 7 23 8.2 23 9.6v12.8c0 1.4-1.2 2.6-2.6 2.6H9.6C8.1 25 7 23.8 7 22.4V9.6C6.9 8.2 8.1 7 9.6 7h10.8zm-1.3 13.3c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5c-.1-.9-.7-1.5-1.5-1.5zm-8.2 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5c0-.9-.6-1.5-1.5-1.5zm9-10.7H10c-1.1 0-2 .9-2 1.9v5.3h13.8v-5.3c.1-1-.8-1.9-1.9-1.9z","class":"st0"}},{"tag":"path","attrs":{"id":"路径","d":"M15-.5c7.4 0 13.3 5.9 13.5 13.2V30h-3V13a10.5 10.5 0 0 0-21-.3V30h-3V13C1.5 5.5 7.5-.5 15-.5z","class":"st1"}}]}]}]}]}]}]},"name":"Subway"};

const Subway = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={SubwaySvg} />;

Subway.displayName = 'Subway';
export default React.forwardRef(Subway);
