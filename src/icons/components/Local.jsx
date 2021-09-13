
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const LocalSvg = {"icon":{"tag":"svg","attrs":{"x":"0","y":"0","enable-background":"new 0 0 14 17","version":"1.1","viewBox":"0 0 14 17","xml:space":"preserve"},"children":[{"tag":"path","attrs":{"d":"M6.7 16.4C6.4 16.1.5 10.5.5 7 .5 3.4 3.4.5 7 .5s6.5 2.9 6.5 6.5c0 1.5-1.1 3.7-3.3 6.3-.3.3-.5.6-.8.9l-.7-.7c.2-.3.5-.6.8-.9 2-2.4 3.1-4.4 3.1-5.7 0-3-2.5-5.5-5.5-5.5C4 1.5 1.5 4 1.5 7c0 2.5 4.2 7.1 5.8 8.6l-.6.8z"}},{"tag":"path","attrs":{"d":"M7 9.5C5.6 9.5 4.5 8.4 4.5 7S5.6 4.5 7 4.5 9.5 5.6 9.5 7 8.4 9.5 7 9.5zm0-4c-.8 0-1.5.7-1.5 1.5S6.2 8.5 7 8.5 8.5 7.8 8.5 7 7.8 5.5 7 5.5z"}}]},"name":"local"};

const Local = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={LocalSvg} />;

Local.displayName = 'Local';
export default React.forwardRef(Local);
