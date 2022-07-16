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
            //TODO: מחיקה והוספה להחליף לעדכון
        case 'EDIT_SONG':
             return { ...state, listSong: state.listSong.find((song:SongModel) => song.id == action.payload.id) }
            
        default: return { ...state }

    }
}