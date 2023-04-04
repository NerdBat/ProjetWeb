import React from "react";
import "../Style/Chat.css"; // importe le fichier CSS de style
import Header from "./Header";
import {socket}

export default function ChatInterface (){
  return (
    <>
    <Header />
    <div className="chat-interface">
      <div className="chat-interface__header">
        <h1 className="chat-interface__title">Nom de l'utilisateur</h1>
      </div>
      <div className="chat-interface__messages">
        
      </div>
      <div className="chat-interface__input">
        <input type="text" placeholder="Écrire un message..." />
        <button className="chat-interface__emoji-btn">
        Envoyer
        </button>
        <button className="chat-interface__send-btn">
          Rejoindre une salle
        </button>
      </div>
    </div></>
  );
};
