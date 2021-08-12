
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const DoorsSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M2 7.8c0-.1 0-.3.2-.5l2.9-3.6c.4-.4 1-.7 1.4-.7h6.7c.4 0 .8.4.8 1v8.3c0 .4-.4.7-.8.7H2.8c-.4 0-.8-.3-.8-.7V7.8zm11.2-.6V3.9H6.6c-.2 0-.6.2-.8.5L3.6 7.2h9.6zM8.9 9c0 .5.4.8.8.8h1.8c.5 0 .8-.4.8-.8V8H8.9v1z","class":"st0"}}]},"name":"doors"};

const Doors = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={DoorsSvg} />;

Doors.displayName = 'Doors';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Doors);
