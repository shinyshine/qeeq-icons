
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const NewDropSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 13.31 7.66"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M6.66 5.9 1.71 1A1 1 0 0 0 .29 1a1 1 0 0 0 0 1.41L6 8a1 1 0 0 0 1.36 0L13 2.36A1 1 0 0 0 11.61 1z","class":"cls-1","transform":"translate(0 -.66)"}}]},"name":"new-drop"};

const NewDrop = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={NewDropSvg} />;

NewDrop.displayName = 'NewDrop';
export default React.forwardRef(NewDrop);
