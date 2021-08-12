
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const DockSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -1235)"},"children":[{"tag":"g","attrs":{"id":"Dock","transform":"translate(51 1221)"},"children":[{"tag":"g","attrs":{"id":"icon_Dock","transform":"translate(16 14)"},"children":[{"tag":"path","attrs":{"id":"形状结合","d":"M20.6 7.6c.4 0 .6.3.6.6V13h.2c.4 0 .6.3.6.6v10.6c.2 0 .4-.1.5-.1.2-.1.5.1.5.3v1.4h.7c1.2-.1 2.2-.2 3-.5.2-.1.4-.1.6-.2.2-.1.3-.2.5-.3.3-.2.6-.4.9-.8.2-.3.4-.6.6-1h-1.2c-.3 0-.5-.2-.5-.5v-.6c0-2.3 2.3-4.3 3.3-5 .2-.2.6-.2.8 0 .9.7 3.3 2.7 3.3 5v.6c0 .3-.3.5-.5.5h-1.6v.4a6.72 6.72 0 0 1-2.8 5.6c-.4.3-.8.5-1.2.7-.4.2-.8.4-1.2.5l-.2.1-2.2 4.1c-.3.4-.6.6-1 .6h-8.6c-.4 0-.8-.2-.9-.6l-2.2-4.1-.2-.1c-.4-.1-.8-.3-1.2-.5-.4-.2-.8-.4-1.2-.7-.4-.3-.7-.6-1-.9a6.72 6.72 0 0 1-1.8-4.7V23H5.6c-.3 0-.6-.1-.6-.4V22c0-2.3 2.3-4.3 3.3-5 .2-.2.6-.2.8 0 .9.7 3.3 2.7 3.3 5v.6c0 .3-.3.5-.5.5h-1.2c.2.4.4.7.6 1 .3.3.6.6.9.8.2.1.3.2.5.3.2.1.4.2.6.2.8.3 1.9.4 3 .5h.7v-1.4c0-.2.2-.4.5-.3V13.7c0-.3.3-.6.6-.6h.2V8.3c0-.3.3-.6.6-.6h1.7zM20.4 1c2.3 0 4.2 1.8 4.2 4.1v6.1c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3V5.1c0-.8-.7-1.5-1.5-1.5h-1.4c-.8 0-1.5.7-1.5 1.5v6.1c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3V5.1C15 2.8 16.9 1 19.2 1h1.2z","class":"st0"}}]}]}]}]}]},"name":"Dock"};

const Dock = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={DockSvg} />;

Dock.displayName = 'Dock';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Dock);
