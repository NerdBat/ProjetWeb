import React from 'react';
import Header from './Header';
import "../Style/Home.css";


export default function Home(){
  return (
    <>
    <Header />
    <div className="home">
      <div className="home__hero">
        <h1 className="home__title">PokemonGameOnline</h1>
        <p className="home__description">
        Le jeu de stratégie en ligne
        </p>
        <button className="home__cta">Commencer l'aventure !</button>
      </div>
      <div className="home__features">
        <div className="home__feature">
          <i className="fas fa-truck-moving"></i>
          <h3 className="home__feature-title">Quel pokemon ?</h3>
          <p className="home__feature-description">
           Pour le moment seul les pokemon de la première génération sont disponible dans le jeu mais des updates seront frequentes jusqu'a atteindre la 9ème génération.
          </p>
        </div>
        <div className="home__feature">
          <i className="fas fa-shield-alt"></i>
          <h3 className="home__feature-title">Comment obtenir des pokemon ?</h3>
          <p className="home__feature-description">
            En gagnant des combas vous gagner des pokeSurprise qui en fonction de leur rareté peuvent vous donner des pokemon plus ou moins rare et precieux. Il est meme possible d'obtenir leur forme chromatique.
          </p>
        </div>
        <div className="home__feature">
          <i className="fas fa-headset"></i>
          <h3 className="home__feature-title">Y'a t'il des CT ?</h3>
          <p className="home__feature-description">
           Oui il existe des CT d'attaque disponible via le pass de combat ou via la PokeBoutique.
          </p>
        </div>
      </div>
    </div>
  
    </>
  );
};

