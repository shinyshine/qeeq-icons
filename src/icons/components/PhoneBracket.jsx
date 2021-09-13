
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const PhoneBracketSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 8 12.74"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M31.46 32a.65.65 0 0 1-.46-.63.66.66 0 0 1 .46-.63v-1.35a.39.39 0 0 1 .39-.39.38.38 0 0 1 .39.39v1.93h5.47v.4h-2.49v3.54h1.06a1.27 1.27 0 0 1-1 1.23v2.36h.38v.33a4.71 4.71 0 0 1 1.6.37 1.68 1.68 0 0 1 .88 1.37c0 .61-1.81.82-3.12.82s-3.09-.21-3.12-.82a1.68 1.68 0 0 1 .88-1.37 4.65 4.65 0 0 1 1.63-.38v-.32h.35v-2.36a1.27 1.27 0 0 1-1-1.23h1.14v-3.54h-2.66v1.57a.38.38 0 0 1-.39.39.39.39 0 0 1-.39-.39zm7-1.25a.64.64 0 0 1 .51.64.65.65 0 0 1-.51.64v1.24a.38.38 0 0 1-.39.39.39.39 0 0 1-.39-.39v-3.9a.39.39 0 0 1 .42-.37.38.38 0 0 1 .39.39z","class":"cls-1","transform":"translate(-31 -29)"}}]},"name":"phone-bracket"};

const PhoneBracket = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={PhoneBracketSvg} />;

PhoneBracket.displayName = 'PhoneBracket';
export default React.forwardRef(PhoneBracket);
