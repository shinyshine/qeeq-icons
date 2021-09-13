
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const AutoSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm-.4-9.3-2.3 5.9h1l.5-1.5h2.5l.5 1.5h1L8.7 4.7H7.6zm-.4 3.6.9-2.6.9 2.6H7.2z","class":"st0"}}]},"name":"auto"};

const Auto = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={AutoSvg} />;

Auto.displayName = 'Auto';
export default React.forwardRef(Auto);
