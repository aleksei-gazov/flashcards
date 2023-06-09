import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'

import editIcon from './editIcon.svg'
import s from './EditableSpan.module.css'
import {InputText} from 'comman/components/inputText/InputText';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = Omit<DefaultInputPropsType, 'type'> & {
    // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    onSubmitHandler?: (value: string) => void
    spanProps?: DefaultSpanPropsType & { defaultText?: string } // пропсы для спана
}

export const EditableSpan: React.FC<SuperEditableSpanType> = ({
                                                                  autoFocus,
                                                                  onBlur,
                                                                  onEnter,
                                                                  spanProps,
                                                                  onSubmitHandler,

                                                                  ...restProps // все остальные пропсы попадут в объект restProps
                                                              }) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, defaultText, ...restSpanProps} = spanProps || {}

    const onClickCallback = (value: string) => {
        if (onSubmitHandler) {
            onSubmitHandler(value)
            setEditMode(!editMode)
        }
    }

    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        // включить editMode при двойном клике // делают студенты
        setEditMode(!editMode)
        onDoubleClick?.(e)
    }

    const spanClassName = s.span + (className ? ' ' + className : '')

    return (
        <>
            {editMode ? (
                <InputText
                    autoFocus={autoFocus || true}
                    onClickHandler={onClickCallback}
                    className={s.input}
                    valueInput={restProps.value as string}
                    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)

                />
            ) : (
                <div className={s.spanBlock}>
          <span className={spanClassName} {...restSpanProps}>
            {/*если нет захардкодженного текста для спана, то значение инпута*/}

              {children || restProps.value || defaultText}
          </span>
                    <img
                        onDoubleClick={onDoubleClickCallBack}
                        src={editIcon}
                        className={s.pen}
                        alt={'edit'}
                    />
                </div>
            )}
        </>
    )
}

