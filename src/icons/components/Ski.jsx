
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const SkiSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -1319)"},"children":[{"tag":"g","attrs":{"id":"Ski-Lift","transform":"translate(51 1305)"},"children":[{"tag":"g","attrs":{"id":"icon_Ski-Lift","transform":"translate(16 14)"},"children":[{"tag":"path","attrs":{"id":"形状结合","d":"m35.5 33.4 1.3.5c-.7 1.6-1.8 2.5-3.5 2.6H14.8v-1.4h18.5c.6 0 1.6-.2 2.2-1.7zM24.9 1.1l.7 1.9-7 2.7v5.8h-6.1c-.9 0-1.7.7-1.7 1.6V26.4c0 .9.7 1.7 1.6 1.7h10.1v-.7h-6.8c-1 0-1.8-.8-1.9-1.8V19c.1-.3.5-.6.9-.6H18c.5 0 .9.4 1 .9v1.1h5.2v2.4H19v1h5.4c1 0 1.8.8 1.9 1.8V34h-3.8v-3.3h-10c-2.2 0-4-1.8-4.2-4V13.3c0-2.2 1.8-4 4-4.2H16.9V6.4L6.5 10.3l-.8-1.9 19.2-7.3zm-8.7 12c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3z","class":"st0"}}]}]}]}]}]},"name":"Ski"};

const Ski = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={SkiSvg} />;

Ski.displayName = 'Ski';
export default React.forwardRef(Ski);
