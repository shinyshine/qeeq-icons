
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const AppSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 24 24"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M34.15 27.86h1.91a.32.32 0 1 0 0-.63h-1.91a.32.32 0 1 0 0 .63z","class":"cls-1","transform":"translate(-23 -23)"}},{"tag":"path","attrs":{"d":"M7.77 6.03H16.22V18.58H7.77z","class":"cls-1"}},{"tag":"ellipse","attrs":{"cx":"12.11","cy":"20.39","class":"cls-1","rx":".96","ry":".95"}},{"tag":"path","attrs":{"d":"M44.33 23H25.67A2.67 2.67 0 0 0 23 25.67v18.66A2.67 2.67 0 0 0 25.67 47h18.66A2.67 2.67 0 0 0 47 44.33V25.67A2.67 2.67 0 0 0 44.33 23zM40 43.39A1.62 1.62 0 0 1 38.39 45H31.6a1.62 1.62 0 0 1-1.6-1.61V27.58A1.59 1.59 0 0 1 31.6 26h6.79A1.59 1.59 0 0 1 40 27.58z","class":"cls-1","transform":"translate(-23 -23)"}}]},"name":"app"};

const App = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={AppSvg} />;

App.displayName = 'App';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(App);
