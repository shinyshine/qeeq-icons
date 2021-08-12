
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const Landmark1Svg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 12 12"},"children":[{"tag":"path","attrs":{"fill":"#616161","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"M3.57 3.57a4.5 4.5 0 0 1 7.67 2.96l.01.22v3.75c0 .41-.34.75-.75.75H6.75a4.49 4.49 0 0 1-3.18-7.68zm3.18 1.38a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6z","transform":"translate(-642 -317) translate(641 314) translate(0 1) translate(.25 .5) rotate(45 6.75 6.75)"}}]},"name":"landmark1"};

const Landmark1 = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={Landmark1Svg} />;

Landmark1.displayName = 'Landmark1';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Landmark1);
