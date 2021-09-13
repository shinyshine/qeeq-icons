
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const OrganizationSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 40 40","version":"1.1","viewBox":"0 0 40 40","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"g","attrs":{"id":"Page-1"},"children":[{"tag":"g","attrs":{"id":"地标页备份","transform":"translate(-67 -647)"},"children":[{"tag":"g","attrs":{"id":"Organization","transform":"translate(51 633)"},"children":[{"tag":"g","attrs":{"id":"icon_Organization","transform":"translate(16 14)"},"children":[{"tag":"path","attrs":{"id":"Fill-1","d":"M5.6 5v2.6H4.1v1.1h.6v21.5H4V33h32v-2.8h-.8v-14h.8v-1l-18.5-2.3V8.7h.6V7.6H7.3V5H5.6zm5.8 11h4.8v-3h-4.8v3zm-5.9 0h4.8v-3H5.5v3zm12.9 11.8h14.7v-8.3H18.4v8.3zm-7-3.7h4.8v-3h-4.8v3zm-4.9 2.8h3.8v-5.6H6.5v5.6z","class":"st0"}}]}]}]}]}]},"name":"Organization"};

const Organization = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={OrganizationSvg} />;

Organization.displayName = 'Organization';
export default React.forwardRef(Organization);
