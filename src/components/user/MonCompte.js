import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import positionLogo from '../../img/contenu/positionLogo.png';
import LeftMenu from '../../components/LeftMenu';
import Photo from '../../img/profile_picture/demandes/homme2.png';
import Cropper from '../../components/Cropper';
const center = {
    marginLeft: "70px"
};
const centerPlus = {
    marginLeft: "150px"
};

export default class MonCompte extends Component {




    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-2 left-col-my-account">
                            <p>Davi Tofi</p>
                            <a><img src={Photo} className="imgMyAccount zoom-hover" /></a>
                            <Cropper buttonLabel="Changer ma photo de profil"></Cropper>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-4 ">
                            <p>Age :<a>26</a></p>
                            <p>Position : <a>Vitré</a><img src={positionLogo} className="small-icon zoom-hover" /></p>
                            <p>Adresse : <a> Ajouter une adresse.</a></p>
                            <p>Changer de mot de passe</p>
                            <div className="card-text">
                                <ul>
                                    <li>
                                        <Link to="/" className="btn-skew-red">Accueil</Link>
                                    </li>
                                </ul>
                            </div>                        </div>
                        <div className="col-4">
                            <h3>A propos de moi</h3>
                            <p>Jeune footballeur venant d'arriver sur Vitré et cherchant à faire des connaissances et aider les autres.</p>

                            <div className="card-text">
                                <ul>
                                    <li>
                                        <Link to="/mes_offres" className="btn-skew-blue">Mes offres</Link>
                                    </li>
                                    <li>
                                        <Link to="/mes_demandes" className="btn-skew-green">Mes demandes</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    {/* CROPPER HERE */}

                    <hr />
                </div>

            </div>
        );
    }
}