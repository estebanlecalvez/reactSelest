import React, { Component } from 'react';

export default class Demande extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row links">
                    <div className="col-sm-3">
                        <h2>Demandes d'objets</h2>
                        <hr className="my-2" />
                        <nav className="border border-secondary jumbotron">
                            <ul>
                                <li>
                                    <a>Offres</a>
                                </li>
                                <li>
                                    <a>Dernières offres</a>
                                </li>
                                <li>
                                    <a>Catégories offres</a>
                                </li>
                                <li>
                                    <a>Catégories les plus utilisés</a>
                                </li>
                                <li>
                                    <a>Poster une offre</a>
                                </li>
                                <li>
                                    <a>Dernières demandes</a>
                                </li>
                                <li>
                                    <a>Catégories des demandes</a>
                                </li>
                                <li>
                                    <a>Catégories les plus utilisés</a>
                                </li>
                                <li>
                                    <a>Poster une demande</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="card bottom_shadowed_box col-sm-5">
                        <div className="card-body">
                            <h2 className="card-title">Emeline La Fondue</h2>
                            <strong className="card-text">Description</strong>
                            <p className="card-title">Cherche une personne pour venir m'aider à garder les chiens des voisins, ils sont très gentils, et en manque d'amuuur, pliz hailp</p>
                        </div>
                        <div >
                            <p className="lead">Categorie :
          <span>
                                    Multiple
          </span>
                            </p>
                            <p className="lead">Souèts :
          <span>
                                    120(2heures)
          </span>
                            </p>
                            <p className="lead">Date souhaitée :
          <span>
                                    12/07/2018
          </span>
                            </p>
                            <button type="button" className="btn btn-success">Accepter</button>
                        </div>
                    </div>
                    <div className="card bottom_shadowed_box col-sm-3">
                        <img className="card-img-top" src="img/theme/profil.png" alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-title">User Name</p>
                            <p className="card-text">Description</p>
                            <p className="card-body">Age : 29</p>
                            <a href="#" className="btn btn-primary">Voir le profil</a>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}