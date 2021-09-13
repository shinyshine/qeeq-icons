
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const UncheckSvg = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16"},"children":[{"tag":"path","attrs":{"fill":"#9E9E9E","fill-rule":"nonzero","stroke":"none","stroke-width":"1","d":"M13 0a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h10zm0 1.5H3c-.78 0-1.43.6-1.5 1.37V13c0 .8.6 1.44 1.37 1.5l.14.01h9.98c.8 0 1.44-.6 1.5-1.37l.01-.14V3.01c0-.8-.6-1.44-1.37-1.5l-.14-.01z","transform":"translate(-120 -400) translate(120 358) translate(0 42)"}}]},"name":"uncheck"};

const Uncheck = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={UncheckSvg} />;

Uncheck.displayName = 'Uncheck';
export default React.forwardRef(Uncheck);
