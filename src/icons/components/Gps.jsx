
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const GpsSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 12.83 13.09"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M54.67 72h-.06a.41.41 0 0 1-.34-.35L53.49 66l-5.57-.8a.4.4 0 0 1-.34-.35.41.41 0 0 1 .23-.43l12-5.45a.4.4 0 0 1 .45.08.42.42 0 0 1 .08.46L55 71.8a.4.4 0 0 1-.37.24","class":"cls-1","transform":"translate(-47.58 -58.95)"}}]},"name":"gps"};

const Gps = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={GpsSvg} />;

Gps.displayName = 'Gps';
export default React.forwardRef(Gps);
