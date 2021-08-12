
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const Like2Svg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 15 16","version":"1.1","viewBox":"0 0 15 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"路径","d":"M13.6 6h-4C11.2.3 8.5 0 8.5 0c-1.1 0-.9.9-1 1 0 2.8-3 5-3 5v8c0 .8 1.1 1.1 1.5 1.1h6c.6 0 1-1.5 1-1.5C14.6 8.5 14.6 7 14.6 7c0-1-1-1-1-1z","class":"st0"}},{"tag":"path","attrs":{"id":"路径_1_","d":"M2.9 6H.5c-.5 0-.5.5-.5.5l.5 8c0 .5.5.5.5.5h2.1c.4 0 .4-.3.4-.3v-8c0-.7-.6-.7-.6-.7z","class":"st0"}}]},"name":"like-2"};

const Like2 = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={Like2Svg} />;

Like2.displayName = 'Like2';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Like2);
