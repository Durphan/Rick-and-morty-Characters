import { Alert, AlertColor, Typography } from '@mui/material'
import Snackbar from '@mui/material/Snackbar'

type NotificationProps = {
    open:boolean,
    message:string,
    severity:AlertColor|undefined,
    handleClose: () => void
}

export const Notification:React.FC<NotificationProps> = ({open, message, severity, handleClose}) => {



  return (
   <Snackbar anchorOrigin={{vertical:"top", horizontal:"center"}} autoHideDuration={4000} open={open} onClose={handleClose}>
    <Alert onClose={handleClose} severity={severity}><Typography>{message}</Typography></Alert>
   </Snackbar>
  )
  }