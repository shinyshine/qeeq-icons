
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const CheckPressSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16"},"children":[{"tag":"g","attrs":{"fill":"none","fill-rule":"evenodd","stroke":"none","stroke-width":"1"},"children":[{"tag":"rect","attrs":{"width":"16","height":"16","x":"0","y":"0","fill":"#3570E6","fill-rule":"nonzero","rx":"3","transform":"translate(-120 -583) translate(120 541) translate(0 42)"}},{"tag":"g","attrs":{"stroke":"#FFF","stroke-linecap":"round","stroke-width":"2","transform":"translate(-120 -583) translate(120 541) translate(0 42) translate(4.1 4.67)"},"children":[{"tag":"path","attrs":{"stroke-linejoin":"round","d":"M0 3.44 2.73 6.17"}},{"tag":"path","attrs":{"d":"M7.4 1.17 2.73 6.17"}}]}]}]},"name":"check_press"};

const CheckPress = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={CheckPressSvg} />;

CheckPress.displayName = 'CheckPress';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(CheckPress);
