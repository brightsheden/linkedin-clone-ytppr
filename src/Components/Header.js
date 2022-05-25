// @flow strict

import * as React from 'react';
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import HeaderOptions from './HeaderOptions';
import { BusinessCenter, Chat, Home,  Notifications, SupervisorAccount } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';

function Header() {
    const dispatch=useDispatch()

    const logoutApp = ()=>{
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className='header'>
        
            <div className='header__left'>
             <img src="https://cdn.pixabay.com/photo/2017/08/23/22/59/linked-in-2674741_960_720.png" alt='linked in' />
               
                <div className='header__search' >
                    <SearchIcon/>
                
                    <input type="text"  />


                </div>

            </div>

            <div className='header__right'>
                <HeaderOptions Icon={Home} title={'Home'}/>
                <HeaderOptions Icon={SupervisorAccount} title={'My Network'}/>
                <HeaderOptions Icon={Chat} title={'Messaging'}/>
                <HeaderOptions Icon={BusinessCenter} title={'Jobs'}/>
                <HeaderOptions Icon={Notifications} title={'Notifications'}/>
                <HeaderOptions  avatar={true} title={'Me'} onClick={() => logoutApp()}/>
                {/*avatar="https://cdn.pixabay.com/photo/2017/08/23/22/59/linked-in-2674741_960_720.png"*/}
                
                </div>

            
        </div>
    );
};

export default Header;