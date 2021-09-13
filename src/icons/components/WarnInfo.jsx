
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const WarnInfoSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 24 24"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M12 24a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm-.8-7.22a.8.8 0 0 0-.8.8v1.6a.8.8 0 0 0 .8.8h1.6a.8.8 0 0 0 .8-.8v-1.6a.8.8 0 0 0-.8-.8zm0-12a.8.8 0 0 0-.8.8v8.53a.8.8 0 0 0 .8.8h1.6a.8.8 0 0 0 .8-.8V5.6a.8.8 0 0 0-.8-.8z","class":"cls-1"}}]},"name":"warn-info"};

const WarnInfo = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={WarnInfoSvg} />;

WarnInfo.displayName = 'WarnInfo';
export default React.forwardRef(WarnInfo);
