
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const QuestionSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 24 24","version":"1.1","viewBox":"0 0 24 24","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"Membership-Center_oynx","transform":"translate(-253 -493)"},"children":[{"tag":"g","attrs":{"id":"navbar_blue"},"children":[{"tag":"g","attrs":{"id":"card","transform":"translate(32 389)"},"children":[{"tag":"g","attrs":{"id":"分组-4","transform":"translate(57 24) translate(164 80)"},"children":[{"tag":"path","attrs":{"id":"合并形状","d":"M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm.8-9.1v-.1c0-.8.4-1.4 1-1.8l.8-.6c1.1-.8 1.9-1.9 1.9-3.4 0-1.9-1.5-3.8-4.5-3.8-2.8 0-4.4 2-4.4 4 0 .3 0 .6.1.9l2.4.1c-.1-.1-.1-.4-.1-.6 0-1.1.6-2.1 1.9-2.1 1.3 0 1.9.8 1.9 1.7 0 .6-.2 1.1-.8 1.5l-.9.7c-1.1.8-1.5 1.7-1.5 2.8 0 .3 0 .5.1.8h2.1zm-2.5 2.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5c-.9-.1-1.5.6-1.5 1.5z","class":"st0"}}]}]}]}]}]}]},"name":"question"};

const Question = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={QuestionSvg} />;

Question.displayName = 'Question';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Question);
