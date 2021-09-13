
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const SearchSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 16 16"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M8.44 10a5.2 5.2 0 1 0 5.2 5.2 5.2 5.2 0 0 0-5.2-5.2m0 12.1a6.9 6.9 0 1 1 6.9-6.9 6.9 6.9 0 0 1-6.9 6.9","class":"cls-1","transform":"translate(-1.55 -8.27)"}},{"tag":"path","attrs":{"d":"M16.5 24.26a1 1 0 0 1-.74-.31l-3.6-3.6a1 1 0 0 1 1.48-1.48l3.6 3.6a1 1 0 0 1-.74 1.78","class":"cls-1","transform":"translate(-1.55 -8.27)"}}]},"name":"search"};

const Search = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={SearchSvg} />;

Search.displayName = 'Search';
export default React.forwardRef(Search);
