import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent,
    ReactNode, useEffect, useState,
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
    onEnter?: (value: string) => void
    onClickHandler?: (value: string) => void
    error?: ReactNode
    spanClassName?: string
    valueInput: string
}

export const InputText: React.FC<SuperInputTextPropsType> = ({
                                                                 onChange,
                                                                 onKeyPress,
                                                                 onEnter,
                                                                 onClickHandler,
                                                                 error,
                                                                 className,
                                                                 spanClassName,
                                                                 id,
                                                                 valueInput,

                                                                 ...restProps // все остальные пропсы попадут в объект restProps
                                                             }) => {

    const [value, setValue] = useState('')


    useEffect(()=> {
        setValue(valueInput)
    }, [valueInput])



    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
 setValue(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        // если есть пропс onEnter
        e.key === 'Enter' &&  onClickHandler &&// и если нажата кнопка Enter
        onClickHandler(value) // то вызвать его

    }
    const onClickHandlers = () => {
        if (onClickHandler) {
            onClickHandler(value)
        }
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
                onChange={onChangeCallback}
                onKeyDown={onKeyPressCallback}
                value={value}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            // onClick={handleClickShowPassword}
                            // onMouseDown={handleMouseDownPassword}
                        >
                            <Button onClick={onClickHandlers} widthButton={'52px'} heightButton={'24px'}>
                                SAVE
                            </Button>
                        </IconButton>
                    </InputAdornment>
                }
            />
            <span id={id ? id + '-span' : undefined} className={finalSpanClassName}>
        {error}
      </span>
        </div>
    )
}
