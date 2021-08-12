
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const RecGreatDealsSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Combined-Shape","d":"M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM5.4 6.9c0-.1-.1-.2-.3-.2h-1s-.1.1-.2.1c-.1.1-.1.2-.1.3V12h1.4c.1 0 .2-.1.2-.2V6.9zm6.2-.6H9.9c-.1 0-.2-.1-.2-.2l.1-.5V4.3a1 1 0 0 0-2 0c0 1-.3 1.7-.9 2.1l-.6.3h-.5v5.1c0 .1.1.2.2.2h5c.5 0 .9-.4 1-1 .1-.8.6-3.6.6-3.6.1-.6-.4-1.1-1-1.1z","class":"st0"}}]},"name":"rec-great-deals"};

const RecGreatDeals = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={RecGreatDealsSvg} />;

RecGreatDeals.displayName = 'RecGreatDeals';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(RecGreatDeals);
