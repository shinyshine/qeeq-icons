
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const Discount2Svg = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 17 17"},"children":[{"tag":"path","attrs":{"fill":"#FD5E29","fill-rule":"evenodd","stroke":"none","stroke-width":"1","d":"M15.54 7.6 8.88 1.3c-.21-.2-.5-.3-.79-.3l-5.81.18c-.57.02-1.02.44-1.03.97l-.2 5.5c0 .28.11.55.32.75l6.66 6.3c.42.4 1.1.4 1.51 0l6-5.67a.97.97 0 0 0 0-1.43zm-9.3-1.69c-.42.41-1.05.57-1.64.42a1.66 1.66 0 0 1-1.2-1.14c-.17-.56 0-1.16.43-1.56a1.78 1.78 0 0 1 2.42 0c.66.63.66 1.65 0 2.28z","transform":"translate(-208 -160) translate(120 144) translate(88 16)"}}]},"name":"discount2"};

const Discount2 = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={Discount2Svg} />;

Discount2.displayName = 'Discount2';
export default React.forwardRef(Discount2);
