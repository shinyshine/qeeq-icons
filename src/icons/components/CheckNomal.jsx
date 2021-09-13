
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const CheckNomalSvg = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 26 26"},"children":[{"tag":"path","attrs":{"fill":"#616161","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"M24.16 7.63c.42.42.42 1.1 0 1.53L12.28 21.04a2.7 2.7 0 0 1-3.83 0l-6.5-6.52a1.08 1.08 0 0 1 0-1.53l.95-.96c.95-.95 2.5-.95 3.45 0l4.02 4.03 9.38-9.39c.95-.95 2.5-.95 3.45 0l.96.96z","transform":"translate(-883 -1139) translate(410 954) translate(473 185)"}}]},"name":"check_nomal"};

const CheckNomal = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={CheckNomalSvg} />;

CheckNomal.displayName = 'CheckNomal';
export default React.forwardRef(CheckNomal);
