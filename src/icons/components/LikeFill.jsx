
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const LikeFillSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 11 11"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"id":"Shape","d":"M5 6.48a.31.31 0 0 0-.31-.31H3.46a.61.61 0 0 0-.34.14.59.59 0 0 0-.12.37v6h1.74a.23.23 0 0 0 .26-.09V6.48zm7.72-.82h-2.16a.25.25 0 0 1-.24-.28l.11-.61a10.9 10.9 0 0 0 0-1.4v-.31A1.26 1.26 0 0 0 9.12 1.8a1.3 1.3 0 0 0-1.28 1.29 3.3 3.3 0 0 1-1.07 2.64 3.89 3.89 0 0 1-.65.41 1.08 1.08 0 0 1-.31.06h-.28v6.29a.23.23 0 0 0 .24.24h6.14c.65 0 1.1-.45 1.27-1.3L13.94 7a1.28 1.28 0 0 0-1.24-1.34z","class":"cls-1","transform":"translate(-2.95 -1.8)"}}]},"name":"like-fill"};

const LikeFill = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={LikeFillSvg} />;

LikeFill.displayName = 'LikeFill';
export default React.forwardRef(LikeFill);
