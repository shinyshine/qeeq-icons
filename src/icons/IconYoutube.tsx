
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const IconYoutubeSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 18.6 14"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"id":"icon_youtube","d":"m8 10 4.65-3L8 4zm2-10c4 0 6.54.2 6.54.2a2.5 2.5 0 0 1 1.87.8 3.64 3.64 0 0 1 .74 2 28.43 28.43 0 0 1 .19 3.22v1.54a28.43 28.43 0 0 1-.19 3.24 3.74 3.74 0 0 1-.74 2 2.6 2.6 0 0 1-1.87.83S14 14 10 14c-4.83 0-6.32-.2-6.32-.2a3.05 3.05 0 0 1-2-.84 3.64 3.64 0 0 1-.74-2 28.43 28.43 0 0 1-.21-3.2V6.24A28.43 28.43 0 0 1 .92 3a3.54 3.54 0 0 1 .74-2A2.5 2.5 0 0 1 3.52.2S6.12 0 10 0z","class":"cls-1","data-name":"icon youtube","transform":"translate(-.73)"}}]},"name":"icon_youtube"};

const IconYoutube = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={IconYoutubeSvg} />;

IconYoutube.displayName = 'IconYoutube';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(IconYoutube);
