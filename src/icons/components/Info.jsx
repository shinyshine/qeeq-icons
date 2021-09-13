
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const InfoSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 17 17"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M35.5 43a7.5 7.5 0 1 0-7.5-7.5 7.5 7.5 0 0 0 7.5 7.5zm0 1a8.5 8.5 0 1 1 8.5-8.5 8.5 8.5 0 0 1-8.5 8.5z","class":"cls-1","transform":"translate(-27 -27)"}},{"tag":"path","attrs":{"d":"M7.5 3.5H9.5V5.5H7.5z","class":"cls-1"}},{"tag":"path","attrs":{"d":"M7.5 6.5H9.5V13.5H7.5z","class":"cls-1"}}]},"name":"info"};

const Info = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={InfoSvg} />;

Info.displayName = 'Info';
export default React.forwardRef(Info);
