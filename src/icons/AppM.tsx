
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const AppMSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 24 24","version":"1.1","viewBox":"0 0 24 24","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Shape","d":"M16.2 1.5H7.8c-1 0-1.8.9-1.8 2v17.1c0 1.1.8 2 1.8 2h8.4c1 0 1.8-.9 1.8-2V3.5c0-1.1-.8-2-1.8-2zm-6.6 1h4.8v.7H9.6v-.7zM12 21.2c-.7 0-1.2-.6-1.2-1.3 0-.7.5-1.3 1.2-1.3s1.2.6 1.2 1.3c0 .7-.5 1.3-1.2 1.3zm4.8-4H7.2V4.1h9.6v13.1z","class":"st0"}}]},"name":"app_m"};

const AppM = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={AppMSvg} />;

AppM.displayName = 'AppM';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(AppM);
