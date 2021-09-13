
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const OthersSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -1823)"},"children":[{"tag":"g","attrs":{"id":"icon_Others","transform":"translate(51 1809)"},"children":[{"tag":"path","attrs":{"id":"形状","d":"M6 14.8c5.7-4.7 11.1-6.8 16.3-6.3V32H6V14.8zm6.2.7V21h3.9v-5.5h-3.9zm0 7.8v5.5h3.9v-5.5h-3.9zM34 9.3C32.4 4.6 29.1 2.5 23.9 3v29H34V9.3z","class":"st0","transform":"translate(16 14)"}}]}]}]}]},"name":"Others"};

const Others = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={OthersSvg} />;

Others.displayName = 'Others';
export default React.forwardRef(Others);
