import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import s from

type DefaultButtonPropsType = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const Button: FC<SuperButtonPropsType> = ({
    xType,
    className,
    disabled,
    ...restProps }) => {
    const finalClassName =
        s.button +
        (disabled ? ` ${s.disabled}` : ' '))

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    );
};

export default Button;