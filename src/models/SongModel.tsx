
export  type Genre='POP'| 'ROCK'|'CLASSICAL'| 'RAP'
export interface SongModel  {
    id?: String,
    title: String,
    artist: String,
    genre: Genre,
    length: number,
    price: number

};