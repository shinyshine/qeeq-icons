
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const ThirdPartySvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M8 6.9c-2 0-3.7 2.1-3.7 4.8v.3h7.3v-.3c0-2.6-1.6-4.8-3.6-4.8zm0-.5c1 0 1.9-.8 1.9-1.7C9.9 3.8 9 3 8 3c-1 0-1.8.8-1.8 1.7 0 1 .8 1.7 1.8 1.7zM12.5 8.6c-.2 0-.3 0-.5.1.5.9.7 1.9.7 3v.3h2.2v-.2c0-1.8-1.1-3.2-2.4-3.2zm1.2-1.5c0-.6-.6-1.1-1.2-1.1-.7 0-1.2.5-1.2 1.1 0 .6.6 1.1 1.2 1.1.7.1 1.2-.4 1.2-1.1zM3.5 8.6C2.1 8.6 1 10 1 11.8v.2h2.2v-.3c0-1.1.3-2.2.7-3-.1-.1-.3-.1-.4-.1zM2.2 7.1c0 .6.6 1.1 1.2 1.1.7 0 1.2-.5 1.2-1.1.1-.6-.5-1.1-1.2-1.1-.6 0-1.2.5-1.2 1.1z","class":"st0"}}]},"name":"third-party"};

const ThirdParty = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={ThirdPartySvg} />;

ThirdParty.displayName = 'ThirdParty';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(ThirdParty);
