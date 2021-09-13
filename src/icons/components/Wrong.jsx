
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const WrongSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 12.8 12.8"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M12.8 11.1 7.86 6.33 12.63 1.39 11.19 0 6.42 4.94 1.39.08 0 1.51 5.04 6.38.17 11.41 1.61 12.8 6.47 7.77 11.41 12.54 12.8 11.1z","class":"cls-1"}}]},"name":"wrong"};

const Wrong = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={WrongSvg} />;

Wrong.displayName = 'Wrong';
export default React.forwardRef(Wrong);
