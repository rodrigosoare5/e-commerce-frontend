import { Navigate, Outlet } from 'react-router-dom'

export const RouterProtected = ({auth, setAuth}) => {
  return (
    auth ? <Outlet context={[auth, setAuth]}/> : <Navigate to='/login'/>
  )
} 
