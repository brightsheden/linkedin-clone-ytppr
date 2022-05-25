// @flow strict

import { Avatar } from '@material-ui/core';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './HeaderOption.css'

function HeaderOptions({avatar, Icon, title, onClick}) {
    const user = useSelector(selectUser)
    return (
        <div  className='headerOption'>
            {Icon && <Icon className="HeaderOption__Icon" />}
            {avatar && (<Avatar className='headerOption__Icon' onClick={onClick} >{user?.email[0]}</Avatar>)}
            <h3 className='headerOption__title'>{user?.displayName}</h3>
            
        </div>  
    );
};

export default HeaderOptions;