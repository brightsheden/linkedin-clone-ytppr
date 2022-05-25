import React from 'react';

import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import {login, logout, selectUser} from './features/userSlice'
import Login from './Components/Login'
import { auth } from './firebase';
import Widget from './Components/Widget';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //  if user is logged in 
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          photoURL: userAuth.profileUrl,
          displayName: userAuth.displayName,
         
      }))
      }else{
        //user logout
        dispatch(logout())
      }
    })


  },[])

  return (
    <div className="app">
    <Header/>
    {!user ? <Login/> :
    (
      <div className='app__body'  >
        <SideBar/>
        <Feed/>
        <Widget />

      </div>
        
    )}
      
      {/*App Body*/}
      
     
        {/* widget*/}
      {/* Footer */}
    </div>
  );
}

export default App;
