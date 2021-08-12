
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const GreenStarSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 48 48","version":"1.1","viewBox":"0 0 48 48","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"页面1"},"children":[{"tag":"g","attrs":{"id":"首页_增加评论","transform":"translate(-237 -4356)"},"children":[{"tag":"g","attrs":{"id":"trust","transform":"translate(32 4248)"},"children":[{"tag":"g","attrs":{"id":"star","transform":"translate(205 108)"},"children":[{"tag":"g","attrs":{"id":"Group"},"children":[{"tag":"g","attrs":{"id":"single-star-transparent"},"children":[{"tag":"path","attrs":{"id":"Shape","d":"M0 0 48 0 48 48 0 48z","class":"st0"}},{"tag":"path","attrs":{"d":"m28 33.6 8.4-1.6 3.6 8-12-6.4zm16-15.9H28.7L24 4l-4.7 13.7H4l12.4 8.5L11.6 40 24 31.5l7.6-5.3L44 17.7z","class":"st1"}}]}]}]}]}]}]}]},"name":"green-star"};

const GreenStar = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={GreenStarSvg} />;

GreenStar.displayName = 'GreenStar';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(GreenStar);
