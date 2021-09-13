
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const SelectedSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 19 19"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M32 41.5a9.5 9.5 0 1 0-9.5-9.5 9.5 9.5 0 0 0 9.5 9.5zM30.29 37l-.18.18-.5-.49L26 33.3l-.5-.49 1-1 .5.48 3.06 3 6.49-6.72.51-.57 1 1-.49.51-6.8 7-.48.49z","class":"cls-1","transform":"translate(-22.5 -22.5)"}}]},"name":"selected"};

const Selected = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={SelectedSvg} />;

Selected.displayName = 'Selected';
export default React.forwardRef(Selected);
