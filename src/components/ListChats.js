import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import axios from "axios";
const ListChats = (props) => {
    const {handleChat} = props;
    const [chats, setChats] = useState([]);
    const [didMount,setMount] = useState(false);

    const pedirChats = () => {
        /*Pide los mensajes y los guarda en un estado */
        axios.get('http://localhost:4000/api/chats/id')
            .then(response => {
                setChats(response.data);
            })
    }
    useEffect(() => {
        if(!didMount){
            console.log('pl')
            pedirChats();
            setMount(true);
        }
    },[didMount,setMount,pedirChats])

    return (
        <div>
            {chats.map(chat =>
                <div key={chat}>
                    <Link to='/chat' onClick={()=>{handleChat(chat)}}><button>CHAT</button></Link>
                </div>)}
        </div>
    );
}

export default ListChats;
