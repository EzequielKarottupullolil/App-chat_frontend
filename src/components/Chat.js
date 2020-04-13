import React, { useState, Component, useEffect } from 'react';
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


    return (
        <>
            <div className='chat-body'>
                {mensajes.map(msg =>
                    <p key={msg._id}>
                        <label>De:{msg.de}</label><br />
                        <label>Mensaje: {msg.texto}</label><br />
                    ==========================<br />
                    </p>
                )}
            </div>
            <form onSubmit={enviarMensaje}>
                <input type='text' onChange={handleChange} name='texto' />
                <button type='submit'>Enviar</button>
            </form>
        </>
    );
}


