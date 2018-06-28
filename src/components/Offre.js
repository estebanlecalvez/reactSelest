import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LeftMenu from '../components/LeftMenu';
import Banniere from '../components/Banniere';
import Photo from '../img/profile_picture/demandes/homme2.png';



export default class Offre extends Component {
    render() {
        return (
            <div>
                <Banniere path="Offre" />
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-sm-2">
                        </div>
                        <div className="card col-sm-5">
                            <div className="card-body">
                                <h2 className="card-title">Maxime</h2>
                                <strong className="card-text">Description</strong>
                                <p className="card-title">Cherche une personne pour venir m'aider à garder les chiens des voisins, ils sont très gentils, et en manque d'amuuur, pliz hailp</p>
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

                                        <Link to="/messages-offres" className="btn-skew-blue">Discuter</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card bottom_shadowed_box col-sm-3">
                        <a><img src={Photo} className="rounded-photo medium-photo center-image"/></a>
                            <div className="card-text">
                                <p className="card-title"><b>Maxime</b></p>
                                <p className="card-text">Jeune footballeur venant d'arriver sur Vitré et cherchant à faire des connaissances et aider les autres.</p>
                                <p className="card-body">Age : 26</p>
                                <ul>
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