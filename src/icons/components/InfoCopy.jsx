
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const InfoCopySvg = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16"},"children":[{"tag":"path","attrs":{"fill":"#9E9E9E","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"M6 2a6 6 0 1 1 0 12A6 6 0 0 1 6 2zm0 1a5 5 0 1 0 0 10A5 5 0 0 0 6 3zm-.22 6.98c.2 0 .37.06.5.19.13.12.2.28.2.48 0 .2-.07.37-.2.5a.7.7 0 0 1-.5.19.7.7 0 0 1-.5-.2.63.63 0 0 1-.19-.49c0-.2.06-.36.2-.48a.7.7 0 0 1 .5-.2zm.17-5.2c.58 0 1.06.16 1.42.48.36.32.54.75.54 1.3 0 .45-.12.82-.33 1.1a13 13 0 0 1-.78.72 1.4 1.4 0 0 0-.36.45c-.09.18-.13.36-.13.58v.13H5.27V9.4c0-.34.06-.64.18-.88A4.9 4.9 0 0 1 6.5 7.39l.11-.13a1 1 0 0 0 .25-.64c0-.3-.1-.53-.26-.7-.17-.17-.41-.25-.72-.25-.4 0-.67.11-.84.37-.16.2-.23.5-.23.88H3.8c0-.67.19-1.2.58-1.57.39-.38.91-.57 1.58-.57z","transform":"translate(-732 -321) translate(261 172) translate(240 46) translate(88 101) translate(143 2) translate(2)"}}]},"name":"info-copy"};

const InfoCopy = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={InfoCopySvg} />;

InfoCopy.displayName = 'InfoCopy';
export default React.forwardRef(InfoCopy);
