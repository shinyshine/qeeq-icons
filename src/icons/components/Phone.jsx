
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const PhoneSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 29.83 29.95"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"m26.9 26.1.8-.8a2.66 2.66 0 0 0 0-3.8l-2.8-2.8a2.66 2.66 0 0 0-3.7 0l-.8.8 6.5 6.6zM45.3 39.1l-2.8-2.8a2.66 2.66 0 0 0-3.7 0l-.8.8 6.5 6.5.8-.8a2.73 2.73 0 0 0 .8-1.9 2.5 2.5 0 0 0-.8-1.8zM35.3 39.9a.91.91 0 0 1-1.2 0L24.2 30a.86.86 0 0 1-.3-.6.71.71 0 0 1 .3-.6l1.1-1.1-6.5-6.5-.6.6c-.3.3-6.6 6.9 5.3 18.9 6 6 10.6 7.2 13.5 7.2a8 8 0 0 0 5.4-1.9l.6-.6-6.5-6.5z","class":"cls-1","transform":"translate(-16.27 -17.95)"}}]},"name":"phone"};

const Phone = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={PhoneSvg} />;

Phone.displayName = 'Phone';
export default React.forwardRef(Phone);
