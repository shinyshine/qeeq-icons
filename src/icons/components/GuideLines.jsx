
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const GuideLinesSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 18 18","version":"1.1","viewBox":"0 0 18 18","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状结合","d":"M4 6.1v2.2l-.2.4-.2.6c0 .5.7.8 1.2.9H13c.6 0 1.2-.3 1.3-.8v-.1l-.1-.4h1.2l.2.4h2c.2 0 .3.2.4.3v.5c0 .2-.2.4-.4.4h-.1l-.6.1c.2.3.3.6.3 1v.2l.2 2.4V17.4c0 .4-.3.7-.7.7H15.3c-.4 0-.8-.3-.8-.6v-1h-11v.9c0 .4-.3.7-.7.7H1.4c-.4 0-.8-.3-.8-.6v-3.2l.2-2.4c0-.4.1-.7.2-1l.1-.2-.6-.1c-.2 0-.4-.1-.5-.3v-.6c0-.2.2-.4.4-.4h2.1l.8-2c0-.5.3-.9.7-1.2zm.3 6.7c-.8 0-1.4.4-1.4 1s.6 1 1.4 1c.8 0 1.4-.4 1.4-1 .1-.6-.6-1-1.4-1zm10.1 0c-.8 0-1.4.4-1.4 1s.6 1 1.4 1c.8 0 1.4-.4 1.4-1s-.6-1-1.4-1zM12 .8 17.2 5 12 9.2V7H5V3h7V.8z","class":"st0"}}]},"name":"guide-lines"};

const GuideLines = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={GuideLinesSvg} />;

GuideLines.displayName = 'GuideLines';
export default React.forwardRef(GuideLines);
