import { AxiosResponse } from 'axios';
import {instance, instanceRec} from 'comman/api/comman.api';

export const packsAPI = {
    getPacks: (arg: any) => {
        return instance.post<any>('cards/pack', arg)
    },


}




