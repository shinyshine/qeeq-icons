
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const ChatDropSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 10.41 5.38"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M9.75 5.38 5.21 1.34.66 5.38 0 4.63 5.21 0 10.41 4.63 9.75 5.38z","class":"cls-1"}}]},"name":"chat-drop"};

const ChatDrop = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={ChatDropSvg} />;

ChatDrop.displayName = 'ChatDrop';
export default React.forwardRef(ChatDrop);
