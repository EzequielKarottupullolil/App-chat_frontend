import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Chat(props) {
    const [mount,setMount] = useState(Boolean);
    const [texto,setTexto] = useState("");
    const [mensajes,setMensajes] = useState([]);
    const {idChat} = props;

    const pedirMensajes = ()=>{
        /* Pide todos los mensajes pertenecientes chat*/
        axios.get(`http://localhost:4000/api/mensajes/${idChat}`)
        .then(response=>{
            //Guarda los mensajes en el estado
            setMensajes(response.data);
        })
    }

    const textChange = (e)=>{
        /*Actualiza el state de texto */
        const {value} = e.target;
        setTexto(value)   
    }
    const sendMensaje = (e)=>{
        e.preventDefault();
    }
    useEffect(()=>{
        if(!mount){
            pedirMensajes();
            setMount(true);
        }
        const timer = setTimeout(()=>{
            pedirMensajes();
        },1500);
        return () => clearTimeout(timer);
    })
    
    
    return (
        <>
            {mensajes.map(msg=>
                <div key={msg._id}>
                    De:{msg.usuario}<br/>
                    mensaje:{msg.texto}
                </div>)}

                <form onSubmit={()=>{sendMensaje(Event)}}>
                    <input onChange={()=>textChange(Event)} name="texto" type="text"/>
                    <button>Enviar</button>
                </form>
        </>
    );

}


