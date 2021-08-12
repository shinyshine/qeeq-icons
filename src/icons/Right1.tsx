
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const Right1Svg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 12 13"},"children":[{"tag":"path","attrs":{"fill":"#616161","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"M2.17 9a.93.93 0 0 1-.92-.93V3.93a.93.93 0 1 1 1.86 0v3.25h6.98a.91.91 0 1 1 0 1.82H2.17z","transform":"translate(-642 -392) translate(398 144) translate(244 224) translate(0 23) translate(0 .5) rotate(-45 6.12 6)"}}]},"name":"right1"};

const Right1 = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={Right1Svg} />;

Right1.displayName = 'Right1';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Right1);
