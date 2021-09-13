
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const PetrolSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Combined-Shape","d":"M12.5 8.9c0 2.5-2 4.6-4.5 4.6s-4.5-2-4.5-4.6c0-1.2.5-2.4 1.3-3.2L8 2.4l3.2 3.2c.8.9 1.3 2.1 1.3 3.3zm-1.3.5c0-.1-.1-.2-.3-.2-.2 0-.3.1-.3.3v.1c.1.6-.1 1.1-.4 1.6s-.9.7-1.4.7h-.2c-.1 0-.2.1-.3.2v.3c0 .1.2.1.3.1h.2c.7 0 1.4-.3 1.9-.9.4-.7.6-1.5.5-2.2z","class":"st0"}}]},"name":"petrol"};

const Petrol = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={PetrolSvg} />;

Petrol.displayName = 'Petrol';
export default React.forwardRef(Petrol);
