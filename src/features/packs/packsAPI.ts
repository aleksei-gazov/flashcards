import {AxiosResponse} from 'axios';
import {instance, instanceRec} from 'comman/api/comman.api';
import {ResponsGetPacks, SearchParamsType} from 'features/packs/packsTypes';

export const packsAPI = {
    getPacks: (arg: SearchParamsType) => {
        return instance.get<ResponsGetPacks>('cards/pack', {
            params: {
                packName: arg.packName,
                min: arg.min,
                max: arg.max,
                sortPacks: arg.sortPack,
                page: arg.page,
                pageCount: arg.pageCount,
                user_id: arg.user_id,
            },
        })
    },
    createPacks: (arg: any) => {
        return instance.post<any>('cards/pack ', arg)
    },
    deletePacks: (arg: any) => {
        return instance.delete<any>('cards/pack ', arg)
    },
    updatePacks: (arg: any) => {
        return instance.put<any>('cards/pack ', arg)
    },

}

// return instance.get<GetPacksResponseType>('cards/pack', {
//     params: {
//         packName: params.packName,
//         min: params.min,
//         max: params.max,
//         sortPacks: params.sortPack,
//         page: params.page,
//         pageCount: params.pageCount,
//         user_id: params.user_id,
//     },
// })


