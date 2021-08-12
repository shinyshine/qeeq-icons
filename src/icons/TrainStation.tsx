
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const TrainStationSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 45.64 53.33"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M35.72 30.6v-14H50v14zm5.7 12.63a4.28 4.28 0 1 1 4.28 4.21 4.24 4.24 0 0 1-4.28-4.21zM15.75 30.6v-14H30v14zm0 12.63A4.28 4.28 0 1 1 20 47.44a4.24 4.24 0 0 1-4.25-4.21zM10 16.56v26.67A9.92 9.92 0 0 0 20 53l-8.09 4.21v1.4h41.88v-1.4L45.7 53a9.92 9.92 0 0 0 10-9.82V16.56c0-9.82-10.21-11.23-22.82-11.23S10 6.74 10 16.56z","class":"cls-1","transform":"translate(-10.05 -5.34)"}}]},"name":"train_station"};

const TrainStation = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={TrainStationSvg} />;

TrainStation.displayName = 'TrainStation';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(TrainStation);
