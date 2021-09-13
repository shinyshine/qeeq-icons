
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const ExtraDriversSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 10.42 13.09"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M54 72c3.05 0 5.12 0 5.2-1.85A5.44 5.44 0 0 0 57.15 66a2.62 2.62 0 0 0-1.61-.73h-3.07a2.62 2.62 0 0 0-1.61.73 5.44 5.44 0 0 0-2.06 4.2C48.88 72 50.95 72 54 72zm0-7.1a3 3 0 1 0-3-3 3 3 0 0 0 3 3.05z","class":"cls-1","transform":"translate(-48.79 -58.96)"}}]},"name":"extra-drivers"};

const ExtraDrivers = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={ExtraDriversSvg} />;

ExtraDrivers.displayName = 'ExtraDrivers';
export default React.forwardRef(ExtraDrivers);
