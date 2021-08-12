
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const MaskSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 22 17","version":"1.1","viewBox":"0 0 22 17","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"路径","d":"M1.2 3.1c.8-.6 1.9-.7 3-.3l.2.1-.7 1.8c-.6-.2-1-.2-1.3-.1-.7.6-.4 2.8 1 4.8.3.4.6.8.9 1.1.2.2.4.4.6.5l.2.2L4 12.9c-.4-.3-.7-.6-1.1-.9-.4-.4-.8-.9-1.2-1.4-1.9-2.8-2.3-6.2-.5-7.5z"}},{"tag":"path","attrs":{"id":"路径_1_","d":"M20.8 3.1c-.9-.7-2.2-.7-3.5-.1l-.3.1 1 1.8c.8-.4 1.3-.4 1.6-.2.7.5.4 2.7-1 4.7-.4.5-.7.9-1.1 1.3l-.3.3 1.3 1.5c.6-.5 1.2-1.2 1.7-1.9 2-2.8 2.4-6.2.6-7.5z"}},{"tag":"path","attrs":{"id":"蒙版","d":"M11.2.7c-2.2 0-4.4.4-6.5 1.2-.8.4-1.4 1.3-1.4 2.2v7.3c0 .7.3 1.3.8 1.7 2.3 2.1 4.7 3.1 7.1 3.1 2.4 0 4.9-1.1 7.3-3.1.5-.4.8-1.1.8-1.8V4.1c0-1-.6-1.8-1.5-2.2-2.2-.8-4.4-1.2-6.6-1.2zm0 2c2 0 3.9.4 5.9 1.1.1 0 .2.2.2.3v7.3c0 .1 0 .2-.1.2-2.1 1.8-4.1 2.6-6 2.6-1.9 0-3.8-.9-5.8-2.6-.1-.1-.1-.1-.1-.2V4.1c0-.1.1-.3.2-.3 1.8-.7 3.7-1.1 5.7-1.1z"}},{"tag":"path","attrs":{"id":"矩形","d":"M9.5 6.9H13c.4 0 .8.4.8.8s-.4.8-.8.8H9.5c-.4 0-.8-.4-.8-.8s.4-.8.8-.8z","class":"st0"}},{"tag":"path","attrs":{"id":"矩形_1_","d":"M12.1 6v3.5c0 .4-.4.8-.8.8s-.8-.4-.8-.8V6c0-.4.4-.8.8-.8s.8.3.8.8z","class":"st0"}}]},"name":"mask"};

const Mask = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={MaskSvg} />;

Mask.displayName = 'Mask';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Mask);
