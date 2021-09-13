
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const BigSearchSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 28 27","version":"1.1","viewBox":"0 0 28 27","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状结合","d":"M12.6.9c6.5 0 11.7 5.3 11.7 11.7 0 2.7-.9 5.2-2.5 7.2.1 0 .2.1.3.2l.1.1 5 5c.4.4.4 1.2 0 1.6-.4.4-1.1.4-1.5.1l-.1-.1-5-5c-.1-.1-.2-.2-.2-.3-2.1 1.9-4.8 3-7.8 3C6.1 24.4.9 19.1.9 12.7S6.1.9 12.6.9zm0 2.2c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.2-9.5-9.5-9.5z","class":"st0"}}]},"name":"big-search"};

const BigSearch = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={BigSearchSvg} />;

BigSearch.displayName = 'BigSearch';
export default React.forwardRef(BigSearch);
