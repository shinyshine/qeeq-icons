
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const RentSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 14 14.53"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M30.9 40.07h6.32a.87.87 0 0 0 0-1.73H30.9a.87.87 0 0 0 0 1.73zm6-6.18a1.13 1.13 0 0 0 1.15-1.1v-1.68a1.1 1.1 0 0 0-.58-1 1.18 1.18 0 0 0-1.15 0 1.11 1.11 0 0 0-.57 1v1.68a1.13 1.13 0 0 0 1.15 1.1zm-5.83 0a1.13 1.13 0 0 0 1.14-1.1v-1.68a1.11 1.11 0 0 0-.57-1 1.18 1.18 0 0 0-1.15 0 1.11 1.11 0 0 0-.57 1v1.68a1.13 1.13 0 0 0 1.15 1.1zm-2.9 9.52v-7.79h11.65v7.79zm11.66-11.2h-1.16v.56a1.75 1.75 0 0 1-3.5 0v-.56h-2.34v.56a1.75 1.75 0 0 1-3.5 0v-.56h-1.16A1.14 1.14 0 0 0 27 33.33v10.08a1.14 1.14 0 0 0 1.17 1.12h11.66A1.14 1.14 0 0 0 41 43.41V33.33a1.12 1.12 0 0 0-.34-.79 1.21 1.21 0 0 0-.83-.33z","class":"cls-1","transform":"translate(-27 -30)"}}]},"name":"rent"};

const Rent = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={RentSvg} />;

Rent.displayName = 'Rent';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Rent);
