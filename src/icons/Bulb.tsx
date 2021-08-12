
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const BulbSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 14 15","version":"1.1","viewBox":"0 0 14 15","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状结合","d":"M9.1 10v1.5H5.3V10a3.8 3.8 0 1 1 3.8 0zm-3.8 2.4h3.8v1.9H5.3v-1.9zM6.7 0h1v1.8h-1V0zm4.9 1.6.7.7L11 3.6l-.7-.7 1.3-1.3zm2.3 4.6v1h-1.8v-1h1.8zM.6 7.2v-1h1.8v1H.6zm1.6-4.9.7-.7 1.3 1.3-.8.7-1.2-1.3z","class":"st0"}}]},"name":"bulb"};

const Bulb = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={BulbSvg} />;

Bulb.displayName = 'Bulb';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Bulb);
