import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LeftMenu from '../components/LeftMenu';
import Profil from '../img/theme/avatar.png';
import Demande from '../components/Demande';

export default class Demandes extends Component {

    isConnected() {
        if (typeof localStorage.Authorization != "undefined") {
            return true;
        } else {
            return false;
        }
    }

    requestCategories() {
        fetch("https://selest-vitre.alwaysdata.net/get_categories.php", {
            // 'method' : 'GET',
            'headers': {
                'Authorization': localStorage.authorization,
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                var text = document.getElementById("verifyText");
                if (responseJson.success === 0) {
                    console.log(responseJson.message);
                } else {
                    console.log(responseJson);
                }
            }
            )
    }

    souetColor() {
        for (var i = 0; i < 4; i++) {
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
        console.log(localStorage.Authorization);
        this.requestCategories();
        if (this.isConnected()) {

            this.souetColor();
        }
    }
    render() {
        if (this.isConnected()) {
            return (
                <div>
                    <div class="row">
                        <div class="col-3 left-menu">
                            <LeftMenu />
                        </div>
                        <div class="col backblue">
                            <p>LISTE DES DEMANDES COMPONENT</p>
                            <p> scss : components/list.scss</p>
                            {/* DEMANDE 1 */}
                            <div class="container-fluid backred demande">
                                <Link to="/demande"><h4>Demande 1</h4></Link>
                                <div class="row">
                                    <div class="col">
                                        <p> Description</p>
                                    </div>
                                    <div class="col">
                                        <p> Demandeur(se)</p>
                                        <img src={Profil} />
                                        <a> Esteban</a>
                                        <p>Souèts possédés :  <b><a id="SouetsUserNb0">-300</a></b></p>
                                    </div>
                                </div>
                            </div>
                            {/* DEMANDE 2 */}
                            <div class="container-fluid backred demande">
                                <h4>Demande 2</h4>
                                <div class="row">
                                    <div class="col">
                                        <p> Description</p>
                                    </div>
                                    <div class="col">
                                        <p> Demandeur(se)</p>
                                        <img src={Profil} />
                                        <a> Joey</a>
                                        <p>Souèts possédés :  <b><a id="SouetsUserNb1">0</a></b></p>

                                    </div>
                                </div>
                            </div>
                            {/* DEMANDE 3 */}
                            <div class="container-fluid backred demande">
                                <h4>Demande 3</h4>
                                <div class="row">
                                    <div class="col">
                                        <p> Description</p>
                                    </div>
                                    <div class="col">
                                        <p> Demandeur(se)</p>
                                        <img src={Profil} />
                                        <a> David</a>
                                        <p>Souèts possédés :  <b><a id="SouetsUserNb2">1500</a></b></p>
                                    </div>
                                </div>
                            </div>
                            {/* DEMANDE 4 */}
                            <div class="container-fluid backred demande">
                                <h4>Demande 4</h4>
                                <div class="row">
                                    <div class="col">
                                        <p> Description</p>
                                    </div>
                                    <div class="col">
                                        <p> Demandeur(se)</p>
                                        <img src={Profil} />
                                        <a> Maxime</a>
                                        <p>Souèts possédés :  <b><a id="SouetsUserNb3">-1501</a></b></p>
                                    </div>
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