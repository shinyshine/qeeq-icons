
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const MobileSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 20 30"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M38.58 37.51a.58.58 0 0 1-.58.58H24.16a.58.58 0 0 1-.58-.58V17.67a.58.58 0 0 1 .58-.58H38a.58.58 0 0 1 .58.58zM30.95 43a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zm-1.28-28h2.67c.37 0 .67.22.67.5s-.3.5-.67.5h-2.67c-.37 0-.67-.22-.67-.5s.3-.5.67-.5zm7.8-1H24.53A3.5 3.5 0 0 0 21 17.46v23.08A3.5 3.5 0 0 0 24.53 44h12.94A3.5 3.5 0 0 0 41 40.54V17.46A3.5 3.5 0 0 0 37.47 14z","class":"cls-1","transform":"translate(-21 -14)"}},{"tag":"path","attrs":{"d":"M32.62 21.12a.5.5 0 0 1 .21.68L29.54 28a.5.5 0 1 1-.88-.47l3.29-6.18a.5.5 0 0 1 .67-.23zM32.42 26.5a.5.5 0 0 1 .21.68l-3.29 6.18a.5.5 0 0 1-.88-.47l3.29-6.18a.5.5 0 0 1 .67-.21z","class":"cls-2","transform":"translate(-21 -14)"}},{"tag":"circle","attrs":{"cx":"6.92","cy":"15.38","r":".5","class":"cls-1"}},{"tag":"circle","attrs":{"cx":"11.92","cy":"11.38","r":".5","class":"cls-1"}}]},"name":"mobile"};

const Mobile = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={MobileSvg} />;

Mobile.displayName = 'Mobile';
export default React.forwardRef(Mobile);
