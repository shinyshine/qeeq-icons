
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const EmailPhoneSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 24 24"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M7.77 5.53H16.22V18.08H7.77z","class":"cls-1"}},{"tag":"ellipse","attrs":{"cx":"12.11","cy":"19.89","class":"cls-1","rx":".96","ry":".95"}},{"tag":"path","attrs":{"d":"M13.22 6.7h1.91a.32.32 0 1 0 0-.63h-1.91a.32.32 0 1 0 0 .63z","class":"cls-1","transform":"translate(-2.06 -2.33)"}},{"tag":"path","attrs":{"d":"M23.4 2.33H4.73A2.67 2.67 0 0 0 2.06 5v18.67a2.67 2.67 0 0 0 2.67 2.67H23.4a2.67 2.67 0 0 0 2.67-2.67V5a2.67 2.67 0 0 0-2.67-2.67zm-4.34 19.89a1.62 1.62 0 0 1-1.6 1.61h-6.79a1.62 1.62 0 0 1-1.6-1.61V6.41a1.59 1.59 0 0 1 1.6-1.58h6.79a1.59 1.59 0 0 1 1.6 1.58z","class":"cls-1","transform":"translate(-2.06 -2.33)"}}]},"name":"email_phone"};

const EmailPhone = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={EmailPhoneSvg} />;

EmailPhone.displayName = 'EmailPhone';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(EmailPhone);
