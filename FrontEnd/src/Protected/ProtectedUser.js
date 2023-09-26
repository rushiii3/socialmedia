import {useSelector} from 'react-redux';
import { Navigate } from "react-router-dom";

const ProtectedUser = ({ children }) => {
  const {loading,isAuthenticated,user} = useSelector((state)=>state.user);
  if(loading===false){
    if(!isAuthenticated){
        return <Navigate to="/login" replace />;
    }else{
        return children;
    }
  }
}

export default ProtectedUser
