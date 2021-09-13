
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const NextSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 8 14"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M19.75 28.5a1 1 0 0 1-.75-1.71l5.29-5.29L19 16.21a1 1 0 0 1 1.41-1.41l6 6a1 1 0 0 1 0 1.41l-6 6a1 1 0 0 1-.66.29z","class":"cls-1","transform":"translate(-18.75 -14.5)"}}]},"name":"next"};

const Next = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={NextSvg} />;

Next.displayName = 'Next';
export default React.forwardRef(Next);
