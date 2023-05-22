import React, { FC } from 'react';
type Props = {
    typeProps: string
    value: number | string
}
const Input: FC<Props> = ({typeProps,value }) => {
    return (
        <input
            style={{width: '36px', height: '36px', textAlign: 'center', borderRadius: '5px'}}
            type={typeProps}
            value={value}
        />
    );
};

export default Input;