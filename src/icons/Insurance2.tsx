
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const Insurance2Svg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16"},"children":[{"tag":"path","attrs":{"fill":"#FFF","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"M9.76 1.55a.82.82 0 0 0-.53-.19h-.38a7.6 7.6 0 0 1-1.54-.14c-.76-.17-1.64-.95-1.9-1.1a.84.84 0 0 0-.85 0c-.04.01-.96.9-1.86 1.1a7.7 7.7 0 0 1-1.88.14H.77c-.2 0-.38.07-.53.19a.66.66 0 0 0-.24.5v1.72c0 6.37 4.65 7.19 4.85 7.22a.91.91 0 0 0 .27 0c.2-.03 4.88-.85 4.88-7.22V2.05c0-.2-.09-.37-.24-.5z","transform":"translate(-613 -236) translate(261 172) translate(240 24) translate(111 38) translate(1 2) translate(3 2.56)"}}]},"name":"insurance2"};

const Insurance2 = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={Insurance2Svg} />;

Insurance2.displayName = 'Insurance2';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Insurance2);
