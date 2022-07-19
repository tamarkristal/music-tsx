import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { propBackButton } from "../types/IProps";
export default function BackButton({navigateTo}:propBackButton): JSX.Element
{ const navigate= useNavigate();
return (

  <IconButton size="large" sx={{background:"rgb(206, 8, 58)",":hover":{background:"rgb(53 44 173)"}}} onClick={()=>{navigate(navigateTo)}}>
  <ArrowForwardIcon/>
</IconButton>
)
}
