
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const Return2Svg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 15 14","version":"1.1","viewBox":"0 0 15 14","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"路径","d":"M10 3.2c2.8 0 5 2.4 5 5.4 0 3-2.3 5.4-5 5.4H1.9v-1.6H10c1.9 0 3.5-1.7 3.5-3.7C13.5 6.6 11.9 5 10 5H2.8l1.9 2-1.1 1.1L.1 4.3C0 4.2 0 4.1 0 4c0-.1 0-.2.1-.2L3.6 0l1.1 1.2-2 2.1 7.3-.1z","class":"st0"}}]},"name":"return2"};

const Return2 = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={Return2Svg} />;

Return2.displayName = 'Return2';
export default React.forwardRef(Return2);
