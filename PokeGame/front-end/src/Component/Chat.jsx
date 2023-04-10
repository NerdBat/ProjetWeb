import React from "react";
import "../Style/Chat.css"; // importe le fichier CSS de style
import Header from "./Header";
import {io} from "socket.io-client";

const socket = io('http://localhost:4040');
socket.on('connect',()=>{
    displayMessage("connected with ${socket.id}")
});

const displayMessage = document.getElementById('chatbox');
const message = document.getElementById('messageBox');
const sendMessage = document.getElementById('sendMessage');
const formulaire  = document.getElementById('formulaire');

function afficherUnMessage (formulaire){
  formulaire.addEventListener({
  displayMessage(message) {

    if (message === ""){
        displayMessage.addEventListener(<h1> Rien de neuf ici ! </h1>)
    }else {
        displayMessage.addEventListener(<h3>{message}</h3>)
    }
  }

})
}



socket.emit('custom-events', 10, "Everything every where");
socket.emit('event', "Socket activer");


export default function ChatInterface (){
  return (
    <>
    <Header />
    <div className="chat-interface">
      <div className="chat-interface__header">
        <h1 className="chat-interface__title">chat id = {socket.id}</h1>
      </div>
      <div id="chatbox" className="chat-interface__messages">
      </div>
      <div className="chat-interface__input">
        <form id="formulaire"> 
        <input id="messageBox" type="text" placeholder="Écrire un message..." />
        <button id="sendMessage" className="chat-interface__emoji-btn">
        Envoyer
        </button>
        <button className="chat-interface__send-btn">
          Rejoindre une salle
        </button>
      </form>
      </div>
    </div>
    </>
  );
};
