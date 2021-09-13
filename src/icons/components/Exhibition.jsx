
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const ExhibitionSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -899)"},"children":[{"tag":"g","attrs":{"id":"Exhibition-Center","transform":"translate(51 885)"},"children":[{"tag":"g","attrs":{"id":"icon_Exhibition-Center","transform":"translate(16 14)"},"children":[{"tag":"g","attrs":{"id":"icon","transform":"translate(3 3)"},"children":[{"tag":"path","attrs":{"id":"形状结合","d":"M25.4 15.5A3 3 0 0 1 28 20c1.2 2.2 3.3 3.5 5.8 3.5v2c-1.5 0-3-.4-4.3-1.2a11 11 0 0 1-1.8-1.4v8H29v2h-7.1v-2h1.2v-8c-.5.5-1.1 1-1.8 1.4-1.3.8-2.8 1.2-4.3 1.2s-3-.4-4.3-1.2c-.7-.3-1.3-.8-1.8-1.3v8H12v2H4.9v-2h1.2v-8c-.5.5-1.1 1-1.8 1.4-1.3.7-2.8 1.1-4.3 1.1v-2c2.5 0 4.6-1.3 5.8-3.5a3 3 0 0 1 2.6-4.5A3 3 0 0 1 11 20c1.2 2.2 3.3 3.5 5.8 3.5s4.6-1.3 5.8-3.5c-.2-.4-.4-.9-.4-1.5.2-1.6 1.6-3 3.2-3zM17 0l4.2 4.2h3.7v10.3H9.1V4.2h3.7L17 0zm0 2.8-1.3 1.3h2.7L17 2.8z","class":"st0"}}]}]}]}]}]}]},"name":"Exhibition"};

const Exhibition = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={ExhibitionSvg} />;

Exhibition.displayName = 'Exhibition';
export default React.forwardRef(Exhibition);
