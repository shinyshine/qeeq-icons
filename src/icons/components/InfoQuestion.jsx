
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const InfoQuestionSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 12 12"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"id":"Combined-Shape-Copy","d":"M6 11.5a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 1a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm0-9.22a2.05 2.05 0 0 1 1.42.48 1.63 1.63 0 0 1 .54 1.3 1.78 1.78 0 0 1-.33 1.1q-.15.16-.78.72a1.33 1.33 0 0 0-.36.45 1.27 1.27 0 0 0-.13.58V8h-1v-.09A1.91 1.91 0 0 1 5.45 7a5.08 5.08 0 0 1 1-1.14l.11-.13a1 1 0 0 0 .25-.64 1 1 0 0 0-.26-.7.94.94 0 0 0-.72-.25.94.94 0 0 0-.83.4 1.44 1.44 0 0 0-.23.88h-1a2.07 2.07 0 0 1 .58-1.57A2.17 2.17 0 0 1 6 3.28zm-.17 5.2a.69.69 0 0 1 .51.19.66.66 0 0 1 .2.48.64.64 0 0 1-.21.5.73.73 0 0 1-1 0 .66.66 0 0 1-.2-.49.63.63 0 0 1 .2-.48.69.69 0 0 1 .45-.2z","class":"cls-1","transform":"translate(0 -.5)"}}]},"name":"info-question"};

const InfoQuestion = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={InfoQuestionSvg} />;

InfoQuestion.displayName = 'InfoQuestion';
export default React.forwardRef(InfoQuestion);
