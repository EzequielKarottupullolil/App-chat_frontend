import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import axios from "axios";
const ListChats = (props) => {
    const {handleChat} = props;
    const [chats, setChats] = useState([]);
    const [didMount,setMount] = useState(Boolean);

    const pedirChats = () => {
        /*Pide los mensajes y los guarda en un estado */
        axios.get('http://localhost:4000/api/chats')
            .then(response => {
                setChats(response.data);
            })
    }
    useEffect(() => {
        if(!didMount){
            pedirChats();
            setMount(true);
            console.log('ok')
        }
    },[didMount,setMount])
    return (
        <div>
            {chats.map(chat =>
                <div key={chat._id}>
                    <Link to='/chat' onClick={()=>{handleChat(chat._id)}}>CHAT</Link>
                </div>)}
            <h1>HOLA</h1>
        </div>
    );
}

export default ListChats;
