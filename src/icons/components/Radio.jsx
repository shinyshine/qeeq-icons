
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const RadioSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 16 16"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M35 37a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm0 6a8 8 0 1 1 8-8 8 8 0 0 1-8 8z","class":"cls-1","transform":"translate(-27 -27)"}}]},"name":"radio"};

const Radio = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={RadioSvg} />;

Radio.displayName = 'Radio';
export default React.forwardRef(Radio);
