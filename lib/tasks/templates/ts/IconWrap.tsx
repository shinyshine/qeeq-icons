import * as React from 'react';
import cass from 'classnames';
import { generate } from './generate';
import type { IconDefinition, AbstractNode } from './types';
import './style.css';

export type QeeqIconProps = React.HTMLProps<HTMLSpanElement>;
export interface QeeqIconInnerProps extends QeeqIconProps {
    icon: IconDefinition
}

interface IconComponent<Props> extends React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSpanElement>> {}


const IconWrap = React.forwardRef<HTMLSpanElement, QeeqIconInnerProps>((props, ref) => {
    const { 
        icon,
        className,
        onClick,
        ...restProps 
    } = props;

    const prefixCls = 'qeeqicon';

    const mergedClass = cass(
        prefixCls,
        {
            [`${prefixCls}-${icon.name}`]: !!icon.name,
        },
        className
    )
    return (
        <span 
            {...restProps} 
            ref={ref}
            onClick={onClick}
            className={mergedClass}
        >
            {generate(icon.icon as AbstractNode, icon.name)}
        </span>
    )
}) as IconComponent<QeeqIconInnerProps>

export default IconWrap;

