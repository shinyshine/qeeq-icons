
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const ReviewSvg = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 16 16","version":"1.1","viewBox":"0 0 16 16","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"形状","d":"M12.4 3.5H3.7c-.9 0-1.7.7-1.7 1.6v5.3c0 .9.7 1.7 1.6 1.7h.5l.2 2.4 2.1-2.4h5.9c.9 0 1.6-.7 1.6-1.7V5.1c.1-.9-.6-1.6-1.5-1.6zM5 8.4c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.3.8-.8.8zm3 0c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.3.8-.8.8zm3 0c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.3.8-.8.8z","class":"st0"}}]},"name":"review"};

const Review = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={ReviewSvg} />;

Review.displayName = 'Review';
export default React.forwardRef(Review);
