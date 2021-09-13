
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const OilSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 9.62 11.45"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"ellipse","attrs":{"cx":"3.42","cy":"7.89","class":"cls-1","rx":".41","ry":".42"}},{"tag":"path","attrs":{"d":"M9.53 5.34 5.62 2.85l.94-.77 3 1.76zm-4.93 5.5A2.65 2.65 0 0 1 2 8.17V8h.47v.12A2.14 2.14 0 1 0 4.59 6h-.1v-.5h.11a2.67 2.67 0 0 1 0 5.34zm0-4a1.33 1.33 0 1 1-1.32 1.32 1.32 1.32 0 0 1 1.31-1.33zm-.24-1.48v1.25A1.5 1.5 0 0 0 3.1 7.9H1.87a2.62 2.62 0 0 1 2.49-2.54zm6.2-2.28C10.35 2.94 7 .92 7 .92S6.53.5 6.24.68L4 2.14V.64S3.86.28 3.57.28h-2s-.36.1-.37.4v10.74a.31.31 0 0 0 .31.31h9a.31.31 0 0 0 .31-.31V3.6a.86.86 0 0 0-.26-.52z","class":"cls-1","transform":"translate(-1.18 -.28)"}}]},"name":"oil"};

const Oil = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={OilSvg} />;

Oil.displayName = 'Oil';
export default React.forwardRef(Oil);
