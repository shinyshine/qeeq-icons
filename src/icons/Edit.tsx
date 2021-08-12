
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const EditSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 15.99 15.97"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M57 50.93h1v7.85a2.25 2.25 0 0 1-.61 1.56 2 2 0 0 1-1.46.64H44.07a2 2 0 0 1-1.46-.64 2.25 2.25 0 0 1-.61-1.56V47.2a2.25 2.25 0 0 1 .61-1.56 2 2 0 0 1 1.46-.64h8.65v1h-8.65A1.15 1.15 0 0 0 43 47.2v11.58A1.15 1.15 0 0 0 44.07 60h11.85A1.15 1.15 0 0 0 57 58.78v-7.85zm-9.21 6.19 10-11.3-.74-.8-10 11.29z","class":"cls-1","transform":"translate(-42 -45)"}}]},"name":"edit"};

const Edit = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={EditSvg} />;

Edit.displayName = 'Edit';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Edit);
