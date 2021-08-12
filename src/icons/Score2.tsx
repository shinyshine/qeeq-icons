
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const Score2Svg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 29.94 29.72"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M21.72 38.37A13.18 13.18 0 1 0 8.44 25.19a13.23 13.23 0 0 0 13.28 13.18zm0 1.68a14.86 14.86 0 1 1 15-14.86 14.91 14.91 0 0 1-15 14.86z","class":"cls-1","transform":"translate(-6.75 -10.33)"}},{"tag":"path","attrs":{"d":"M24.94 30.33H17.6a.84.84 0 1 0 0 1.68h7.34a.84.84 0 1 0 0-1.68zM16.18 22.71l-.77.7-.25.23-.1.09a.84.84 0 0 0-.06 1.22.85.85 0 0 0 1.2.06l.1-.09.26-.23.74-.69.77-.71.27-.26.1-.11.07-.08a.85.85 0 0 0 0-1l-.07-.08-.1-.11-.27-.26-.77-.71-.78-.71-.26-.23-.1-.09a.85.85 0 0 0-1.2.06.84.84 0 0 0 .04 1.09l.1.09.25.23.77.7.47.43zM27.27 21.85l.77-.7.25-.23.1-.09a.84.84 0 0 0 .06-1.19.85.85 0 0 0-1.2-.06l-.1.09-.26.23-.78.71-.77.71-.27.26-.1.11-.07.08a.85.85 0 0 0 0 1l.07.08.1.11.27.26.77.71.78.71.26.23.1.09a.85.85 0 0 0 1.2-.06.84.84 0 0 0-.06-1.19l-.1-.09-.25-.23-.77-.7-.47-.43z","class":"cls-1","transform":"translate(-6.75 -10.33)"}}]},"name":"score-2"};

const Score2 = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={Score2Svg} />;

Score2.displayName = 'Score2';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Score2);
