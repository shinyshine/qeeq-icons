
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const ChatSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","data-name":"图层 1","viewBox":"0 0 22 18.96"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M11.31 19.51 13 17.75a.51.51 0 0 1 .41-.14h9.76a.59.59 0 0 0 .55-.54v-10a.49.49 0 0 0-.14-.41.51.51 0 0 0-.41-.14h-15a.5.5 0 0 0-.55.54v10.29a.29.29 0 0 0 .27.27h2.47a.59.59 0 0 1 .55.54v1.22c-.01.27.09.4.4.13zm-1.78-.81H7.88a1.49 1.49 0 0 1-1.38-1.49V6.78a1.4 1.4 0 0 1 1.38-1.49h15.53a1.49 1.49 0 0 1 1.38 1.49v10.57a1.4 1.4 0 0 1-1.37 1.49h-9.63c-.14 0-.28.14-.41.14l-3 3.25c-.27.27-.55.27-.55-.27V19a.29.29 0 0 0-.3-.3z","class":"cls-1","transform":"translate(-6.5 -5.29)"}},{"tag":"ellipse","attrs":{"cx":"4.14","cy":"6.85","class":"cls-1","rx":"1.05","ry":"1.07"}},{"tag":"ellipse","attrs":{"cx":"9.14","cy":"6.85","class":"cls-1","rx":"1.05","ry":"1.07"}},{"tag":"ellipse","attrs":{"cx":"14.14","cy":"6.85","class":"cls-1","rx":"1.05","ry":"1.07"}},{"tag":"path","attrs":{"d":"M21.63 22.08c-.14-.14-.27-.14-.55-.14h-5.64c-.14 0-.41-.14-.55-.14a.8.8 0 0 1-.14-.54v.14a.64.64 0 0 1 .69-.68h6.05a1.4 1.4 0 0 1 .41.14l1.1 1.09c.41.27.55.14.55-.27l-.14-.68v-.14l.14-.14h3.58a.29.29 0 0 0 .27-.27v-9.06a.29.29 0 0 0-.27-.27.59.59 0 0 1-.55-.54.49.49 0 0 1 .14-.41.51.51 0 0 1 .41-.14H28a.59.59 0 0 1 .55.54v10.57a.7.7 0 0 1-.27.54 1 1 0 0 1-.55.27h-2.81c-.14 0-.14 0-.14.14s-.14.14 0 .14l.14 1.62c0 .41-.27.54-.55.27z","class":"cls-1","transform":"translate(-6.5 -5.29)"}}]},"name":"chat"};

const Chat = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={ChatSvg} />;

Chat.displayName = 'Chat';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(Chat);
