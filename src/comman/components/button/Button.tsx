import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import s from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
    widthButton: string | number
    heightButton: string | number
}

const Button: FC<SuperButtonPropsType> = ({
                                              xType,
                                              className,
                                              disabled,
                                              widthButton,
                                              heightButton,

                                              ...restProps
                                          }) => {
    const finalClassName =
        s.button +
        (disabled ? ` ${s.disabled}` : ' ')

    return (
        <button
            disabled={disabled}
            style={{width: `${widthButton}`, height: `${heightButton}` }}
                // className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
                />
                );
            };

export default Button;