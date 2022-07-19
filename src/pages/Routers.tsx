import { Routes, Route, Navigate } from 'react-router-dom'
import SongsLandingPage from './songsLandingPage/SongsLandingPage'
import AddSong from './addSong/AddSong'
import EditSong from './editSong/EditSong'
import { useSelector } from 'react-redux'
import { RootState } from '..'
import  type{ } from 'redux-thunk/extend-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { SongModel } from '../models/SongModel'
import { addSongThunk, deleteSongThunk, editSongThunk, getAllSongsThunk, getSongByArtistThunk } from '../api/songs.api'
import { redurcerSong } from '../store/reducer/song'

export default function Routers() {
  const dispatch = useDispatch();
  const songs: SongModel[] = useSelector<RootState, redurcerSong>((state) => state.songReducer).listSong

  const addNewSong =  (newSong: SongModel) => {
    dispatch(addSongThunk(newSong));
  }
  const editSong =  (values: SongModel, id: string) => {
    dispatch(editSongThunk(values,id ));
  }
  const deleteSong =  (id: string) => {
    dispatch(deleteSongThunk(id));
  }
  const SongsByArtist =  (artist: string) => {
    dispatch(getSongByArtistThunk(artist))
  }
  const getAllSongs =  () => {
    dispatch(getAllSongsThunk())
  }
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='songs'></Navigate>}></Route>
        <Route path='/songs'>
          <Route path='/songs/edit/:id' element={<EditSong songsProp={songs } editSong={editSong}  />}></Route>
          <Route path='/songs/add' element={<AddSong addSongFunc={addNewSong} />}></Route>
          <Route path='/songs' element={<SongsLandingPage getAllSongs={getAllSongs} songsProp={songs}  deleteSong={deleteSong} getSongByArtist={SongsByArtist} />}></Route>
        </Route>
      </Routes>
    </>)
}