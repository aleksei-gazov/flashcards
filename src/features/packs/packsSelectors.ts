import {RootState} from 'app/store';

export const selectHeadTablePack = (state: RootState) => state.packs.packListTitle;
export const selectCardPacks = (state: RootState) => state.packs.cardPacks;
export const selectSearchParams = (state: RootState) => state.packs.searchParams;
