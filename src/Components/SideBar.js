// @flow strict

import { Avatar } from '@material-ui/core';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './SideBar.css'

function SideBar() {
    const user = useSelector(selectUser)

    const recentItem = (topic)=> (
        <div className='sidebar__recentItem '>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>

        </div>
    )
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://th.bing.com/th/id/R.8abad08d4e1a9628d6321e2b4b816855?rik=JlIHrOB%2bNQgi%2fg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fDownload-Solid-Color-Backgrounds.jpg&ehk=Cjnc2c9xMsUTSx8QyY1tkShliOJOSTUWwNai%2bT54Tzs%3d&risl=&pid=ImgRaw&r=0' alt=''/>
                <Avatar className='sidebar__avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
                 

            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who Viewed You</p>
                    <p className='sidebar_statNumber'>2,3456</p>

                </div>

                <div className='sidebar__stat'>
              
                    <p>Views on post</p>
                    <p className='sidebar_statNumber'>4,3456</p>

              

                </div>

            </div>
            
            <div className='sidebar__buttom'>
                <p>Recent</p>
                {recentItem ("Reactjs") }
                {recentItem ("programing") }
                {recentItem ("software dev") }
            </div>
            
        </div>
    );
};

export default SideBar;