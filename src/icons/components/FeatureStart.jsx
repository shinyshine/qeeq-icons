
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const FeatureStartSvg = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 14 14"},"children":[{"tag":"path","attrs":{"fill":"#FF9500","fill-rule":"evenodd","stroke":"none","stroke-width":"1","d":"M8.02 11.94 4.01 14.16 4.77 9.45 1.52 6.12 6.02 5.44 8.02 1.16 10.03 5.44 14.52 6.12 11.27 9.45 12.04 14.16z","transform":"translate(-433 -332) translate(171 182) translate(261 148) translate(0 1)"}}]},"name":"feature-start"};

const FeatureStart = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={FeatureStartSvg} />;

FeatureStart.displayName = 'FeatureStart';
export default React.forwardRef(FeatureStart);
