
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const BookBannerSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 20 17.31"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M37 35v-3.46a.66.66 0 0 0-1.32 0v4.15a.67.67 0 0 0 .2.47.64.64 0 0 0 .46.19h3.93a.66.66 0 0 0 0-1.32zm-8.87-3A3.51 3.51 0 0 1 27 29.46 3.4 3.4 0 0 1 30.33 26a3.22 3.22 0 0 1 2 .66 9.62 9.62 0 0 0-4.21 5.39zm13.59-5.39a3.22 3.22 0 0 1 2-.66A3.4 3.4 0 0 1 47 29.46a3.51 3.51 0 0 1-1.12 2.59 9.62 9.62 0 0 0-4.17-5.39zm.11 15a7.74 7.74 0 0 1-9.68-.08L30.81 43a.66.66 0 0 1-.95-.91l1.32-1.38A8.48 8.48 0 0 1 29 35a8 8 0 1 1 16 0 8.5 8.5 0 0 1-2.25 5.79L44 42a.66.66 0 0 1 0 1 .65.65 0 0 1-.93 0z","class":"cls-1","transform":"translate(-27 -26)"}}]},"name":"book_banner"};

const BookBanner = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={BookBannerSvg} />;

BookBanner.displayName = 'BookBanner';
export default React.forwardRef(BookBanner);
