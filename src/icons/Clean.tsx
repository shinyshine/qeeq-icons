
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const CleanSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 12 13"},"children":[{"tag":"path","attrs":{"fill":"#3570E6","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"M13.81 14h-.78s0-1.5-1.7-3.25c.45 1.06.71 2.37.78 3.25H9.94a5.88 5.88 0 0 0-1.18-1.63c.2.5.4 1.07.53 1.63H2.08C2 13.75 2 13.44 2 13.19A5.63 5.63 0 0 1 4.96 8.3H11a5.56 5.56 0 0 1 2.95 4.88c0 .25-.06.5-.13.81zM9.68 7.5h-3.4c-.47 0-.86-.38-.86-.81v-.82c0-.43.4-.8.85-.8h.86V1.8c0-.44.39-.81.85-.81.46 0 .85.38.85.81v3.25h.85c.46 0 .85.38.85.82v.8c0 .45-.39.82-.85.82z","transform":"translate(-891 -855) translate(365 710) translate(30 119) translate(88 1) translate(285 24) translate(121)"}}]},"name":"clean"};

const Clean = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={CleanSvg} />;

Clean.displayName = 'Clean';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Clean);
