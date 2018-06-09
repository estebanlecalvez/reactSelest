import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LeftMenu from '../components/LeftMenu';
import Profil from '../img/theme/avatar.png';
import Demande from '../components/Demande';
import Selest2_0 from '../img/contenu/Actualites/selest2_0.png';
import Banniere from '../components/Banniere';
import { Button } from 'react-bootstrap';


export default class Demandes extends Component {

    isConnected() {
        if (typeof sessionStorage.token != "undefined") {
            return true;
        } else {
            return false;
        }
    }

    requestCategories() {
        /***************** authorization dans le header ***************/
        // fetch("https://selest-vitre.alwaysdata.net/get_categories.php", {
        //     'method': 'GET',
        //     'headers': {
        //         'authorization': localStorage.authorization,
        //     }
        // })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         var text = document.getElementById("verifyText");
        //         //Si la reponse est mauvaise
        //         if (responseJson.success === 0) {
        //             //On affiche le message renvoyé dans le json
        //             console.log(responseJson.message);
        //         } else {
        //             //Sinon, on affiche tout le json
        //             console.log(responseJson);
        //         }
        //     }
        //     )

        /*******authorization en parametre ***********/

        var data = new FormData();
        data.append("token", sessionStorage.token);
        console.log(sessionStorage.token);
        fetch("https://selest-vitre.alwaysdata.net/get_categories.php?token=" + sessionStorage.token, {
            'method': 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //Si la reponse est mauvaise
                if (responseJson.success == 0) {
                    //On affiche le message renvoyé dans le json
                    console.log(responseJson.message);
                } else {
                    //Sinon, on affiche tout le json
                    console.log(responseJson);
                }
            }
            )
    }

    souetColor() {
        for (var i = 1; i < 4; i++) {
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
            this.requestCategories();
            this.souetColor();
        }
    }
    render() {
        if (this.isConnected()) {
            return (
                <div>
                    <Banniere path="Demandes"/>
                    <div class="row">
                        <div class="col-sm-2 left-menu">
                            <LeftMenu />
                        </div>
                        {/* DEMANDE 1 */}
                        <div class="col-8">
                            <div class="row demandes-box">
                                <div className="col-sm-2 demandes-demandeur">
                                    <p> Demandeur(se)</p>
                                    <img src={Profil} />
                                    <p><b> Maxime</b></p>
                                    <p>Souèts: <b><a id="SouetsUserNb1">-1501</a></b></p>
                                </div>
                                <div class="col-sm-7 demandes-text">
                                    <div className="demandes-title">
                                        <p>Garde d'enfants</p>
                                    </div>
                                    <div>
                                        <p>Je cherche quelqu'un de disponible sur la semaine du 14/08/2018 au 20/08/2018 pour garder ma fille Lila et mon garçon Diego de 8h30 à 18h</p>
                                    </div>
                                    <Button className="btn btn-success">En savoir plus</Button>
                                </div>
                            </div>

                            <div class="row demandes-box">
                                <div className="col-sm-2 demandes-demandeur">
                                    <a> Demandeur(se)</a>
                                    <img src={Profil} />
                                    <p><b>Esteban</b></p>
                                    <p>Souèts: <b><a id="SouetsUserNb2">0</a></b></p>
                                </div>
                                <div class="col-sm-7 demandes-text">
                                    <div className="demandes-title">
                                        <p>Garde d'enfants</p>
                                    </div>
                                    <div>
                                        <p>Je cherche quelqu'un de disponible sur la semaine du 14/08/2018 au 20/08/2018 pour garder ma fille Lila et mon garçon Diego de 8h30 à 18h</p>
                                    </div>
                                    <Button className="btn btn-success">En savoir plus</Button>
                                </div>
                            </div>
                            <div class="row demandes-box">
                                <div className="col-sm-2 demandes-demandeur">
                                    <a> Demandeur(se)</a>
                                    <img src={Profil} />
                                    <p><b>David</b></p>
                                    <p>Souèts: <b><a id="SouetsUserNb3">500</a></b></p>
                                </div>
                                <div class="col-sm-7 demandes-text">
                                    <div className="demandes-title">
                                        <p>Garde d'enfants</p>
                                    </div>
                                    <div>
                                        <p>Je cherche quelqu'un de disponible sur la semaine du 14/08/2018 au 20/08/2018 pour garder ma fille Lila et mon garçon Diego de 8h30 à 18h</p>
                                    </div>
                                    <Button className="btn btn-success">En savoir plus</Button>
                                </div>
                            </div>
                            <div class="row demandes-box">
                                <div className="col-sm-2 demandes-demandeur">
                                    <a> Demandeur(se)</a>
                                    <img src={Profil} />
                                    <p><b>Cecile</b></p>
                                    <p>Souèts: <b><a id="SouetsUserNb4">-1000</a></b></p>
                                </div>
                                <div class="col-sm-7 demandes-text">
                                    <div className="demandes-title">
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
                <p> Vous devez être connecté.</p>
            );
        }
    }
}