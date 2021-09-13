
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const PackageSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 30.95 28.95"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M49.69 38.35 32.94 22.56l-7 .19-2.19 2.06a25.64 25.64 0 0 1 1.71 2.1 2.92 2.92 0 0 1 1.31-.31A2.64 2.64 0 1 1 24 29.25a2.48 2.48 0 0 1 .17-.9 27.76 27.76 0 0 1-2.23-1.8l-1.7 1.6v6.79l16.7 15.74a.75.75 0 0 0 1.19 0l11.57-10.9s.61-.84-.01-1.43z","class":"cls-1","transform":"translate(-19.02 -22.02)"}},{"tag":"path","attrs":{"d":"M26.63 29.56a.13.13 0 0 0 .08 0c.44-.42-2.3-3.83-6-7.48a3.27 3.27 0 0 0-.55-.05 1.27 1.27 0 0 0-1 .32 1.22 1.22 0 0 0-.12 1.07c2.41 2.39 6.52 6.14 7.59 6.14z","class":"cls-1","transform":"translate(-19.02 -22.02)"}}]},"name":"package"};

const Package = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={PackageSvg} />;

Package.displayName = 'Package';
export default React.forwardRef(Package);
