
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const Up2Svg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 27 29","version":"1.1","viewBox":"0 0 27 29","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状结合","d":"m13.1.5 13 13-3.7 3.7-6.7-6.7v18.3h-5.2V10.7l-6.6 6.6-3.7-3.7L13.1.5z","class":"st0"}}]},"name":"up2"};

const Up2 = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={Up2Svg} />;

Up2.displayName = 'Up2';
export default React.forwardRef(Up2);
