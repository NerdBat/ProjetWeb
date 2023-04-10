import React from "react";
import "../Style/User.css"; // importe le fichier CSS de style
import Header from "./Header";

export default function User() {
  return (
    <>
    <Header />
    <div className="user-profile">
      <div className="user-profile__header">
        <h1 className="user-profile__title">Mon profil</h1>
      </div>
      <div className="user-profile__content">
        <div className="user-profile__avatar">
          <img src="https://imgs.search.brave.com/7N_VsNQdlwNqaPvIk9uGKL0D5aQfzC95rX9XWP8xLjk/rs:fit:750:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ2Lzdj/L2Y1LzQ2N2NmNTM5/YjRmMTc1YjllNmJk/YWNkZGVkYmEwZmI4/LmpwZw" alt="Avatar" />
        </div>
        <div className="user-profile__info">
          <h2 className="user-profile__name">John Doe</h2>
          <p className="user-profile__email">johndoe@example.com</p>
          <p className="user-profile__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis suscipit sapien quis molestie.
          </p>
          <button className="user-profile__cta">Modifier le profil</button>
        </div>
      </div>
    </div></>
  );
};
