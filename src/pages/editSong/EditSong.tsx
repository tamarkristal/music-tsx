
import TextField from '@mui/material/TextField';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import BackButton from '../../components/BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './EditSong.css';
import { SongModel } from '../../models/SongModel';
import { Genre } from '../../models/SongModel'
import { propEdit } from '../../types/IProps';
export default function EditSong({songsProp,editSong}:propEdit): JSX.Element {
  const { id } = useParams();
  const genreArr = ['POP', 'ROCK', 'CLASSICAL', 'RAP'];
  const navigate = useNavigate();
  const [song, setSong] = useState<SongModel>({
    artist: '',
    genre: 'POP',
    length: 0,
    price: 0,
    title: ''
  });
  useEffect(() => {
    let path = `http://localhost:8080/songs/${id}`;
    axios.get(path).then(res => {
      setSong(res.data);
    })
  }, [])

  return (
    <>
      <div className='editSong'>
        <h1>Edit Song</h1>
        <TextField
          label="Artist name"
          type="text"
          variant="filled" sx={{
            backgroundColor: 'rgba(254, 254, 254, 0.877)',
            ":hover": { background: 'rgba(254, 254, 254, 0.877)' }
          }}
          value={song.artist ? song.artist : ''}
          onChange={(val) => { setSong({ ...song, artist: val.target.value }); }}
        />
        <br></br>
        <TextField
          label="Title"
          type="text"
          variant="filled" sx={{
            backgroundColor: 'rgba(254, 254, 254, 0.877)',
            ":hover": { background: 'rgba(254, 254, 254, 0.877)' }
          }}
          value={song.title ? song.title : ''}
          onChange={(val) => { setSong({ ...song, title: val.target.value }); }}
        />
        <br></br>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel >Genre</InputLabel>
          <Select
            sx={{
              color: 'rgb(206, 8, 58)',
              backgroundColor: 'rgba(254, 254, 254, 0.877)',
              ":hover": { background: 'rgba(254, 254, 254, 0.877)' }
            }}
            value={song.genre ? song.genre : ''}
            onChange={(val) => { setSong({ ...song, genre: val.target.value as Genre }); }}>
            {genreArr.map((genre: string) => { return <MenuItem key={genre} value={genre}>{genre}</MenuItem> })}
          </Select>
        </FormControl>
        <br></br>
        <TextField
          label="Price"
          type="number"
          variant="filled" sx={{
            backgroundColor: 'rgba(254, 254, 254, 0.877)',
            ":hover": { background: 'rgba(254, 254, 254, 0.877)' }
          }}
          value={song.price ? song.price : 0}
          onChange={(val) => { setSong({ ...song, price: parseInt(val.target.value) }); }}
        />
        <br></br>
        <TextField
          label="Length"
          type="number"
          variant="filled" sx={{
            backgroundColor: 'rgba(254, 254, 254, 0.877)',
            ":hover": { background: 'rgba(254, 254, 254, 0.877)' }
          }}
          value={song.length ? song.length : 0}
          onChange={(val) => { setSong({ ...song, length: parseFloat(val.target.value) }); }}
        />
        <br></br>
        <Button onClick={() => { editSong(song, id); navigate('/songs') }} variant="outlined" size="small" >Edit Song</Button>
        <br></br>
        <BackButton navigateTo='/'></BackButton>
      </div>
    </>
  );

}