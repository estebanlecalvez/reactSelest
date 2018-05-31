import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LeftMenu from '../components/LeftMenu';
import Profil from '../img/theme/avatar.png';
import Offre from '../components/Offre';

export default class Offres extends Component {

    isConnected() {
        if (typeof localStorage.Authorization != "undefined") {
            return true;
        } else {
            return false;
        }
    }
    render() {
        if(this.isConnected()){
        return (
            <div>
                <div class="row">
                    <div class="col-3 left-menu">
                        <LeftMenu />
                    </div>
                    {/* {this.forOffre(jsx)} */}
                    <div class="col backblue">
                        <p>LISTE DES DEMANDES COMPONENT</p>
                        <p> scss : components/list.scss</p>
                        {/* DEMANDE 1 */}
                        <div class="container-fluid backred demande">
                            <Link to="/offre"><h4>Offre 1</h4></Link>
                            <div class="row">
                                <div class="col">
                                    <p> Description</p>
                                </div>
                                <div class="col">
                                    <p> Demandeur(se)</p>
                                    <img src={Profil} />
                                    <a> Esteban</a>
                                </div>
                            </div>
                        </div>
                        {/* DEMANDE 2 */}
                        <div class="container-fluid backred demande">
                            <h4>Offre 2</h4>
                            <div class="row">
                                <div class="col">
                                    <p> Description</p>
                                </div>
                                <div class="col">
                                    <p> Demandeur(se)</p>
                                    <img src={Profil} />
                                    <a> Joey</a>
                                </div>
                            </div>
                        </div>
                        {/* DEMANDE 3 */}
                        <div class="container-fluid backred demande">
                            <h4>Offre 3</h4>
                            <div class="row">
                                <div class="col">
                                    <p> Description</p>
                                </div>
                                <div class="col">
                                    <p> Demandeur(se)</p>
                                    <img src={Profil} />
                                    <a> David</a>
                                </div>
                            </div>
                        </div>
                        {/* DEMANDE 4 */}
                        <div class="container-fluid backred demande">
                            <h4>Offre 4</h4>
                            <div class="row">
                                <div class="col">
                                    <p> Description</p>
                                </div>
                                <div class="col">
                                    <p> Demandeur(se)</p>
                                    <img src={Profil} />
                                    <a> Maxime</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return <p> Vous devez être connecté. </p>
    }
    }
}