import axios from "axios"
import { GET_SONGS_URL } from "../config";
import { SongModel } from "../models/SongModel";
import { addSongDis, deleteSongDis, editSongDis, getSongsDis } from "../store/action/song";



export const addSongThunk = (song: SongModel) => {
    return async (dispatch: any) => {
        try {
         
            const res = await axios.post(GET_SONGS_URL, song, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            dispatch(addSongDis(res.data));
        }
        catch (err) {
            return err;
        }
    }
}
export const getAllSongsThunk = () => {
    return async (dispatch: any) => {
        try {
            const res = await axios.get(GET_SONGS_URL);
            
            dispatch(getSongsDis(res.data));
        }
        catch (err) {
            return err;
        }
    }
}
export const getSongByArtistThunk = (artist: string) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.get(GET_SONGS_URL+`/Artist/${artist}`);
            dispatch(getSongsDis(res.data));
        }
        catch (err) {
            return err;
        }
    }
}
export const deleteSongThunk = (id: string) => {
    return async (dispatch: any) => {
        try {
            await axios.delete(GET_SONGS_URL+`/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            dispatch(deleteSongDis(id));
        }
        catch (err) {
            return err;
        }
    }
}
export const editSongThunk = (song: SongModel, id: string) => {
    return async (dispatch: any) => {
        try {
            await axios.put(GET_SONGS_URL+`/${id}`, song,{
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            dispatch(editSongDis(song));
        }
        catch (err) {
            return err;
        }
    }
}

