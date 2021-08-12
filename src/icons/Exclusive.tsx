
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const ExclusiveSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 28 17.85"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M45 26H21a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a8.4 8.4 0 0 0-.13-.92l-1.03-10.23 1.8 1.2 2.09 1.38 1.51 1 2 1.33L37 34.88 38.6 36l1.26.83 2 1.31.38.25a.74.74 0 0 1-.24.05c-.36 0-.72.08-1.08.14s-.62.1-.92.18-.48.09-.72.15-.76.18-1.14.29c-.55.15-1.09.34-1.62.54-.07 0-.06.06 0 .11l.13.18H45a2 2 0 0 0 2-2V28a2 2 0 0 0-2-2z","class":"cls-1","transform":"translate(-19 -26)"}},{"tag":"path","attrs":{"d":"m36.52 40.5-.84-1.13-.54-.74v-.07c.36-.14.73-.26 1.1-.36L37 38l.49-.1.62-.12c.24 0 .49-.08.73-.09a.51.51 0 0 0 .16 0l-.25-.16-1.33-.85-.85-.54-1.11-.71-1.13-.72-1.33-.88-1-.65-1.41-.9-1.21-.78.7 6.67.48 4.33c0 .02 0 0 0 0a3.91 3.91 0 0 1 .21-.33l.15-.22.43-.55c.2-.24.4-.47.62-.69a8.41 8.41 0 0 1 .73-.69l.39-.31h.09l.57 1 .42.74.57 1c.19.33.29.55.47.8a1.28 1.28 0 0 0 .74.5.9.9 0 0 0 .26 0h.35a1.4 1.4 0 0 0 .7-2.18z","class":"cls-1","transform":"translate(-19 -26)"}}]},"name":"exclusive"};

const Exclusive = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={ExclusiveSvg} />;

Exclusive.displayName = 'Exclusive';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Exclusive);
