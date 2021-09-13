
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const GolfSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -1067)"},"children":[{"tag":"g","attrs":{"id":"Golf-Course","transform":"translate(51 1053)"},"children":[{"tag":"g","attrs":{"id":"icon_Golf-Course","transform":"translate(16 14)"},"children":[{"tag":"g","attrs":{"id":"icon","transform":"translate(6 1)"},"children":[{"tag":"g","attrs":{"id":"编组"},"children":[{"tag":"path","attrs":{"id":"Fill-1","d":"M5.4 1.6v10.9l13.8-5.4L5.4 1.6zM10.3 32c-1.4 0-2.6-.5-2.6-1 0-.6 1.2-1 2.6-1 1.4 0 2.6.4 2.6 1 0 .5-1.1 1-2.6 1zm3.7-5.7c-3.7 0-7 .5-9.5 1.4V1.2C4.5.5 4 0 3.4 0c-.5 0-1 .5-1 1.2v27.5c-1.5.9-2.4 1.9-2.4 3 0 3 6.3 5.4 14 5.4s14-2.4 14-5.4c0-3-6.3-5.4-14-5.4z","class":"st0"}}]}]}]}]}]}]}]},"name":"Golf"};

const Golf = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={GolfSvg} />;

Golf.displayName = 'Golf';
export default React.forwardRef(Golf);
