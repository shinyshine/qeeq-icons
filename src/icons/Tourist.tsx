
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const TouristSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -983)"},"children":[{"tag":"g","attrs":{"id":"Tourist-Spot","transform":"translate(51 969)"},"children":[{"tag":"g","attrs":{"id":"icon_Tourist-Spot","transform":"translate(16 14)"},"children":[{"tag":"g","attrs":{"id":"icon","transform":"translate(6 5)"},"children":[{"tag":"path","attrs":{"id":"形状结合","d":"M27.2 19.7c.5 0 .8.4.8.8v6.6c0 .5-.4.8-.8.8H.8c-.4.1-.8-.3-.8-.7v-6.6c0-.5.4-.8.8-.8h26.4zm-8.3 5h-3.3c-.5 0-.8.4-.8.8s.4.8.8.8h3.3c.5 0 .8-.4.8-.8s-.3-.8-.8-.8zm-13.2 0H4.1c-.5 0-.8.4-.8.8s.4.8.8.8h1.6c.5 0 .8-.4.8-.8s-.3-.8-.8-.8zM23.9 23h-1.6c-.5 0-.8.4-.8.8 0 .5.4.8.8.8h1.6c.5 0 .8-.4.8-.8s-.3-.8-.8-.8zm-11.5 0H9.1c-.5 0-.8.4-.8.8 0 .5.4.8.8.8h3.3c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm14.8-11.5c.5 0 .8.4.8.8v1.6c0 .5-.4.8-.8.8h-.8V18h-3.3v-3.3H4.9V18H1.6v-3.3H.8c-.5 0-.8-.4-.8-.8v-1.6c0-.5.4-.8.8-.8h26.4zM22.2 0c.3 0 .6.2.8.5 2.7 8 3.1 9.3 3.1 9.3h-1.7l-2.1-6.4-2.1 6.4h-2.5l-2.8-5.5v5.5h-1.6V4.3l-2.8 5.5H7.9L5.8 3.4 3.7 9.8H1.9L5 .6c.2-.3.3-.6.8-.6h16.4zm-1.1 1.6h-5.7l3.4 6.9 2.3-6.9zm-8.4 0H6.9l2.3 6.9 3.5-6.9z","class":"st0"}}]}]}]}]}]}]},"name":"Tourist"};

const Tourist = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={TouristSvg} />;

Tourist.displayName = 'Tourist';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Tourist);
