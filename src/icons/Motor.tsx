
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const MotorSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -815)"},"children":[{"tag":"g","attrs":{"id":"Motor-Station","transform":"translate(51 801)"},"children":[{"tag":"g","attrs":{"id":"icon_Motor-Station","transform":"translate(16 14)"},"children":[{"tag":"g","attrs":{"id":"icon","transform":"translate(5 5)"},"children":[{"tag":"path","attrs":{"id":"形状结合","d":"M23.7 0c1.8 0 3.2 1.5 3.2 3.2v19.7c0 1.6-1.1 2.9-2.6 3.2V28c0 .6-.4 1-1 1h-2.6c-.6 0-1-.4-1-1v-1.8h-9.4V28c0 .6-.4 1-1 1H6.7c-.6 0-1-.4-1-1v-1.9c-1.5-.3-2.6-1.6-2.6-3.2V3.2C3.1 1.5 4.5 0 6.3 0h17.4zm.2 20.1h-.1c-.8.1-2 .4-3.3 1.4-.1 0-.1.1-.2.1-.2.1-.7.5-.6 1.5 0 .1.1.2.1.2h.1c.9.1 4.5.2 4.8-.9V21c0-.5-.5-.9-1-.9h.2zm-17.7 0c-.6 0-1 .4-1 .9v1.5c.3 1.1 3.9 1 4.8.9h.1c.1 0 .1-.1.1-.2.2-1-.4-1.4-.6-1.5-.1 0-.1-.1-.2-.1a5.65 5.65 0 0 0-3.2-1.5zM23.3 4.6H6.7c-.8 0-1.5.7-1.5 1.5v10.4c2.1 1 5.7 1.6 9.8 1.6s7.8-.7 9.8-1.6V6.1c0-.9-.6-1.5-1.5-1.5zM2.1 6.8v6h-1c-.6 0-1.1-.5-1.1-1.1V7.9c0-.6.5-1.1 1.1-1.1h1zm26.8 0c.6 0 1.1.5 1.1 1.1v3.8c0 .6-.5 1.1-1.1 1.1H28v-6h.9zM19 1.5h-8c-.4 0-.7.3-.7.7v.5c0 .4.3.7.7.7h8c.4 0 .7-.3.7-.7v-.4c0-.4-.3-.8-.7-.8z","class":"st0"}}]}]}]}]}]}]},"name":"Motor"};

const Motor = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={MotorSvg} />;

Motor.displayName = 'Motor';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Motor);
