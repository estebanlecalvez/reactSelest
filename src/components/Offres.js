import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LeftMenu from '../components/LeftMenu';
import Profil from '../img/theme/avatar_offre.png';
import Offre from '../components/Offre';
import Banniere from '../components/Banniere';
import { Button } from 'react-bootstrap';


export default class Offres extends Component {


    isConnected() {
        if (typeof sessionStorage.token != "undefined") {
            return true;
        } else {
            return false;
        }
    }
    render() {
        if (this.isConnected()) {
            return (
                <div>
                    <Banniere path="Offres" />
                    <div class="row page-offre">
                        <div class="col-sm-2 left-menu zone-left">
                            <LeftMenu />
                        </div>
                        {/* DEMANDE 1 */}
                        <div class="col-sm-8">
                            <div class="row offres-box zone-right">
                                <div className="col-sm-2 offres-demandeur">
                                    <p> Demandeur(se)</p>
                                    <img src={Profil} />
                                    <p><b> Maxime</b></p>
                                    <p>Souèts: <b><a id="SouetsUserNb1">-1501</a></b></p>
                                </div>
                                <div class="col-sm-9 offres-text">
                                    <div className="offres-title">
                                        <p>Garde d'enfants</p>
                                    </div>
                                    <div>
                                        <p>Je cherche quelqu'un de disponible sur la semaine du 14/08/2018 au 20/08/2018 pour garder ma fille Lila et mon garçon Diego de 8h30 à 18h</p>
                                    </div>
                                    <Link to="/offre" className="btn-skew-green">En savoir plus</Link>
                                </div>
                            </div>

                            <div class="row offres-box zone-right">
                                <div className="col-sm-2 offres-demandeur">
                                    <a> Demandeur(se)</a>
                                    <img src={Profil} />
                                    <p><b>Esteban</b></p>
                                    <p>Souèts: <b><a id="SouetsUserNb2">0</a></b></p>
                                </div>
                                <div class="col-sm-9 offres-text">
                                    <div className="offres-title">
                                        <p>Garde d'enfants</p>
                                    </div>
                                    <div>
                                        <p>Je cherche quelqu'un de disponible sur la semaine du 14/08/2018 au 20/08/2018 pour garder ma fille Lila et mon garçon Diego de 8h30 à 18h</p>
                                    </div>
                                    <Link to="/offre" className="btn-skew-green">En savoir plus</Link>
                                </div>
                            </div>
                            <div class="row offres-box zone-right">
                                <div className="col-sm-2 offres-demandeur">
                                    <a> Demandeur(se)</a>
                                    <img src={Profil} />
                                    <p><b>David</b></p>
                                    <p>Souèts: <b><a id="SouetsUserNb3">500</a></b></p>
                                </div>
                                <div class="col-sm-9 offres-text">
                                    <div className="offres-title">
                                        <p>Garde d'enfants</p>
                                    </div>
                                    <div>
                                        <p>Je cherche quelqu'un de disponible sur la semaine du 14/08/2018 au 20/08/2018 pour garder ma fille Lila et mon garçon Diego de 8h30 à 18h</p>
                                    </div>
                                    <Link to="/offre" className="btn-skew-green">En savoir plus</Link>
                                </div>
                            </div>
                            <div class="row offres-box zone-right">
                                <div className="col-sm-2 offres-demandeur">
                                    <a> Demandeur(se)</a>
                                    <img src={Profil} />
                                    <p><b>Cecile</b></p>
                                    <p>Souèts: <b><a id="SouetsUserNb4">-1000</a></b></p>
                                </div>
                                <div class="col-sm-9 offres-text">
                                    <div className="offres-title">
                                        <p>Garde d'enfants</p>
                                    </div>
                                    <div>
                                        <p>Je cherche quelqu'un de disponible sur la semaine du 14/08/2018 au 20/08/2018 pour garder ma fille Lila et mon garçon Diego de 8h30 à 18h</p>
                                    </div>
                                    <Link to="/offre" className="btn-skew-green">En savoir plus</Link>
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