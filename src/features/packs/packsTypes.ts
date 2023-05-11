import {boolean, date} from 'yup';


export type GetPacksType = {
//     ?packName=english // не обязательно
//     &min=3 // не обязательно
//     &max=9 // не обязательно
//     &sortPacks=0updated // не обязательно
//     &page=1 // не обязательно
//     &pageCount=4 // не обязательно
//
//     &user_id=5eb543f6bea3ad21480f1ee7
// // чьи колоды не обязательно, или придут все
//
// &block=true // не обязательно
// // если вас кто то забанил. То с помощью
// // данного параметра можно увидеть свои колоды
// // и поправить их или удалить или обжаловать 🙃
}

export type SearchParamsType = {
    packName: string
    user_id: string
    page: number
    pageCount: number
    min: number
    max: number
    sortPack: string
    totalPagesCount: number
    minCardsCount: number
    maxCardsCount: number
}

export type PacksType = {
    _id: string
    user_id:  string
    name:  string
    cardsCount: number
    created: string
    updated: string
}

export type ResponsGetPacks = {
    cardPacks:  PacksType[],
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}


export type CreatePack =  {
    cardsPack: {
        name: string
        deckCover?: string
        private?: boolean
    }
}
export type UpdatePack =  {
    cardsPack: {
        _id: string
        name: string
    }
}

export type DeletePack = {
    _id: string
}


