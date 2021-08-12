
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const PayCardSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 19 13","version":"1.1","viewBox":"0 0 19 13","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"d":"M.3 4.3v7.5c0 .3.1.6.3.8s.6.4.9.4h15.8c.3 0 .6-.1.8-.3s.3-.5.3-.8V4.3H.3zM3.4 9h6.2v.8H3.4V9zm0-2.3h9.4v.8H3.4v-.8zM.3 1.5v1.2h18.2V1.5c0-.3-.1-.6-.3-.8s-.5-.3-.8-.3H1.5C1.2.4.9.5.7.7s-.4.5-.4.8z","class":"st0"}}]},"name":"pay-card"};

const PayCard = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={PayCardSvg} />;

PayCard.displayName = 'PayCard';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(PayCard);
