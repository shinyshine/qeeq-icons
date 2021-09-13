
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const Watchlist2Svg = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 14 13"},"children":[{"tag":"path","attrs":{"fill":"#E4E4E4","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"M11.95 3.59c-1.13 0-2.16.52-2.83 1.38a3.56 3.56 0 0 0-6.4 2.2c0 .92.36 1.8 1 2.47l5.04 5.06.36.37.37-.37 4.94-4.97a3.58 3.58 0 0 0-2.48-6.14z","transform":"translate(-1135 -270) translate(1133 267)"}}]},"name":"watchlist2"};

const Watchlist2 = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={Watchlist2Svg} />;

Watchlist2.displayName = 'Watchlist2';
export default React.forwardRef(Watchlist2);
