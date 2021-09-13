
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const TrsSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 24 24"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M35.09 44.72s1.76-14.65 11.49-21a2.66 2.66 0 0 0-2.25-1.25H25.67a2.67 2.67 0 0 0-2.67 2.7v8.91s8 3.82 12.09 10.64zM23 42.81v1a2.67 2.67 0 0 0 2.67 2.67h7A17.1 17.1 0 0 0 23 42.81zM37.07 46.5h7.26A2.67 2.67 0 0 0 47 43.83v-10c-4.82 1.27-8.72 9.75-9.93 12.67z","class":"cls-1","transform":"translate(-23 -22.5)"}}]},"name":"trs"};

const Trs = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={TrsSvg} />;

Trs.displayName = 'Trs';
export default React.forwardRef(Trs);
