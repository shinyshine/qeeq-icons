
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const AppleSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"x":"0","y":"0","enable-background":"new 0 0 1000 1187.2","version":"1.1","viewBox":"0 0 1000 1187.2","xml:space":"preserve"},"children":[{"tag":"path","attrs":{"d":"M979 925.2c-18 41.5-39.2 79.7-63.8 114.8-33.6 47.9-61 81-82.2 99.4-32.8 30.2-68 45.7-105.7 46.5-27 0-59.7-7.7-97.6-23.3-38.1-15.5-73.1-23.2-105.1-23.2-33.6 0-69.6 7.7-108.1 23.2-38.6 15.6-69.6 23.7-93.4 24.5-36.1 1.5-72.1-14.4-108.1-47.8-22.9-20-51.6-54.3-86-102.9-36.9-51.9-67.2-112-90.9-180.6C12.8 781.7 0 710 0 640.5c0-79.6 17.2-148.2 51.6-205.7 27.1-46.2 63.1-82.6 108.1-109.4 45.1-26.7 93.7-40.4 146.2-41.3 28.7 0 66.3 8.9 113.1 26.3 46.6 17.5 76.6 26.4 89.7 26.4 9.8 0 43.1-10.4 99.4-31.1 53.3-19.2 98.3-27.1 135.2-24 99.9 8.1 174.9 47.4 224.8 118.4-89.3 54.1-133.5 129.9-132.6 227.2.8 75.8 28.3 138.8 82.3 188.8 24.5 23.2 51.8 41.2 82.2 53.9-6.6 19.3-13.6 37.6-21 55.2z"}},{"tag":"path","attrs":{"d":"M750 23.8c0 59.4-21.7 114.8-64.9 166.1-52.2 61-115.3 96.2-183.7 90.7-.9-7.1-1.4-14.6-1.4-22.5 0-57 24.8-118 68.9-167.9 22-25.3 50-46.3 83.9-63 33.9-16.5 65.9-25.6 96-27.2.8 7.9 1.2 15.9 1.2 23.8z"}}]},"name":"apple"};

const Apple = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={AppleSvg} />;

Apple.displayName = 'Apple';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Apple);
