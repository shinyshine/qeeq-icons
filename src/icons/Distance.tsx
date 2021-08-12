
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const DistanceSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 10 10"},"children":[{"tag":"path","attrs":{"fill":"#000","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"M9.6 0 0 3.98 3.97 5.64 5.55 9.6z","transform":"translate(-765 -1291) translate(470 1134) translate(220 128) translate(4 7) translate(71 22)"}}]},"name":"distance"};

const Distance = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={DistanceSvg} />;

Distance.displayName = 'Distance';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Distance);
