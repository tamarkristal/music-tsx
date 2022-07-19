import { SongModel } from "../../models/SongModel";
export interface redurcerSong {
    listSong: SongModel[];
}
const initialization: redurcerSong = {
    listSong: []

}
type Action =
    | { type: "ADD_SONG", payload: {newSong:SongModel }}
    | { type: "DELETE_SONG", payload: String }
    | { type: "EDIT_SONG", payload: SongModel }
    | { type: "GET_SONGS", payload: SongModel[] }

export const songReducer = (state:redurcerSong = initialization, action: Action) => {
    switch (action.type) {
        case 'GET_SONGS':
            return { ...state, listSong: [...action.payload] }
        case 'ADD_SONG':
            return { ...state, listSong: [...state.listSong, action.payload] }
        case 'DELETE_SONG':
            return { ...state, listSong: state.listSong.filter((song: SongModel) => song.id !== action.payload) }
        case 'EDIT_SONG':
            {
            let index:number=state.listSong.findIndex((song: SongModel) => song.id == action.payload.id);
            let arr:any=state.listSong;
            arr[index]={...action.payload}
            return {...state,listSong:state.listSong=[...arr]}}        
        default: return { ...state }

    }
}