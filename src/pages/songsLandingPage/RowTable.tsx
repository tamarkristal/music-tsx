import { IconButton, TableCell, TableRow } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { SongModel } from "../../models/SongModel";
import { useNavigate } from "react-router-dom";
import { propRowTable } from "../../types/IProps";

export default function RowTable({propSong ,deleteSong}:propRowTable)  {
    const navigate= useNavigate()
    return (<>  <TableRow>
        <TableCell align="right">
          {propSong.title}
        </TableCell>
        <TableCell align="right">{propSong.artist}</TableCell>
        <TableCell align="right">{propSong.genre}</TableCell>
        <TableCell align="right">{propSong.length}</TableCell>
        <TableCell align="right">{propSong.price}</TableCell>
        <IconButton key='delete-btn' size="large" sx={{ marginRight: 5, background: "rgb(206, 8, 58)", ":hover": { background: "rgb(53 44 173)" } }} onClick={() => { deleteSong(propSong.id?propSong.id:'00')  }}>
          <DeleteIcon />
        </IconButton>
        <IconButton key='edit-btn' size="large" sx={{ margin: 2, background: "rgb(206, 8, 58)", ":hover": { background: "rgb(53 44 173)" } }} onClick={() => { const path = '/songs/edit/' + propSong.id; navigate(path) }}>
          <BorderColorIcon />
        </IconButton>
      </TableRow></>)
}