
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const ChildSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 13 11"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M38 35a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm-6-1a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm9.1-.53a5.52 5.52 0 0 0-4.15-5.32l-.31 1.37a2.39 2.39 0 0 1-2.5 1.58 2.46 2.46 0 0 1-.47 0v-1.35a1.45 1.45 0 0 0 .47.08 1.38 1.38 0 0 0 1.39-1.37V28a5.53 5.53 0 0 0-5.57 5.5.92.92 0 1 0 0 1.83.76.76 0 0 0 .3 0 5.59 5.59 0 0 0 10.54 0 .76.76 0 0 0 .3 0 .92.92 0 1 0 0-1.83z","class":"cls-1","transform":"translate(-29 -28)"}}]},"name":"child"};

const Child = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={ChildSvg} />;

Child.displayName = 'Child';
export default React.forwardRef(Child);
