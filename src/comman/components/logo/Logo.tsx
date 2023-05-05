import React, {FC} from 'react';
import s from 'features/header/Header.module.scss';

type LogoType = {
    logoImg: string
}

export const Logo: FC<LogoType> = ({logoImg}) => {
    return (
        <div className={s.logo}>
            <a
                className={s.logoLink}
                href={'https://github.com/aleksei-gazov/cardify'}
                target={'_blank'}
                rel="noreferrer"
            >
                <img src={logoImg} alt="logo it-incubator" className={s.logo} />
            </a>
        </div>
    );
};
