
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const FacebookSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 29.99 29.99"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M34 65.5H10.67a3.34 3.34 0 0 0-3.33 3.33v23.33a3.34 3.34 0 0 0 3.33 3.33h11.66V83.83H19V79.7h3.33v-3.41c0-3.61 2-6.14 6.27-6.14h3v4.34h-2a2.2 2.2 0 0 0-2.29 2.4v2.81h4.28l-.95 4.12h-3.31v11.67H34a3.34 3.34 0 0 0 3.33-3.33V68.83A3.34 3.34 0 0 0 34 65.5z","class":"cls-1","transform":"translate(-7.34 -65.5)"}}]},"name":"facebook"};

const Facebook = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={FacebookSvg} />;

Facebook.displayName = 'Facebook';
export default React.forwardRef(Facebook);
