
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const WrongBoldSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"路径","d":"M15.7 1.5c.4.4.4 1.2 0 1.6L10.8 8l4.8 4.8c.4.4.4 1.2 0 1.6l-1.2 1.2c-.4.4-1.2.4-1.6 0L8 10.8l-4.8 4.8c-.4.4-1.2.4-1.6 0L.4 14.4C0 14 0 13.2.4 12.8L5.2 8 .3 3.2c-.4-.4-.4-1.2 0-1.6L1.5.4C1.9 0 2.7 0 3.1.4L8 5.2 12.8.4c.4-.4 1.2-.4 1.6 0l1.3 1.1z","class":"st0"}}]},"name":"wrong_bold"};

const WrongBold = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={WrongBoldSvg} />;

WrongBold.displayName = 'WrongBold';
export default React.forwardRef(WrongBold);
