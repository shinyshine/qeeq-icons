
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const InsuranceSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 18 20","version":"1.1","viewBox":"0 0 18 20","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状结合","d":"M9 .5c.3 0 .5.1.7.2.4.3 2 1.6 3.3 1.9 1 .2 2.1.3 2.7.3h.7c.3 0 .7.1.9.3.3.2.4.5.4.9v3c0 11.1-8.2 12.6-8.5 12.6h-.4C8.5 19.6.3 18.2.3 7.1v-3c0-.3.2-.7.4-.9.2-.2.6-.3.9-.3h.7c.6 0 1.7 0 2.7-.3C6.6 2.3 8.2.7 8.3.7c.2-.2.4-.2.7-.2zm1.6 4.3c-.1-.1-.1 0-.2 0l-4.8 6.3c-.1.1-.1.1 0 .2 0 .1.1.1.2.1h3.1l-.7 4.3c0 .1 0 .2.1.2h.1c.1 0 .1 0 .2-.1l4.5-6.3v-.2c0-.1-.1-.1-.2-.1H10l.7-4.2c0-.1 0-.2-.1-.2z","class":"st0"}}]},"name":"insurance"};

const Insurance = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={InsuranceSvg} />;

Insurance.displayName = 'Insurance';
export default React.forwardRef(Insurance);
