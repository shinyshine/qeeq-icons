
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const UploadCameraSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 64 61"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M88.88 74.17h-2.21v2.17a2.08 2.08 0 0 1-.67 1.53 2.19 2.19 0 0 1-3.1 0 2.07 2.07 0 0 1-.66-1.53v-2.17h-2.19a2.14 2.14 0 0 1-1.55-.65 2.11 2.11 0 0 1 0-3.06 2.14 2.14 0 0 1 1.55-.65h2.21v-2.16a2.08 2.08 0 0 1 .66-1.53 2.19 2.19 0 0 1 3.1 0 2.08 2.08 0 0 1 .65 1.53v2.17h2.21a2.15 2.15 0 0 1 1.55.65 2.11 2.11 0 0 1 0 3.06 2.14 2.14 0 0 1-1.55.64zm-4.41-12.91a10.7 10.7 0 0 0-7.79 3.19 10.7 10.7 0 0 0 0 15.35 11.11 11.11 0 0 0 15.58 0 10.71 10.71 0 0 0 0-15.35 10.7 10.7 0 0 0-7.79-3.19zm-3.31-17.52a3.22 3.22 0 0 1-2.35-1 3.25 3.25 0 0 1 0-4.62 3.36 3.36 0 0 1 4.69 0 3.25 3.25 0 0 1 0 4.62 3.22 3.22 0 0 1-2.34 1zm-21 21.74a12.84 12.84 0 0 1-9.34-3.84 12.81 12.81 0 0 1 0-18.41 13.29 13.29 0 0 1 18.69 0 12.82 12.82 0 0 1 0 18.41 12.84 12.84 0 0 1-9.32 3.83zm24.27-37H62.4a6.24 6.24 0 0 0-1.93-4.62A6.44 6.44 0 0 0 55.78 22h-4.42a6.44 6.44 0 0 0-4.69 1.9 6.24 6.24 0 0 0-1.93 4.62h-6.62a6.44 6.44 0 0 0-4.69 1.9A6.24 6.24 0 0 0 31.5 35v34.82a6.24 6.24 0 0 0 1.93 4.62 6.44 6.44 0 0 0 4.69 1.9h28.83a2 2 0 0 0 .9-.2 2.93 2.93 0 0 0 .76-.54 2 2 0 0 0 .52-1.67A16.52 16.52 0 0 1 69 72.2 15.11 15.11 0 0 1 78.84 58a15.52 15.52 0 0 1 9.48-.51 2.27 2.27 0 0 0 1.93-.34 3.36 3.36 0 0 0 .59-.78 2 2 0 0 0 .24-1V35a6.24 6.24 0 0 0-1.93-4.62 6.44 6.44 0 0 0-4.68-1.86z","class":"cls-1","transform":"translate(-31.5 -22)"}}]},"name":"upload-camera"};

const UploadCamera = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={UploadCameraSvg} />;

UploadCamera.displayName = 'UploadCamera';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(UploadCamera);
