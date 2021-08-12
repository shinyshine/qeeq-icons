
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const LogoSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 18"},"children":[{"tag":"path","attrs":{"fill":"#1EA255","fill-rule":"evenodd","stroke":"none","stroke-width":"1","d":"M14.65 3.16c-.22-.18-.5-.28-.79-.28h-.08a11.4 11.4 0 0 1-2.8-.21c-1.14-.25-2.47-1.42-2.85-1.65a1.25 1.25 0 0 0-1.28 0c-.05.02-1.43 1.35-2.79 1.65a11.55 11.55 0 0 1-2.82.21h-.07c-.3 0-.58.1-.8.28a.99.99 0 0 0-.36.75V6.5c0 9.55 6.98 10.78 7.27 10.83a1.36 1.36 0 0 0 .41 0c.3-.05 7.32-1.28 7.32-10.83V3.9a.99.99 0 0 0-.36-.75zM11.94 6.8l-4.81 4.32a.64.64 0 0 1-.11.13.75.75 0 0 1-.52.18.75.75 0 0 1-.5-.18.64.64 0 0 1-.12-.13L3.3 8.82a.58.58 0 0 1 0-.9.76.76 0 0 1 .99 0L6.5 9.9l4.45-3.99a.76.76 0 0 1 .99 0c.27.25.27.65 0 .9z","transform":"translate(-159 -805) translate(125 780) translate(30 22) translate(4.5 3)"}}]},"name":"logo"};

const Logo = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={LogoSvg} />;

Logo.displayName = 'Logo';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Logo);
