import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LeftMenu from '../../components/LeftMenu';
import Profil from '../../img/theme/avatar.png';
import Offre from '../../components/Offre';
import { Button } from 'react-bootstrap';


export default class MesOffres extends Component {
    isConnected() {
        if (typeof localStorage.token != "undefined") {
            return true;
        } else {
            return false;
        }
    }
    render() {
        if (this.isConnected()) {
            return (
                <div>
                    <div className="banniere">
                        <div className="banniere-chemin">
                            <p> Accueil/Demandes</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2 left-menu">
                            <LeftMenu />
                        </div>
                        {/* DEMANDE 1 */}
                        <div class="col-8">
                            <div class="row offres-box">
                                <div className="col-sm-2 offres-demandeur">
                                    <p> Demandeur(se)</p>
                                    <img src={Profil} />
                                    <p><b> Maxime</b></p>
                                    <p>Souèts: <b><a id="SouetsUserNb1">-1501</a></b></p>
                                </div>
                                <div class="col-sm-7 offres-text">
                                    <div className="offres-title">
                                        <p>Garde d'enfants</p>
                                    </div>
                                    <div>
                                        <p>Je cherche quelqu'un de disponible sur la semaine du 14/08/2018 au 20/08/2018 pour garder ma fille Lila et mon garçon Diego de 8h30 à 18h</p>
                                    </div>
                                    <Button className="btn btn-success">En savoir plus</Button>
                                </div>
                            </div>

                            <div class="row offres-box">
                                <div className="col-sm-2 offres-demandeur">
                                    <a> Demandeur(se)</a>
                                    <img src={Profil} />
                                    <p><b>Esteban</b></p>
                                    <p>Souèts: <b><a id="SouetsUserNb2">0</a></b></p>
                                </div>
                                <div class="col-sm-7 offres-text">
                                    <div className="offres-title">
                                        <p>Garde d'enfants</p>
                                    </div>
                                    <div>
                                        <p>Je cherche quelqu'un de disponible sur la semaine du 14/08/2018 au 20/08/2018 pour garder ma fille Lila et mon garçon Diego de 8h30 à 18h</p>
                                    </div>
                                    <Button className="btn btn-success">En savoir plus</Button>
                                </div>
                            </div>
                            <div class="row offres-box">
                                <div className="col-sm-2 offres-demandeur">
                                    <a> Demandeur(se)</a>
                                    <img src={Profil} />
                                    <p><b>David</b></p>
                                    <p>Souèts: <b><a id="SouetsUserNb3">500</a></b></p>
                                </div>
                                <div class="col-sm-7 offres-text">
                                    <div className="offres-title">
                                        <p>Garde d'enfants</p>
                                    </div>
                                    <div>
                                        <p>Je cherche quelqu'un de disponible sur la semaine du 14/08/2018 au 20/08/2018 pour garder ma fille Lila et mon garçon Diego de 8h30 à 18h</p>
                                    </div>
                                    <Button className="btn btn-success">En savoir plus</Button>
                                </div>
                            </div>
                            <div class="row offres-box">
                                <div className="col-sm-2 offres-demandeur">
                                    <a> Demandeur(se)</a>
                                    <img src={Profil} />
                                    <p><b>Cecile</b></p>
                                    <p>Souèts: <b><a id="SouetsUserNb4">-1000</a></b></p>
                                </div>
                                <div class="col-sm-7 offres-text">
                                    <div className="offres-title">
                                        <p>Garde d'enfants</p>
                                    </div>
                                    <div>
                                        <p>Je cherche quelqu'un de disponible sur la semaine du 14/08/2018 au 20/08/2018 pour garder ma fille Lila et mon garçon Diego de 8h30 à 18h</p>
                                    </div>
                                    <Button className="btn btn-success">En savoir plus</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <p> Vous devez être connecté. </p>
            );
        }
    }
}