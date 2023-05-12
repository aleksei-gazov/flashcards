import React, {FC, useEffect, useState} from 'react';

type SliderInputType = {
    valueSlider: number
}

const SliderInput: FC<SliderInputType> = ({valueSlider}) => {
    const [value, setValue] = useState(0)

    useEffect(()=> {
        setValue(valueSlider)
    }, [])


    return (
        <div>
            <input
                type={'number'}
                // onChange={onChangeHandler}
                value={value}
            />
        </div>
    );
};

export default SliderInput;