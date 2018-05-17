import React, { Component } from 'react';

export default class Demandes extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row links">
                    <div className="col-sm-3 zone-left">
                        <h2>Demandes d'objets</h2>
                        <hr className="my-2" />
                        <nav>
                            <ul>
                                <li className>
                                    <a href>Offres</a>
                                </li>
                                <li className>
                                    <a href>Dernières offres</a>
                                </li>
                                <li className>
                                    <a href>Catégories offres</a>
                                </li>
                                <li className>
                                    <a href>Catégories les plus utilisés</a>
                                </li>
                                <li className>
                                    <a href>Poster une offre</a>
                                </li>
                                <li className>
                                    <a href>Dernières demandes</a>
                                </li>
                                <li className>
                                    <a href>Catégories des demandes</a>
                                </li>
                                <li className>
                                    <a href>Catégories les plus utilisés</a>
                                </li>
                                <li className>
                                    <a href>Poster une demande</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-sm-5 zone-center">
                        <div className="card-body">
                            <h2 className="card-title">Emeline La Fondue</h2>
                            <strong className="card-text">Description</strong>
                            <p className="card-title">Cherche une personne pour venir m'aider à garder les chiens des voisins, ils sont très gentils, et en manque d'amuuur, pliz hailp</p>
                        </div>
                        <div className="txt-categorie">
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
                    <div className="col-sm-4 zone-right">
                        <img className src="img/theme/profil.png" alt="Card image cap" />
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