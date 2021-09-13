
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const AddSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 18 18"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M35 44a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm0-1a8 8 0 1 0-8-8 8 8 0 0 0 8 8z","class":"cls-1","transform":"translate(-26 -26)"}},{"tag":"path","attrs":{"d":"M8.5 4.5H9.5V13.5H8.5z","class":"cls-1"}},{"tag":"path","attrs":{"d":"M4.5 8.5H13.5V9.5H4.5z","class":"cls-1"}}]},"name":"add"};

const Add = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={AddSvg} />;

Add.displayName = 'Add';
export default React.forwardRef(Add);
