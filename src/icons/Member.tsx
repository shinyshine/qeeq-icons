
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const MemberSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 45.96 41"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M46.52 53.47h-2.91a1.19 1.19 0 0 0-.87.37 1.27 1.27 0 0 0-.36.89A1.25 1.25 0 0 0 43.57 56h2.93a1.27 1.27 0 0 0 0-2.53zm-8.72 0-14.54-.08a1.27 1.27 0 0 0 0 2.53l14.52.08a1.27 1.27 0 0 0 0-2.53zm16.33-23.91A1.56 1.56 0 1 1 55.68 28a1.55 1.55 0 0 1-1.55 1.56zM17 28.66a1.53 1.53 0 0 1-1.11.47 1.56 1.56 0 0 1-.39-3.07 1.53 1.53 0 0 1 1.73.72 1.58 1.58 0 0 1-.23 1.89zm18.1-11.28a1.54 1.54 0 1 1-1.55 1.55 1.55 1.55 0 0 1 1.55-1.55zm21.82 7.88a3.81 3.81 0 0 0-2.76-1.2 3.94 3.94 0 0 0-3.5 5.67l-6.82 4.18L39 24.79 37.49 22a3.88 3.88 0 1 0-4.74 0l-.65 1.19-.82 1.49c-1.63 3-3.31 6-5 9.07L25 33l-.59-.37-2.93-1.84-2.14-1.34a3.87 3.87 0 1 0-4.18 2l4.45 15.8.12.43c.23.86.46 1.75 1.38 1.77l9.12.06h18.5c1.15 0 1.35-.87 1.53-1.64 0-.17.08-.35.14-.54l4.55-15.54a4 4 0 0 0 2-6.59z","class":"cls-1","transform":"translate(-12.04 -15)"}}]},"name":"member"};

const Member = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={MemberSvg} />;

Member.displayName = 'Member';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Member);
