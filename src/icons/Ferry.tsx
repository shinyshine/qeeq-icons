
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const FerrySvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -1487)"},"children":[{"tag":"g","attrs":{"id":"Ferry","transform":"translate(51 1473)"},"children":[{"tag":"g","attrs":{"id":"icon_Ferry","transform":"translate(16 14)"},"children":[{"tag":"path","attrs":{"id":"Fill-8","d":"M10.9 36c-1.2 0-2.3-.3-3.5-.9v-2.7c1.3 1 2.4 1.4 3.5 1.4 1.2 0 2.4-.5 3.9-1.7l.7-.6.7.6c1.5 1.2 2.8 1.7 4 1.7 1.2 0 2.5-.5 4-1.7l.7-.6.7.6c1.5 1.2 2.8 1.7 3.9 1.7 1 0 2-.3 3.1-1.1v2.6c-1 .5-2.1.8-3.1.8-1.6 0-3.1-.6-4.6-1.7a7.98 7.98 0 0 1-4.7 1.7c-1.6 0-3.2-.6-4.7-1.7-1.5 1-3 1.6-4.6 1.6zm3-15.2c.1.3.5.4.8.3l.7-.3c.3-.1.4-.5.3-.8-.1-.3-.5-.4-.8-.3l-.7.3c-.3.1-.5.5-.3.8zM8 25c-.7-2.2-2.4-3.3 1.2-5.1 3.1-1.6 8.8-4.1 10.4-4.8v16.3c-1-.1-2.1-.6-3.4-1.7l-.7-.6-.7.6c-1.5 1.2-2.8 1.7-3.9 1.7-.6 0-1.3-.1-1.9-.5-.2-1.8-.6-4.5-1-5.9zm2.7-7.1c3.8-1.8 9-4.1 9-4.1l.2-.1.2.1s5 2.2 8.7 4l-.4-3.4h1.3l-.3-2.5H10.3l-.3 2.5h1l-.3 3.5zm11.6-12c0-1.1-.9-1.9-1.9-1.9h-.8c-1.1 0-1.9.9-1.9 1.9V8h4.6V5.9zm2.3 14.8.7.3c.3.1.7 0 .8-.3.1-.3 0-.7-.3-.8l-.7-.3c-.3-.1-.7 0-.8.3-.1.3 0 .7.3.8zm-4.2-5.6c1.6.7 7.3 3.3 10.4 4.8 3.6 1.8 1.9 2.9 1.2 5.1-.4 1.3-.8 4.2-.9 6.1-.6.2-1.1.3-1.6.3-1.2 0-2.4-.5-3.9-1.7l-.7-.6-.7.6a7.1 7.1 0 0 1-3.7 1.7V15.1zm-7.3-4H27V8.8H13.1v2.3z","class":"st0"}}]}]}]}]}]},"name":"Ferry"};

const Ferry = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={FerrySvg} />;

Ferry.displayName = 'Ferry';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Ferry);
