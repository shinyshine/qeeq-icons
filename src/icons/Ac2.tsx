
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const Ac2Svg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 21 20"},"children":[{"tag":"path","attrs":{"fill":"#222","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"M10.97 3.57c.54 0 .98.43.98.97v1.88l1.67-1.34a.98.98 0 0 1 1.3.07l.08.09a.98.98 0 0 1-.15 1.37l-2.9 2.32v1.16h1.16l2.32-2.9a.98.98 0 1 1 1.53 1.23l-1.34 1.67h1.88c.5 0 .91.37.97.86v.12c0 .54-.43.97-.97.97h-1.88l1.34 1.67c.3.4.27.95-.07 1.3l-.09.08a.98.98 0 0 1-1.37-.15l-2.32-2.9h-1.16v1.16l2.9 2.32a.98.98 0 0 1-1.23 1.53l-1.67-1.34v1.88c0 .5-.38.91-.86.97h-.12a.98.98 0 0 1-.97-.97V15.7l-1.68 1.34a.98.98 0 0 1-1.29-.07l-.08-.09a.98.98 0 0 1 .15-1.37L10 13.2v-1.16H8.84l-2.32 2.9A.98.98 0 0 1 5 13.7l1.34-1.67H4.45a.98.98 0 0 1-.97-.86v-.11c0-.55.43-.98.97-.98h1.88L4.99 8.42a.98.98 0 0 1 .06-1.3l.1-.08a.98.98 0 0 1 1.37.15l2.32 2.9H10V8.93L7.1 6.6a.98.98 0 1 1 1.22-1.53L10 6.42V4.54c0-.5.37-.91.86-.97z","transform":"translate(-867 -255) translate(398 144) translate(244 110) translate(224.6) translate(.1 .1) rotate(-90 10.97 11.07)"}}]},"name":"AC2"};

const Ac2 = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={Ac2Svg} />;

Ac2.displayName = 'Ac2';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Ac2);
