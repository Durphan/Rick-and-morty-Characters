import * as React from "react"
import { Notification } from "../components/notifications";
import { AlertColor } from "@mui/material";

type ContextProps = {
    getError:(msg:string) => void
    getSuccess:(msg:string) => void

}


const NotificationContext = React.createContext<ContextProps | null>(null);

export const NotificationProvider:React.FC<{children:React.JSX.Element}> = ({children}) => {

    const [message, setMessage] = React.useState("")
    const [open, setOpen] = React.useState(false)
    const [severity, setSeverity] = React.useState<AlertColor | undefined>(undefined)

    const handleClose = () =>{
        setOpen(false)
    }

    const getError = (msg:string) =>{
        setOpen(true)
        setMessage(msg)
        setSeverity("error")
    }

    const getSuccess = (msg:string) =>{
        setOpen(true)
        setMessage(msg)
        setSeverity("success")
    }


    const value = {
        getError,
        getSuccess
    }

    return(
        <NotificationContext.Provider value={value}>
            <Notification 
            handleClose={handleClose} 
            open={open} 
            severity={severity} 
            message={message}/>
                {children}
        </NotificationContext.Provider>
    )
}

export const UseNotification = () =>{
    const context = React.useContext(NotificationContext)
    if(!context) throw new Error("No existe contexto")
    return context;
}