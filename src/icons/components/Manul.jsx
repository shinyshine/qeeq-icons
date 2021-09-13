
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const ManulSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Combined-Shape","d":"M8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm3.2-3.1V5.2H9.7L8.1 9.3 6.4 5.2H4.9v5.7H6V7l1.6 3.9h.9l1.6-4v4h1.1z","class":"st0"}}]},"name":"manul"};

const Manul = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={ManulSvg} />;

Manul.displayName = 'Manul';
export default React.forwardRef(Manul);
