import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LeftMenu from '../../components/LeftMenu';
import Profil from '../../img/theme/avatar.png';
import Offre from '../../components/Offre';
import { Button } from 'react-bootstrap';
import Maxime from '../../img/profile_picture/offres/homme1.png';
import David from '../../img/profile_picture/offres/homme2.png';
import Esteban from '../../img/profile_picture/offres/homme3.png';
import Cecile from '../../img/profile_picture/offres/femme1.png';
import Banniere from '../../components/Banniere';


export default class MesOffres extends Component {
    isConnected() {
        if (typeof sessionStorage.token != "undefined") {
            return true;
        } else {
            return false;
        }
    }

    souetColor() {
        for (var i = 1; i <= 4; i++) {
            var nbSouetsDOM = document.getElementById("SouetsUserNb" + i);
            var nbSouets = parseInt(nbSouetsDOM.innerText);
            if (nbSouets < -1500) {
                nbSouetsDOM.style.color = 'red';
            } else if (nbSouets < 0) {
                nbSouetsDOM.style.color = 'orange';
            } else if (nbSouets > 500) {
                nbSouetsDOM.style.color = 'green';
            } else if (nbSouets >= 0) {
                nbSouetsDOM.style.color = 'yellow';
            }
        }
    }

    componentDidMount() {
        if (this.isConnected()) {
            this.souetColor();
        }
    }
    render() {
        if (this.isConnected()) {
            return (
                <div>
                    <Banniere path="Mes offres"/>
                    <div class="row page-offre">
                        <div class="col-sm-2 left-menu zone-left">
                            <LeftMenu />
                        </div>
                        {/* DEMANDE 1 */}
                        <div class="col-sm-8">
                            <div class="row offres-box zone-right">
                                <div className="col-sm-2 offres-demandeur">
                                    <p> Demandeur(se)</p>
                                    <div className="profil-picture">
                                        <img src={Maxime} />
                                    </div>
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
                                    <img src={Esteban} />
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
                                    <img src={David} />
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
                                    <img src={Cecile} />
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