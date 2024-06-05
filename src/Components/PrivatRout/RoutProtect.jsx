import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider';

function RoutProtect({children}) {
   const {user} = useContext(AuthContext);

    if(user)
        return children;
  return (
    <>
    
    </>
  )
}

export default RoutProtect