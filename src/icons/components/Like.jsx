
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const LikeSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 18.55 18.19"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M43 33.57h-3c1.15-2.14 1.38-4 .65-5.36A3.88 3.88 0 0 0 37 26.4c-1.41 0-1.71 1.57-2 3a6.73 6.73 0 0 1-.69 2.27 5 5 0 0 1-1.59 1.54.66.66 0 0 0-.57-.34h-4.43a.67.67 0 0 0-.67.67v10.39a.66.66 0 0 0 .67.67h4.49a.66.66 0 0 0 .57-.34h8.64a4.18 4.18 0 0 0 4.17-4.18v-4A2.55 2.55 0 0 0 43 33.57zm1.35 6.5a3 3 0 0 1-3 3h-8.47v-8.6a5.91 5.91 0 0 0 2.49-2.18 7.49 7.49 0 0 0 .87-2.71c.18-.93.38-2 .79-2a2.75 2.75 0 0 1 2.58 1.19c.62 1.13.21 2.93-1.15 5.06l-.59.92H43a1.35 1.35 0 0 1 1.35 1.34z","class":"cls-1","transform":"translate(-27.05 -26.4)"}}]},"name":"like"};

const Like = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={LikeSvg} />;

Like.displayName = 'Like';
export default React.forwardRef(Like);
