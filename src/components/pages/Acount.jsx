import React from 'react'
 
import {UserAuth} from '../../context/AuthContext';


function Acount() {
  const {logOut , user} = UserAuth();

  const handleSignOut = async () =>{
    try{
      await logOut();
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div>
        <p>Welcome, {user.displayName}</p>
     <button onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default Acount
