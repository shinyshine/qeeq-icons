
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const Doors2Svg = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 21 20"},"children":[{"tag":"path","attrs":{"fill":"#222","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"M2.51 9.72c-.04-.15.03-.37.22-.6l3.69-4.49a2.6 2.6 0 0 1 1.73-.88h8.34c.56 0 1.01.55 1.01 1.25v10.34c0 .5-.45.91-1.02.91H3.52c-.56 0-1.02-.41-1.02-.9V9.86l.01-.15zm13.97-.76V4.79h-8.3c-.28 0-.8.3-1 .58L4.52 8.96h11.95zm-5.3 2.28c0 .58.46 1.05 1.03 1.05h2.23c.58 0 1.03-.47 1.03-1.05V10h-4.29v1.24z","transform":"translate(-741 -255) translate(398 144) translate(244 110) translate(99.6 1)"}}]},"name":"doors2"};

const Doors2 = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={Doors2Svg} />;

Doors2.displayName = 'Doors2';
export default React.forwardRef(Doors2);
