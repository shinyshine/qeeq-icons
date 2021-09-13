
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const IconInSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 18.6 18.67"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"id":"Shape","d":"M13.2 19.33H5.76a5.57 5.57 0 0 1-5.58-5.48v-7.7A5.57 5.57 0 0 1 5.76.67h7.44a5.57 5.57 0 0 1 5.59 5.48v7.7a5.57 5.57 0 0 1-5.59 5.48zM5.76 2.65a3.53 3.53 0 0 0-3.6 3.5v7.7a3.53 3.53 0 0 0 3.6 3.5h7.44a3.53 3.53 0 0 0 3.61-3.5v-7.7a3.53 3.53 0 0 0-3.61-3.5z","class":"cls-1","transform":"translate(-.18 -.67)"}},{"tag":"path","attrs":{"id":"Shape-2","d":"M9.53 15.33A5.4 5.4 0 0 1 4.17 10a5.25 5.25 0 0 1 5.36-5.33 5.09 5.09 0 0 1 4 1.7 4.77 4.77 0 0 1 1.28 3.75 5.39 5.39 0 0 1-1.52 3.76 5.17 5.17 0 0 1-3.76 1.45zm-.11-8.24A2.81 2.81 0 0 0 6.73 10a2.9 2.9 0 0 0 2.8 2.91 2.89 2.89 0 0 0 2.8-2.91c.12-1.82-.93-2.91-2.91-2.91z","class":"cls-1","data-name":"Shape","transform":"translate(-.18 -.67)"}},{"tag":"path","attrs":{"id":"Shape-3","d":"M13.8 4.67a1 1 0 1 0 1-1 1 1 0 0 0-1 1z","class":"cls-1","data-name":"Shape","transform":"translate(-.18 -.67)"}}]},"name":"icon_in"};

const IconIn = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={IconInSvg} />;

IconIn.displayName = 'IconIn';
export default React.forwardRef(IconIn);
