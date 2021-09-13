
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const ThingToDoSvg = {"icon":{"tag":"svg","attrs":{"x":"0","y":"0","enable-background":"new 0 0 19 19","version":"1.1","viewBox":"0 0 19 19","xml:space":"preserve"},"children":[{"tag":"path","attrs":{"d":"M6.7 10.7c-1-1-2.1-3.1-1.5-5.5 3.3 1.5 3 5.7 3.3 12.2h-.7v-1.5H5.2s-2.6.2-2.6 1.1c0 .9 2 1.8 7.4 1.8 5.3 0 6.3-1.4 6.3-1.8 0-.4-.5-1.1-2.6-1.1h-1.5s-.3-4.2 2.6-8.5c.4.5.9 1.6-.7 3.7 1.9-.2 2.3-1.3 2.2-3 .5.3.9.8.7 3 1.1-.7 1.7-2.7 0-4.1.8 0 1.2.1 1.5 1.5 1-.9-.3-3.5-2.6-3-.4-2.7-4.4-2.3-4.4-.7.9-.2 1.9-.1 2.2.4-1 0-2.2.2-2.2 3 .9-1 1.3-1.6 3-1.5-1.1.7-3.3 3.7-3.3 10.7h-1.1s.5-9.9-3.7-12.9C8 4.3 9.3 4.3 10.7 7c.2-1.5.2-4.8-3.3-4.4.4-.8.3-1.3 3.3-1.1C8.8-1.3 4.5.3 4.4 3 4.4 3 0 2.1 0 6.7 1.2 5.5 1.7 5 2.2 4.8 1.6 5.7 0 8 2.2 10c.1-2.7.7-3.1 1.1-3.7.1 1.3.1 4.3 3.4 4.4"}}]},"name":"thing_to_do"};

const ThingToDo = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={ThingToDoSvg} />;

ThingToDo.displayName = 'ThingToDo';
export default React.forwardRef(ThingToDo);
