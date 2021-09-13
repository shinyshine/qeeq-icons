
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const QuesMarkSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 17 17"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M24.5 32a7.5 7.5 0 1 1 7.5 7.5 7.5 7.5 0 0 1-7.5-7.5zm16 0a8.5 8.5 0 1 0-8.5 8.5 8.5 8.5 0 0 0 8.5-8.5z","class":"cls-1","transform":"translate(-23.5 -23.5)"}},{"tag":"path","attrs":{"d":"M31.93 35.34a.69.69 0 0 0-.52.2.64.64 0 0 0-.2.5.69.69 0 0 0 .2.52.75.75 0 0 0 1 0 .66.66 0 0 0 .22-.52.69.69 0 0 0-.2-.5.71.71 0 0 0-.5-.2zm.18-7.34a2.59 2.59 0 0 0-2 .79 2.8 2.8 0 0 0-.71 2h.95a2.17 2.17 0 0 1 .4-1.38 1.53 1.53 0 0 1 1.33-.59 1.55 1.55 0 0 1 1.18.42 1.51 1.51 0 0 1 .41 1.12 1.49 1.49 0 0 1-.36.95 5.32 5.32 0 0 1-.41.43 5 5 0 0 0-1.21 1.39 2.39 2.39 0 0 0-.22 1v.37h1v-.27a1.68 1.68 0 0 1 .23-.88 2.47 2.47 0 0 1 .56-.66 11.87 11.87 0 0 0 1-.92 2.26 2.26 0 0 0 .46-1.4 2.19 2.19 0 0 0-.72-1.7 2.6 2.6 0 0 0-1.89-.67z","class":"cls-2","transform":"translate(-23.5 -23.5)"}}]},"name":"ques_mark"};

const QuesMark = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={QuesMarkSvg} />;

QuesMark.displayName = 'QuesMark';
export default React.forwardRef(QuesMark);
