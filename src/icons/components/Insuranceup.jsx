
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const InsuranceupSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 11 12","version":"1.1","viewBox":"0 0 11 12","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Shape-Copy-2","d":"M9.8 2.1c-.2-.1-.4-.2-.6-.2h-.4c-.3 0-.9 0-1.5-.2-.7-.1-1.6-.9-1.9-1C5.3.6 5.1.6 5 .6c-.1 0-.3 0-.4.1 0 0-1 .9-1.9 1.1-.6.1-1.2.1-1.5.1H.8c-.2 0-.4.1-.5.2-.2.1-.3.3-.3.5v1.7c0 6.4 4.6 7.2 4.8 7.2H5c.2 0 4.9-.9 4.9-7.2V2.6c.1-.2 0-.4-.1-.5zM8 4.5 4.8 7.4s0 .1-.1.1c-.1.1-.2.1-.4.1-.1 0-.2 0-.3-.1l-.1-.1-1.7-1.5c-.2-.2-.2-.5 0-.6.2-.2.5-.2.7 0l1.5 1.3 3-2.7c.2-.2.5-.2.7 0 0 .2 0 .5-.1.6z","class":"st0"}}]},"name":"insuranceup"};

const Insuranceup = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={InsuranceupSvg} />;

Insuranceup.displayName = 'Insuranceup';
export default React.forwardRef(Insuranceup);
