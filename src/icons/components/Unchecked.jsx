
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const UncheckedSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 14 14"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"id":"SVGID","d":"M3 1h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a.94.94 0 0 0-1 1v10a.94.94 0 0 0 1 1h10a.94.94 0 0 0 1-1V3a.94.94 0 0 0-1-1z","class":"cls-1","transform":"translate(-1 -1)"}}]},"name":"unchecked"};

const Unchecked = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={UncheckedSvg} />;

Unchecked.displayName = 'Unchecked';
export default React.forwardRef(Unchecked);
