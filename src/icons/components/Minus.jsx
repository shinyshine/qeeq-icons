
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const MinusSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 30 30","version":"1.1","viewBox":"0 0 30 30","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Line","d":"M23 16 24 16 24 14 23 14 7 14 6 14 6 16 7 16z","class":"st0"}}]},"name":"minus"};

const Minus = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={MinusSvg} />;

Minus.displayName = 'Minus';
export default React.forwardRef(Minus);
