
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const CheckedSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 14 14"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"id":"SVGID","d":"M3 1h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm3.4 9.7L3.8 8.2l-.4-.4-.8.9.4.4L6 12l.4.4.1-.2.5-.4 5.7-5.9.4-.4-.8-.8-.4.4z","class":"cls-1","transform":"translate(-1 -1)"}}]},"name":"checked"};

const Checked = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={CheckedSvg} />;

Checked.displayName = 'Checked';
export default React.forwardRef(Checked);
