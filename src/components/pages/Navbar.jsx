
import React from 'react'
import { Link } from 'react-router-dom'
import {UserAuth} from '../../context/AuthContext';
function Navbar() {
 
    const {user, logOut} = UserAuth();

    const handleSignOut = async () =>{
        try{

            await logOut()

        }catch(err){
            console.log(err);
        }
    }

  return (
    <div>

        <div className='header' style={{display:'flex',justifyContent:'space-around'}}>
            <h1>Firebase</h1>
            <div className='flex-nav'>
            {user ? ( <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to='/signin'>Sign in</Link>
      )}
 
            </div>
            <br/>
        </div>
      
    </div>
  )
}

export default Navbar
