import React from "react";
import GoogleButton from 'react-google-button';
import {UserAuth} from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom';
import { useEffect } from "react";
function Signin() {

  const { googleSignIn ,user } = UserAuth();

  const navigate = useNavigate();

  const handleGoogleSingIn = async() =>{
         try{
          await googleSignIn()

         }catch(err){
          console.log(err)
         }
  }
  

   useEffect(()=>{
    if(user != null){
      navigate('/account')
    }
   },[user])

  return (
    <div>
      <GoogleButton onClick={handleGoogleSingIn}/>
    </div>
  )
}

export default Signin
