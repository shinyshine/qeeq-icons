
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const ProfileSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Combined-Shape","d":"M3.9 1.8h7.9c.5 0 .9.4.9.9v10.9c0 .5-.4.9-.9.9H3.9a.9.9 0 0 1-.9-.9V2.7c0-.5.4-.9.9-.9zm1 2.9c-.2 0-.4.2-.4.4s.2.4.4.4h5.9c.2 0 .4-.2.4-.4s-.2-.4-.4-.4H4.9zm.1 3c-.2 0-.4.2-.4.4s.2.4.4.4h3.1c.2 0 .4-.2.4-.4s-.2-.4-.4-.4H5zm0 2.9c-.2 0-.4.2-.4.4s.2.4.4.4h4.4c.2 0 .4-.2.4-.4s-.2-.4-.4-.4H5z","class":"st0"}}]},"name":"profile"};

const Profile = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={ProfileSvg} />;

Profile.displayName = 'Profile';
export default React.forwardRef(Profile);
