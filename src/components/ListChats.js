import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom"
import axios from "axios";
const ListChats = (props) => {
    const {handleChat} = props;
    let history = useHistory();
    const [chats, setChats] = useState([]);
    const pedirChats = () => {
        /*Pide los mensajes y los guarda en un estado */
        axios.get('http://localhost:4000/api/chats')
            .then(response => {
                setChats(response.data);
            })
    }
    useEffect(() => {
        pedirChats();
    })
    return (
        <div>
            {chats.map(chat =>
                <div key={chat._id}>
                    <button onClick={()=>handleChat(chat._id)}>CHAT</button>
                </div>)}
            <h1>HOLA</h1>
        </div>
    );
}

export default ListChats;
