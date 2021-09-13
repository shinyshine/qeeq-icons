
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const RecRightSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Combined-Shape","d":"m7 9.8 5.9-6.1 1.4 1.4-5.9 6.1L7 12.6 2.4 8.1l1.4-1.4L7 9.8z","class":"st0"}}]},"name":"rec-right"};

const RecRight = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={RecRightSvg} />;

RecRight.displayName = 'RecRight';
export default React.forwardRef(RecRight);
