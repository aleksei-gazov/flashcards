import React, {FC} from 'react';
import s from './PacksHeader.module.scss';
import Button from 'comman/components/button/Button';

type Props = {
    title: string
    titleButton: string
    onClickHandler: ()=> void
}


const PaksHeader: FC<Props> = ({title, titleButton, onClickHandler}) => {
    return (
        <div className={s.header}>
            <div className={s.title}>
                <h3>{title}</h3>
            </div>
            <div className={s.button}>
                <Button onClick={onClickHandler}>
                    {titleButton}
                </Button>
            </div>
        </div>
    );
};

export default PaksHeader;