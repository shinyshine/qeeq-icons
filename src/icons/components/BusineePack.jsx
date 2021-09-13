
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const BusineePackSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 14 12"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M38.55 35.09v-1c0-.31-.19-.41-.44-.41s-.45.1-.45.41v1c0 .32.19.41.45.41s.44-.08.44-.41zm-6.25 0v-1c0-.31-.19-.41-.44-.41a.39.39 0 0 0-.44.41v1c0 .32.19.41.44.41s.44-.08.44-.41zm9.35.07h-2.08c-.31 0-.39 0-.39.31v.12a.59.59 0 0 1-.59.59h-1a.59.59 0 0 1-.58-.59v-.11c0-.25-.08-.32-.33-.32h-3.32c-.33 0-.41.07-.41.35v.08a.59.59 0 0 1-.58.59h-1a.58.58 0 0 1-.58-.59c0-.35-.08-.39-.4-.39h-2c-.29 0-.4.06-.43.25v3.81A1.94 1.94 0 0 0 29.8 41h10.4a1.94 1.94 0 0 0 1.8-1.78v-3.86c0-.16-.16-.2-.35-.2zm-8.32-4.8a.46.46 0 0 1 .46-.46h2.42a.46.46 0 0 1 .46.46v.49h-3.34zm7.14.53a1.36 1.36 0 0 0-.27 0h-2.63v-.7A1.15 1.15 0 0 0 36.4 29h-2.8a1.15 1.15 0 0 0-1.17 1.15v.7H29.8a1.1 1.1 0 0 0-.27 0A2 2 0 0 0 28 32.63v1.06c0 .19.16.23.44.23h1.94c.33 0 .41 0 .41-.35v-.08a.59.59 0 0 1 .58-.59h1a.58.58 0 0 1 .58.59v.08c0 .32.08.35.4.35h3.35c.3 0 .33 0 .33-.31v-.12a.59.59 0 0 1 .59-.59h1a.59.59 0 0 1 .58.59v.11c0 .29.1.34.38.34h2.07c.23 0 .33 0 .37-.2v-1.11a1.92 1.92 0 0 0-1.55-1.74zM33.34 34z","class":"cls-1","transform":"translate(-28 -29)"}}]},"name":"businee-pack"};

const BusineePack = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={BusineePackSvg} />;

BusineePack.displayName = 'BusineePack';
export default React.forwardRef(BusineePack);
