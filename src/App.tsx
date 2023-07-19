
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRouter } from './router/router'
import * as React from 'react'
import { NotificationProvider } from './context/notification.context'



export const App: React.FC<{}> = () => {
  return (
    <NotificationProvider>
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
  </NotificationProvider>
  )
 
}

export default App
