import React, { useState, useEffect } from 'react';
import axios from "axios";
const ListChats = () => {
    const [chats, setChats] = useState([]);
    const pedirChats = () => {
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
                    <a href={`http://localhost:4000/api/mensajes/${chat._id}`}>CHAT</a>
                </div>)}
            <h1>HOLA</h1>
        </div>
    );
}

export default ListChats;
