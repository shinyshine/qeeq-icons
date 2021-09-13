
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const Xingli2Svg = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 21 20"},"children":[{"tag":"path","attrs":{"fill":"#222","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"M12.58 3.4c.7 0 1.25.56 1.25 1.25v1.6h2.42c.69 0 1.25.56 1.25 1.25V15c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25V7.5c0-.69.56-1.25 1.25-1.25h2.58v-1.6c0-.7.56-1.25 1.25-1.25h5zm-5.7 5.35a.63.63 0 0 0-.62.53l-.01.1v3.74a.62.62 0 0 0 1.24.1l.01-.1V9.38a.62.62 0 0 0-.63-.63zm6.25 0a.63.63 0 0 0-.62.53l-.01.1v3.74a.62.62 0 0 0 1.24.1l.01-.1V9.38a.62.62 0 0 0-.63-.63zm-.55-4.1h-5v1.6h5v-1.6z","transform":"translate(-692 -255) translate(398 144) translate(244 110) translate(50.4 1)"}}]},"name":"xingli2"};

const Xingli2 = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={Xingli2Svg} />;

Xingli2.displayName = 'Xingli2';
export default React.forwardRef(Xingli2);
