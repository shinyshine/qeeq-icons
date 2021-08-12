
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const MuseumSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -143)"},"children":[{"tag":"g","attrs":{"id":"Museum","transform":"translate(51 129)"},"children":[{"tag":"g","attrs":{"id":"icon_Museum","transform":"translate(16 14)"},"children":[{"tag":"g","attrs":{"id":"icon","transform":"translate(5 5)"},"children":[{"tag":"path","attrs":{"id":"形状结合","d":"M4.3 12.9h4.3V23.7h4.3V13h4.3V23.8h4.2V13h4.3V23.8h2.1V26H30v2.1H0V26h2.1v-2.2H4.3V12.9zM15.8 0c.9 0 1.8.3 2.6.9L28 8.7h2.1v2.1H0V8.7h2.1L11.8.9c.7-.6 1.6-.9 2.5-.9h1.5z","class":"st0"}}]}]}]}]}]}]},"name":"Museum"};

const Museum = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={MuseumSvg} />;

Museum.displayName = 'Museum';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Museum);
