
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const PositionSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 19 19"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M35.5 42a7.5 7.5 0 1 1 7.5-7.5 7.5 7.5 0 0 1-7.5 7.5zm0-1a6.5 6.5 0 1 0-6.5-6.5 6.5 6.5 0 0 0 6.5 6.5z","class":"cls-1","transform":"translate(-26 -25)"}},{"tag":"circle","attrs":{"cx":"9.48","cy":"9.57","r":"2.71","class":"cls-1"}},{"tag":"path","attrs":{"d":"M9 0H10V4H9z","class":"cls-1"}},{"tag":"path","attrs":{"d":"M9 15H10V19H9z","class":"cls-1"}},{"tag":"path","attrs":{"d":"M0 9H4V10H0z","class":"cls-1"}},{"tag":"path","attrs":{"d":"M15 9H19V10H15z","class":"cls-1"}}]},"name":"position"};

const Position = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={PositionSvg} />;

Position.displayName = 'Position';
export default React.forwardRef(Position);
