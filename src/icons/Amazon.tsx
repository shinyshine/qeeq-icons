
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const AmazonSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 15 15","version":"1.1","viewBox":"0 0 15 15","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状结合","d":"M.8 11.7c-.2-.2 0-.4.2-.3 2.3 1.4 6 3.7 11.9 1 .2-.1.4.1.2.4-.2.3-2.2 2.1-5.6 2.1-3.4 0-5.9-2.3-6.7-3.2zm12.2-.4c.5-.1 1.3 0 1.5.2.1.2 0 .9-.2 1.4-.2.5-.5.9-.7 1-.2.1-.3.1-.2-.1.1-.2.6-1.5.4-1.7-.2-.3-1.2-.1-1.5-.1-.3 0-.4.1-.5 0 0-.3.7-.6 1.2-.7zM7.9.7c.9 0 2.1.2 2.8.9.9.8.8 1.9.8 3v3.1c0 .9.4 1.3.7 1.7.1.2.1.4 0 .5-.4.3-1.1.9-1.4 1.2-.1.1-.3.1-.4 0-.6-.5-.7-.8-1.1-1.3-1 1.1-1.8 1.4-3.1 1.4-1.6 0-2.8-1-2.8-2.9 0-1.5.8-2.6 2-3.1 1-.4 2.5-.5 3.5-.7v.1c0-.4 0-1-.2-1.4-.3-.3-.7-.5-1.1-.5-.7 0-1.4.4-1.5 1.1 0 .2-.2.3-.3.3L3.9 4c-.1 0-.3-.2-.2-.4C4.1 1.4 6.1.7 7.9.7zm1 5.6c-1.4 0-2.8.3-2.8 1.9 0 .8.4 1.4 1.1 1.4.5 0 1-.3 1.3-.9.3-.6.4-1.1.4-1.8v-.6z","class":"st0"}}]},"name":"amazon"};

const Amazon = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={AmazonSvg} />;

Amazon.displayName = 'Amazon';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Amazon);
