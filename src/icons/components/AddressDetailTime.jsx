
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const AddressDetailTimeSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 14 14","version":"1.1","viewBox":"0 0 14 14","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"time","d":"M7.6 6.8V4.3c0-.3-.3-.5-.6-.5s-.5.2-.5.5V7.2c0 .1.1.1.1.2l2.7 2.7c.2.2.6.2.8 0 .2-.2.2-.6 0-.8L7.6 6.8zM7 13.5C3.4 13.5.5 10.6.5 7S3.4.5 7 .5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z","class":"st0"}}]},"name":"address-detail-time"};

const AddressDetailTime = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={AddressDetailTimeSvg} />;

AddressDetailTime.displayName = 'AddressDetailTime';
export default React.forwardRef(AddressDetailTime);
