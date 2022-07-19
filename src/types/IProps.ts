import { SongModel } from "../models/SongModel";

export type Props = {
  songsProp: SongModel[];
  getAllSongs:Function;
  deleteSong: Function;
  getSongByArtist: Function;
}
export type propRowTable = {
  propSong: SongModel;
  deleteSong: Function;
}
export type propEdit = {
  editSong: Function;
  songsProp: SongModel[];
}
export type propBackButton = {
  navigateTo: string;
}