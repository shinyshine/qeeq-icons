
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const XingliSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M6.1 5h4V3.7h-4V5zm5 0H13c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h2.1V3.7c0-.6.4-1 1-1h4c.6 0 1 .4 1 1V5zM5.5 7c-.3 0-.5.2-.5.5v3c0 .3.2.5.5.5s.5-.2.5-.5v-3c0-.3-.2-.5-.5-.5zm5 0c-.3 0-.5.2-.5.5v3c0 .3.2.5.5.5s.5-.2.5-.5v-3c0-.3-.2-.5-.5-.5z","class":"st0"}}]},"name":"xingli"};

const Xingli = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={XingliSvg} />;

Xingli.displayName = 'Xingli';
export default React.forwardRef(Xingli);
