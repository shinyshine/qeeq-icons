
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const SafetySvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"x":"0","y":"0","enable-background":"new 0 0 10 12","version":"1.1","viewBox":"0 0 10 12","xml:space":"preserve"},"children":[{"tag":"path","attrs":{"d":"M7 1.5h3v4.7c0 2.9-4.2 5.3-5 5.3S0 9.1 0 6.2V1.5h3L5 0l2 1.5zM2.4 5.1l-.8.8L4 8.2l4.4-4.4-.8-.7L4 6.8 2.4 5.1z","transform":"translate(-212 -31) translate(212 31)"}}]},"name":"safety"};

const Safety = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={SafetySvg} />;

Safety.displayName = 'Safety';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Safety);
