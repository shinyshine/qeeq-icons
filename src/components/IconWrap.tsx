import * as React from 'react';
import cass from 'classnames';

import type { IconDefinition } from '../types';

export type QeeqIconProps = React.HTMLProps<HTMLSpanElement>;
export interface QeeqIconInnerProps extends QeeqIconProps {
    icon: IconDefinition
}



const IconWrap = React.forwardRef<HTMLSpanElement, QeeqIconInnerProps>((props, ref) => {
    const { icon, ...restProps } = props;
    return (
        <span {...restProps} ref={ref}>
            icon name: {icon.name}
        </span>
    )
})

export default IconWrap;

