
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const ChildSeatSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 11.22 11.44"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M58 68c-.77-.53-2.12.29-2.12.29H53.9a8 8 0 0 0-3-5.73.68.68 0 0 0-.51-.11l-.08-.34.2-.1c.77-.37 1-1.21.25-2-.43-.48-1.28-.3-1.87.36a1.54 1.54 0 0 0-.25 2 .74.74 0 0 0 .82.12l.07.28a5.86 5.86 0 0 0-.77.54s-.06.29.41 1.09 1.88 6 2.37 6.57c.35.44 7.8 0 7.8 0a5.14 5.14 0 0 0 .25-1.39c0-.65-.88-1.06-1.65-1.59z","class":"cls-1","transform":"translate(-48.39 -59.78)"}}]},"name":"child-seat"};

const ChildSeat = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={ChildSeatSvg} />;

ChildSeat.displayName = 'ChildSeat';
export default React.forwardRef(ChildSeat);
