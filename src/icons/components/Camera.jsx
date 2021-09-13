
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const CameraSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 53.9 44.3"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M32 24.6A12.5 12.5 0 1 0 44.5 37 12.5 12.5 0 0 0 32 24.6zM41.7 37a9.7 9.7 0 1 1-9.7-9.7 9.84 9.84 0 0 1 9.7 9.7zM50.3 24.6h-2.7a1.4 1.4 0 1 0 0 2.8h2.7a1.37 1.37 0 0 0 1.4-1.4 1.31 1.31 0 0 0-1.4-1.4z","class":"cls-1","transform":"translate(-5 -12.5)"}},{"tag":"path","attrs":{"d":"M42.8 15.1h.4a5.76 5.76 0 0 1 .7 1.2c.2.3.5 1.1.9 2l.7 1.6h7.2a3.69 3.69 0 0 1 3.7 3.7v27a3.69 3.69 0 0 1-3.7 3.7H11.3a3.69 3.69 0 0 1-3.7-3.7v-27a3.69 3.69 0 0 1 3.7-3.7h7.4l.7-1.5a7.72 7.72 0 0 0 .6-1.5c.6-1.4.9-1.7.9-1.8h21.9m0-2.6H21.3c-1.9 0-2.7.8-3.8 3.5-.2.5-.4 1-.6 1.4h-5.7A6.23 6.23 0 0 0 5 23.6v27a6.23 6.23 0 0 0 6.2 6.2h41.5a6.23 6.23 0 0 0 6.2-6.2v-27a6.23 6.23 0 0 0-6.2-6.2h-5.5c-.3-.6-.7-1.6-1-2.1-.8-2-1.4-2.8-3.4-2.8z","class":"cls-1","transform":"translate(-5 -12.5)"}}]},"name":"camera"};

const Camera = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={CameraSvg} />;

Camera.displayName = 'Camera';
export default React.forwardRef(Camera);
