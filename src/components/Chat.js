import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Chat(props) {
    const [texto, setTexto] = useState("");
    const [mensajes, setMensaje] = useState([]);


    const pedirMensajes = () => {
        axios.get('http://localhost:4000/api/mensajes/juan')
            .then(res => {
                setMensaje(res.data.mensajes);
            });
    }

    useEffect(() => {
        pedirMensajes();
        
    })
    
    const enviarMensaje = (e) => {
        e.preventDefault()
        axios({
            method: "post",
            url: "http://localhost:4000/api/mensajes",
            data: {
                de: "ezequiel",
                para: "juan",
                texto: texto,
            }
        })
    }
    const handleChange = (e) => {
        const { value } = e.target
        setTexto(value)
    }
    //document.getElementById('final').scrollIntoView(true)
    return (
        <>
            <div className='messagesBox'>
                {mensajes.map(msg =>
                    <p key={msg._id}>
                        <label>De:{msg.de}</label><br />
                        <label>Mensaje: {msg.texto}</label><br />
                    ==========================<br />
                    </p>
                )
                }
                <span id='final'></span>
            </div>
            <form onSubmit={enviarMensaje}>
                <input type='text' onChange={handleChange} name='texto' />
                <button type='submit'>Enviar</button>
            </form>
            
        </>
    );
    
}


