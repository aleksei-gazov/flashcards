import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent,
    ReactNode,
} from 'react'

import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'

import s from './InputText.module.css'
import Button from '../button/Button'


// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
    // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: ReactNode
    spanClassName?: string
}

export const InputText: React.FC<SuperInputTextPropsType> = ({
                                                               onChange,
                                                               onChangeText,
                                                               onKeyPress,
                                                               onEnter,
                                                               error,
                                                               className,
                                                               spanClassName,
                                                               id,

                                                               ...restProps // все остальные пропсы попадут в объект restProps
                                                           }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e) // если есть пропс onChange, то передать ему е (поскольку onChange не обязателен)

        onChangeText?.(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress?.(e)

        onEnter && // если есть пропс onEnter
        e.key === 'Enter' && // и если нажата кнопка Enter
        onEnter() // то вызвать его
    }

    const finalSpanClassName = s.error + (spanClassName ? ' ' + spanClassName : '')
    const finalInputClassName =
        s.input +
        (error ? ' ' + s.errorInput : ' ' + s.superInput) +
        (className ? ' ' + s.className : '') // задача на смешивание классов

    return (
        <div className={s.inputWrapper}>
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
                id="standard-adornment-password"
                type={'text'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            // onClick={handleClickShowPassword}
                            // onMouseDown={handleMouseDownPassword}
                        >
                            <Button />
                        </IconButton>
                    </InputAdornment>
                }
            />
            {/*<SuperButton />*/}
            {/*<input*/}
            {/*  id={id}*/}
            {/*  type={'text'}*/}
            {/*  // onChange={onChangeCallback}*/}
            {/*  // onKeyPress={onKeyPressCallback}*/}
            {/*  className={finalInputClassName}*/}
            {/*  {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
            {/*/>*/}
            <span id={id ? id + '-span' : undefined} className={finalSpanClassName}>
        {error}
      </span>
        </div>
    )
}
