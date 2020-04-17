import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Chat from "./components/Chat";
import ListChat from "../src/components/ListChats";
// import axios from "axios";
function App() {
  const [idChat,setIdChat] = useState("");
  
  const handleChat = (chat)=>{
      console.log(chat);
      setIdChat(chat);
  }
  return (

    <Router>
      <Route path='/' exact>
        <ListChat handleChat={handleChat}/>
      </Route>
      <Route path='/chat'>
        <Chat idChat={idChat}/>
      </Route>
    </Router>
  );
}

export default App;
