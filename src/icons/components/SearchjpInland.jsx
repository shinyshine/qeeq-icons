
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const SearchjpInlandSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 147.92 46"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"id":"Path","d":"M27.13 0H146a4 4 0 0 1 4 4.09V46H2.08a4.09 4.09 0 0 0 1.3-2.44l4-26.25A20.14 20.14 0 0 1 27.13 0z","class":"cls-1","transform":"translate(-2.08)"}}]},"name":"searchjp_inland"};

const SearchjpInland = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={SearchjpInlandSvg} />;

SearchjpInland.displayName = 'SearchjpInland';
export default React.forwardRef(SearchjpInland);
