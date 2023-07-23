import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRouter } from './router/router'
import { NotificationProvider } from './context/notification.context'



export const App = () => {
  return (
    <NotificationProvider>
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
  </NotificationProvider>
  )
}

export default App
