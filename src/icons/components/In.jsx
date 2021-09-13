
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const InSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 24 24"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M44.33 23H25.67A2.67 2.67 0 0 0 23 25.67v18.66A2.67 2.67 0 0 0 25.67 47h18.66A2.67 2.67 0 0 0 47 44.33V25.67A2.67 2.67 0 0 0 44.33 23zM31.26 42h-3.2V31.29h3.2zm-1.6-11.79a1.61 1.61 0 1 1 1.66-1.61 1.63 1.63 0 0 1-1.66 1.61zM43 42h-3.2v-5.72c0-1.49-.53-2.23-1.58-2.23a1.58 1.58 0 0 0-1.62 1.25V42h-3.2V31.29h2.53l.2 2.14h.07a3.56 3.56 0 0 1 3.15-1.8A3.31 3.31 0 0 1 42 32.7a4.65 4.65 0 0 1 1 3.25z","class":"cls-1","transform":"translate(-23 -23)"}}]},"name":"in"};

const In = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={InSvg} />;

In.displayName = 'In';
export default React.forwardRef(In);
