// @flow strict

import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons';
import  React,{useEffect,useState} from 'react';
import { db } from '../firebase';
import './feed.css'
import InputOptions from './InputOptions';
import Post from './Post';
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from "react-flip-move";

function Feed() {
    const [posts,setPost] =  useState([])
    const [input,setInput] = useState('')

    const user = useSelector(selectUser)

    
    useEffect(()=>{
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
            setPost(snapshot.docs.map(doc => ( {
                id: doc.id,
                data: doc.data()
            }
              

             ) ))
        ))
    },[db])

    const sendPost = (e) => {
        e.preventDefault();
          
        db.collection('posts').add({
            name:user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.email[0],
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        }) 

        setInput('')

        

    }

    

   
    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <Create/>
                    <form>
                        <input type='text' value={input} onChange={e => setInput(e.target.value)} />
                        <button type='submit' onClick={sendPost}>send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOptions Icon={Image} title='photos' color='#7005F9' />
                    <InputOptions Icon={Subscriptions} title='video' color='#E7A33E' />
                    <InputOptions Icon={EventNote} title='Event' color='#C0CBCD' />
                    <InputOptions Icon={CalendarViewDay} title='write article' color='#7FC1SE' />

                </div>
            </div>

            <FlipMove>
            {posts?.map(({id, data: {name,description,message,photoUrl}}) => (
                <Post key={id} name={name} description={description} message={message} />
            )
            
            )}

            </FlipMove>

           
           
            
  
        </div>
    );
};

export default Feed;