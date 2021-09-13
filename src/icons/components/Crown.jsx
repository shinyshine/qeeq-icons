
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const CrownSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 14 13","version":"1.1","viewBox":"0 0 14 13","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状","d":"m1.6 5.7.6 4.4c0 .3.3.6.7.6H11c.3 0 .6-.2.7-.6l.8-4.3c0-.2-.1-.3-.2-.3s-.2 0-.2.1L10 6.9c-.1.1-.3.1-.4-.1L7.3 3.7c-.1-.1-.3-.2-.5-.1l-.1.1-2.4 3c0 .1-.1.1-.3 0L2 5.4c-.1-.1-.3 0-.4.1 0 .1-.1.1 0 .2z","class":"st0"}},{"tag":"ellipse","attrs":{"id":"椭圆形","cx":"7","cy":"1.7","class":"st0","rx":"1","ry":"1"}},{"tag":"ellipse","attrs":{"id":"椭圆形-copy-11","cx":".8","cy":"4","class":"st0","rx":"1","ry":"1"}},{"tag":"ellipse","attrs":{"id":"椭圆形-copy-12","cx":"13.2","cy":"4","class":"st0","rx":"1","ry":"1"}},{"tag":"path","attrs":{"id":"路径-2","d":"M2.7 12.4c-.2 0-.3-.2-.3-.5s.1-.5.3-.5h8.7c.2 0 .3.2.3.5s-.1.5-.3.5H2.7z","class":"st0"}}]},"name":"crown"};

const Crown = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={CrownSvg} />;

Crown.displayName = 'Crown';
export default React.forwardRef(Crown);
