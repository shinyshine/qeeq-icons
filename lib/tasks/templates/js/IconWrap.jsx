import  React from 'react';
import cass from 'classnames';
import { generate } from './generate';
import './style.css';

const IconWrap = React.forwardRef((props, ref) => {
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
            {generate(icon.icon, icon.name)}
        </span>
    )
})

export default IconWrap;

