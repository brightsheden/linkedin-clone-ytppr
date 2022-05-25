// @flow strict

import * as React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase';
import './login.css'

function Login() {
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [profileUrl, setProfileUrl] = React.useState('')
    const [password, setPassword] = React.useState('')

    const dispatch = useDispatch()

    const loginApp = (e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(
            (userAuth) =>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    photoURL: userAuth.user.profileUrl,
                    displayName: userAuth.user.name
                }))
            }
        ).catch((error)=> alert(error))
    }

    const Register = ()=>{
        if (!name){
            return alert('please enter a full name')
        }
        
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profileUrl,
            }).then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    photoURL: profileUrl,
                    displayName: name
                }))
            }).catch(
                (error)=> alert(error)
            )
        })
    }

    const Login = () =>{
        console.log('Login')
    }
    return (
        <div className="login">
            <img src='https://news.hitb.org/sites/default/files/styles/large/
            public/field/image/500px-linkedIn_Logo.svg__1.png?itok=g_LR0vks' alt=''/>
         
         <form>
             <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder='full name (required if registering)' />
             <input value={profileUrl} onChange={e =>setProfileUrl(e.target.value)} placeholder='profile  url' type='text' />
             <input value={email} onChange={e => setEmail(e.target.value)} placeholder='email' type='email' />
             <input value={password} onChange={e =>setPassword(e.target.value)} placeholder='password' type='password' />
             <button type='submit' onClick={loginApp}>Sign IN</button>

         </form>
         <p>Not a member
             <span className='login__register' onClick={()=> Register()}>Register Now</span>
         </p>
            
        </div>
    );
};

export default Login;