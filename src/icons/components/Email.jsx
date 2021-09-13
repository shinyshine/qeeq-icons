
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const EmailSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 30 20.4"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"m45.7 25.4-12.6 9.4a2.11 2.11 0 0 1-2.4 0l-12.5-9.4a.79.79 0 0 0-1.2.6v16.3a1.56 1.56 0 0 0 1.6 1.5h26.8a1.5 1.5 0 0 0 1.6-1.5V26a.84.84 0 0 0-1.3-.6z","class":"cls-1","transform":"translate(-17 -23.4)"}},{"tag":"path","attrs":{"d":"m20.3 24.3 10.6 8a2.11 2.11 0 0 0 2.4 0l10.4-8c.7-.5.5-.9-.3-.9H20.6c-.9.1-1.1.4-.3.9z","class":"cls-2","transform":"translate(-17 -23.4)"}}]},"name":"email"};

const Email = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={EmailSvg} />;

Email.displayName = 'Email';
export default React.forwardRef(Email);
