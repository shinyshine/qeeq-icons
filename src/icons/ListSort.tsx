
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const ListSortSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 20 20"},"children":[{"tag":"path","attrs":{"fill":"#3570E6","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"m15.25 2.5 3.5 4.41h-2.63V17.5h-1.75V6.91h-2.62l3.5-4.41zm-4.38 13.24v1.76H1.26v-1.76h9.63zm0-6.18v1.76H1.26V9.56h9.63zM9.13 3.38v1.77H1.25V3.38h7.88z","transform":"translate(-1300 -317) translate(890 312) translate(284 5) translate(126)"}}]},"name":"list_sort"};

const ListSort = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={ListSortSvg} />;

ListSort.displayName = 'ListSort';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(ListSort);
