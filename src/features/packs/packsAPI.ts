import {instance} from 'comman/api/comman.api';
import {CreatePack, DeletePack, ResponsGetPacks, SearchParamsType, UpdatePack} from 'features/packs/packsTypes';

export const packsAPI = {
    getPacks: (arg: SearchParamsType) => {
        console.log(arg)
        console.log("64529b21a9acd92d5ccd75d3")
        return instance.get<ResponsGetPacks>('cards/pack'
            , {
                params: {
                     packName: arg.packName,
                    min: arg.min,
                    max: arg.max,
                    sortPacks: arg.sortPack,
                    page: arg.page,
                    pageCount: arg.pageCount,
                     user_id: arg.user_id,
                },
            }
        )
    },
    createPacks: (arg: CreatePack) => {
        return instance.post<any>('cards/pack ', arg)
    },
    deletePacks: (arg: DeletePack) => {
        return instance.delete<any>(`cards/pack?id=${arg._id}`)
    },
    updatePacks: (arg: UpdatePack) => {
        return instance.put<any>('cards/pack ', arg)
    },

}


