
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const QueSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Combined-Shape-Copy","d":"M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8z","class":"st0"}},{"tag":"path","attrs":{"id":"_xFF1F_","d":"M8.5 10.5v-.2c0-.3.1-.6.2-.9.1-.3.3-.6.6-.8.7-.6 1.1-1 1.2-1.1.3-.5.5-1.1.5-1.8 0-.9-.3-1.6-.9-2.1-.5-.5-1.3-.7-2.2-.7-1.1 0-1.9.3-2.5.9-.6.6-.9 1.4-.9 2.5h1.6c0-.6.1-1.1.4-1.4.3-.4.7-.6 1.4-.6.5 0 .9.1 1.2.4.3.3.4.6.4 1.1 0 .4-.1.7-.4 1l-.3.2c-.9.9-1.5 1.5-1.7 1.8-.2.4-.3.9-.3 1.4v.2h1.7zm-.8 2.8c.3 0 .6-.1.8-.3.2-.2.3-.5.3-.8s-.1-.6-.3-.8c-.2-.2-.5-.3-.8-.3s-.6.1-.8.3c-.2.2-.3.5-.3.8s.1.6.3.8c.2.2.4.3.8.3z","class":"st1"}}]},"name":"que"};

const Que = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={QueSvg} />;

Que.displayName = 'Que';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Que);
