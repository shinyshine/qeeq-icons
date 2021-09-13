
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const VehicleChargerSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 6.98 12"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M37.31 35.18a.51.51 0 0 1 .52.52v7.7a.51.51 0 0 1-.52.51h-3.62a.51.51 0 0 1-.52-.51v-7.7a.5.5 0 0 1 .52-.52zM36.08 33h-1.16c-.58 0-.58.82-.6.82v.27h-1s-1.32 0-1.32 1.15v8.61C32 45 33.28 45 33.28 45h4.44S39 45 39 43.85v-8.61c0-1.15-1.27-1.15-1.27-1.15h-1.07v-.27s0-.82-.58-.82z","class":"cls-1","transform":"translate(-32.01 -33)"}},{"tag":"path","attrs":{"d":"M3.46 9 4.99 5.36 3.46 5.5 3.46 3 1.99 6.54 3.46 6.2 3.46 9z","class":"cls-1"}},{"tag":"path","attrs":{"d":"M33.94 42.48H37a.65.65 0 1 1 0 1.3h-3.1a.65.65 0 1 1 0-1.3z","class":"cls-2","transform":"translate(-32.01 -33)"}}]},"name":"vehicle-charger"};

const VehicleCharger = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={VehicleChargerSvg} />;

VehicleCharger.displayName = 'VehicleCharger';
export default React.forwardRef(VehicleCharger);
