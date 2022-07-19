import Table from '@mui/material/Table';
import AddIcon from '@mui/icons-material/Add';
import TableBody from '@mui/material/TableBody';
import { IconButton } from "@mui/material";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import Welcome from '../../components/Welcome/Welcome';
import './SongLandingPage.css'

import RowTable from './RowTable';
import { Props } from '../../types/IProps';
import { SongModel } from '../../models/SongModel';
export default function SongsLandingPage({songsProp,deleteSong,getAllSongs,getSongByArtist}: Props):JSX.Element {
  const [artist, setArtist] = useState<string>('');
  const [shouldDisplayBackButton, setShouldDisplayBackButton] = useState<boolean>(false);
  const navigate = useNavigate()
  useEffect(() => {
    getAllSongs();
  }, [])

  const tableCellsArr: string[] = ['title', 'artist', 'genre', 'length', 'price']
  return (
    <>
      <Welcome></Welcome>
      <TableContainer className='table' component={Paper} sx={{ marginTop: 20 }} >
        <Table sx={{ minWidth: 650 }} aria-label="caption table" align='center'>
          <TableHead>
            <TableRow className='table' key='titleRow'>
              {tableCellsArr.map((cellData: string) => (
                <TableCell sx={{ color: 'rgb(206, 8, 58)', fontSize: 'x-large' }} key={cellData} align='right'><b>{cellData}</b></TableCell>
              ))}
              <TableCell> <TextField id="filled-basic" label="search by artist" variant="filled" sx={{
                backgroundColor: 'rgba(254, 254, 254, 0.877)',
                ":hover": { background: 'rgba(254, 254, 254, 0.877)' }
              }}
                onChange={(val) => { setArtist(val.target.value) }} />
                <IconButton key='getSongByArtist' sx={{ marginLeft: 2, background: "rgb(206, 8, 58)", ":hover": { background: "rgb(53 44 173)" } }} onClick={() => { getSongByArtist(artist); setShouldDisplayBackButton(true) }}><SearchIcon /></IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{}}>
            {songsProp?.map((song: SongModel) => (
              <RowTable  propSong={song} deleteSong={deleteSong}></RowTable>
            ))}
          </TableBody>
        </Table>
        <IconButton key='add-btn' size="large" onClick={() => { navigate('/songs/add') }} sx={{ background: "rgb(206, 8, 58)", ":hover": { background: "rgb(53 44 173)" }, padding: 2, display: 'flex', margin: 5 }} >
          <AddIcon />
        </IconButton>
      </TableContainer>
      {
        shouldDisplayBackButton && <BackButton navigateTo='/'></BackButton>
      }</>
  );
}
