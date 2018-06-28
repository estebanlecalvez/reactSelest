import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LeftMenu from '../components/LeftMenu';
import Banniere from '../components/Banniere';

// TODO: Transformer les composants Offres et demande 
// en composant liste pour plus d'adaptabilité si possible.
export default class Demande extends Component {
    render() {
        return (
            <div>
                <Banniere path="Demande" />
                <div className="container-fluid">

                    <div className="row">
                        <div class="col-sm-2">
                        </div>
                        <div className="card col-sm-5">
                            <div className="card-body">
                                <h2 className="card-title">Davi Tofi</h2>
                                <strong className="card-text">Description</strong>
                                <p className="card-title">Cherche une personne pour venir garder mes enfants une après midi, ils sont très gentils et calmes.</p>
                            </div>
                            <div className="card-text">
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
                                <ul>
                                    <li>
                                        <Link to="/messages" className="btn-skew-blue">Discuter</Link>
                                    </li>
                                    <li>
                                        <Link to="/profil" className="btn-skew-green">Voir le profil</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}