
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const NoSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状结合","d":"M8 7.2 5.3 4.5a.6.6 0 0 0-.8 0c-.2.2-.2.6 0 .8L7.1 8l-2.7 2.7c-.2.2-.2.6 0 .8.2.2.6.2.8 0L8 8.9l2.7 2.7c.2.2.6.2.8 0 .2-.2.2-.6 0-.8L8.8 8l2.7-2.7c.2-.2.2-.6 0-.8a.6.6 0 0 0-.8 0L8 7.2zM8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z","class":"st0"}}]},"name":"no"};

const No = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={NoSvg} />;

No.displayName = 'No';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(No);
