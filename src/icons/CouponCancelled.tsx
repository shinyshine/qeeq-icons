
import * as React from 'react'
import QeeqIcon, { QeeqIconProps } from '../components/IconWrap';

import { IconDefinition } from '../types';
const CouponCancelledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"id":"图层_1","x":"0","y":"0","enable-background":"new 0 0 78 67","version":"1.1","viewBox":"0 0 78 67","xml:space":"preserve"},"children":[{"tag":"style","attrs":{}},{"tag":"path","attrs":{"id":"Oval","d":"m10.9 51.7 2-1.3c7.2 11 20.7 16.3 33.6 12.8a30.5 30.5 0 0 0 22.6-27.9l2.4.1a32.94 32.94 0 0 1-24.4 30 32.9 32.9 0 0 1-36.2-13.7zM66.5 16l-2 1.3A30.82 30.82 0 0 0 30.6 4.1C17.6 7.6 8.4 19.2 8 32.6l-2.4-.1C6.1 18.1 15.9 5.6 30 1.8 44.1-2 58.8 3.9 66.5 16z","class":"st0"}},{"tag":"path","attrs":{"id":"Oval-6","d":"M22 50.8a.6.6 0 0 1 0-.8c.2-.2.6-.2.8 0 5.7 5.5 13.9 7.7 21.8 5.6a22.6 22.6 0 0 0 16-15.8c.1-.3.4-.5.7-.4.3.1.5.4.4.7-2.3 8.1-8.6 14.4-16.9 16.6-8.1 2.3-16.7 0-22.8-5.9zm33.5-34.4c.2.2.2.6 0 .8-.2.2-.6.2-.8 0-5.7-5.6-14-7.8-21.8-5.7a22.6 22.6 0 0 0-16 15.8c-.1.3-.4.5-.7.4-.3-.1-.5-.4-.4-.7 2.3-8.1 8.6-14.5 16.9-16.7 8.1-2.1 16.8.3 22.8 6.1z","class":"st0"}},{"tag":"path","attrs":{"id":"Rectangle","d":"M1.8 32.3 70.1 14c1.3-.3 2.6.4 2.9 1.7l4.3 16.2c.3 1.3-.4 2.6-1.7 2.9L7.3 53.2c-1.3.3-2.6-.4-2.9-1.7L.1 35.3c-.4-1.3.4-2.6 1.7-3zm.6 2.4 4.3 16.2 68.4-18.3-4.3-16.2L2.4 34.7z","class":"st0"}},{"tag":"path","attrs":{"id":"Cancelled","d":"M17.6 42.9c-2.1.6-3.8-.5-4.5-2.9-.6-2.4.3-4.2 2.4-4.8 1.7-.5 3.4.3 3.9 1.9l-1.5.4c-.4-.8-1.2-1.2-2.1-.9-1.2.3-1.6 1.5-1.2 3 .4 1.5 1.4 2.3 2.6 2 .9-.2 1.4-.9 1.3-1.8l1.5-.4c.3 1.6-.7 3-2.4 3.5zm6.1-3c.7-.2 1.1-.8.9-1.3l-.1-.4-1.1.4c-.6.2-.9.5-.8.9.2.4.6.6 1.1.4zm-.2 1.3c-1.1.3-2-.2-2.3-1.2-.3-1 .3-1.8 1.7-2.3l1.3-.4-.1-.5c-.1-.5-.5-.6-1.1-.5-.5.1-.8.4-.9.8l-1.4.4c-.2-1.1.6-2 2-2.4 1.5-.4 2.5.1 2.8 1.3l1 3.8-1.4.4-.2-.7h-.1c0 .6-.5 1.1-1.3 1.3zm4.6-1.4-1.5-5.6 1.4-.4.2.9h.1c.1-.7.6-1.3 1.5-1.5 1.3-.3 2.2.2 2.5 1.6l1 3.6-1.5.4-.8-3.2c-.2-.8-.7-1.1-1.4-.9-.7.2-1.1.8-.9 1.5l.9 3.2-1.5.4zm10.7-6.7-1.4.4c-.2-.5-.7-.8-1.4-.6-.8.2-1.1.9-.8 2 .3 1.1.9 1.6 1.7 1.4.6-.2.9-.6.9-1.1l1.4-.4c.2 1.3-.5 2.3-1.9 2.7-1.8.5-3-.3-3.5-2.2-.5-1.9.2-3.2 2-3.7 1.4-.3 2.5.2 3 1.5zm3.3-1.9c-.7.2-1 .8-.9 1.5l2.4-.6c-.2-.8-.8-1.1-1.5-.9zm2 2.6 1.4-.4c.1 1.1-.7 2-2.1 2.4-1.7.5-3-.4-3.5-2.2-.5-1.8.2-3.2 1.9-3.7 1.7-.4 2.9.3 3.4 2.1l.1.5-3.9 1v.1c.2.8.9 1.2 1.6 1 .7 0 1.1-.3 1.1-.8zm3.2.9L45.2 27l1.5-.4 2.1 7.8-1.5.3zm3-.8-2.1-7.8 1.5-.4 2.1 7.8-1.5.4zm4.2-6.1c-.7.2-1 .8-.9 1.5l2.4-.6c-.2-.7-.8-1-1.5-.9zm2.1 2.7 1.4-.4c.1 1.1-.7 2-2.1 2.4-1.7.5-3-.4-3.5-2.2-.5-1.8.2-3.2 1.9-3.7 1.7-.4 2.9.3 3.4 2.1l.1.5-3.9 1v.1c.2.8.9 1.2 1.6 1 .7 0 1-.4 1.1-.8zm5.1.5c-1.4.4-2.6-.5-3.1-2.3-.5-1.8.1-3.1 1.5-3.5.8-.2 1.5 0 1.9.5h.1l-.8-3 1.5-.4 2.1 7.8-1.4.4-.2-.9h-.1c-.2.6-.8 1.2-1.5 1.4zm-.8-4.7c-.8.2-1.1 1-.8 2 .3 1 .9 1.5 1.7 1.3.8-.2 1.1-1 .8-2-.2-1-.9-1.5-1.7-1.3z","class":"st0"}}]},"name":"coupon-cancelled"};

const CouponCancelled = (
  props: QeeqIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <QeeqIcon {...props} ref={ref} icon={CouponCancelledSvg} />;

CouponCancelled.displayName = 'CouponCancelled';
export default React.forwardRef<HTMLSpanElement, QeeqIconProps>(CouponCancelled);
