
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const UpgradeSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Combined-Shape","d":"M11 8.2h3l-6-7-6 7h3v6h6v-6z","class":"st0"}}]},"name":"upgrade"};

const Upgrade = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={UpgradeSvg} />;

Upgrade.displayName = 'Upgrade';
export default React.forwardRef(Upgrade);
