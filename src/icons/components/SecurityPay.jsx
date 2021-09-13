
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const SecurityPaySvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 18 23"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"id":"形状结合","d":"M18.14 8A3 3 0 0 1 21 11v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-9a3 3 0 0 1 2.86-3V6.05a6.14 6.14 0 0 1 12.28 0zM7.7 8h8.6V6.05a4.3 4.3 0 0 0-8.6 0zm3 7.73-.7 3.34h4l-.74-3.34a2.5 2.5 0 1 0-2.52 0z","class":"cls-1","transform":"translate(-3)"}}]},"name":"security-pay"};

const SecurityPay = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={SecurityPaySvg} />;

SecurityPay.displayName = 'SecurityPay';
export default React.forwardRef(SecurityPay);
