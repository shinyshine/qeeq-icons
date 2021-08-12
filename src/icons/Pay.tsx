
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const PaySvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 20.24 20.24"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M39.27 41.38h-1.56a.78.78 0 1 1 0-1.56h1.56a.78.78 0 1 1 0 1.56zM40 32H25.26a.78.78 0 1 1 0-1.56h15.56a.78.78 0 1 0 0-1.56H25.26A2.31 2.31 0 0 0 23 31a.78.78 0 0 0-.06.3V46A3.11 3.11 0 0 0 26 49.16h14A3.11 3.11 0 0 0 43.16 46V35.15A3.11 3.11 0 0 0 40 32z","class":"cls-1","transform":"translate(-22.92 -28.92)"}}]},"name":"pay"};

const Pay = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={PaySvg} />;

Pay.displayName = 'Pay';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Pay);
