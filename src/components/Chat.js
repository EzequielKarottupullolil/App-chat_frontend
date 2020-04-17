import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Chat(props) {
    const [mount, setMount] = useState(false);
    const [texto, setTexto] = useState("");
    const [mensajes, setMensajes] = useState([]);
    const { idChat } = props;
    
    const pedirMensajes = () => {
        /* Pide todos los mensajes pertenecientes chat*/
        axios.get(`http://localhost:4000/api/mensajes/${idChat}`)
            .then(response => {
                //Guarda los mensajes en el estado
                setMensajes(response.data);
                //Baja el scroll
                var final = document.getElementById('final');
                final.scrollIntoView(false)
            })
    };

    const updateText = (e) => {
        /*Actualiza el state de texto */
        const { value } = e.target;
        setTexto(value)
    }

    const sendMensaje = async (e) => {
        /*Envia un mensaje */
        console.log("hola?")
        e.preventDefault();
        //Envia el mensaje a la api
        await axios({
            url: `http://localhost:4000/api/mensajes/${idChat}`,
            method: "post",
            data: { texto }
        })
            .then(() => {
                
                //Recarga los mensajes
                pedirMensajes()
                //Vacia el input
                var inputTexto = document.getElementById('texto');
                inputTexto.value = ""
            });
    }

    useEffect(() => {
        console.log(idChat);
        if (!mount) {
            pedirMensajes();
            setMount(true);
        }
    }, [mount]);


    return (
        <center>
            <div className='chat-box'>
                {mensajes.map(msg =>
                    <div key={msg._id}>
                        De:{msg.usuario}<br />
                    mensaje:{msg.texto}<br />
                    </div>)}
                <span id='final'></span>
            </div>
            <form onSubmit={sendMensaje}>
                <input onChange={updateText} name="texto" type="text" id="texto" />
                <button type='submit'>Enviar mensaje</button>
            </form>
        </center>
    );

}


