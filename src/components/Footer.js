import React, { Component } from 'react';
import FbLogo from '../img/theme/fb.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Aide from '../components/Aide';
import HowItWorks from '../components/HowItWorks';
import Charte from '../pdf/charte.pdf';
import ReglementInterieur from '../pdf/reglement_interieur.pdf';

export default class Footer extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="footer-selest">
                        <div className="footer-header"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h3 className="zoom-hover">A propos du Sel’est 2.0</h3>
                                    <p>Le Sel'est Vitré a pour finalité de proposer des services à la personne et de valoriser l’entraide sociale entre individus. </p>
                                    <p>Elle dispose d’une monnaie virtuelle fictive – Souèt – unique.</p>
                                    <p>La gestion des souèts est facilitée.Le but de ce site est de mettre en lumière l'association en augmentant leur notoriété.</p>
                                    <p>La digitalisation de cette activité est utile en vue des mutations technologiques et de l’évolution des attentes et demandes des utilisateurs.</p>
                                </div>
                                <div className="col-sm-3 menu">
                                    <ul className="links">
                                        <li><a title="réseau social" href="https://www.facebook.com/selest35/">Facebook</a></li>
                                        <li><Link to="/comment_ça_marche"><a title="comment utiliser">Comment ça marche?</a></Link></li>
                                        <li><a href={Charte}>Charte</a></li>
                                        <li><a href={ReglementInterieur}>Reglement interieur</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-3">
                                    <h3 className="zoom-hover">Contactez-Nous</h3>
                                    <p> Tel : 0987654321<br />
                                        Mail : selest@gmail.com<br />
                                        Adresse : Bretagne, Vitré</p>
                                    <div className="reseaux-sociaux-selest">
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com/selest35/" ><img src={FbLogo} className="small-icon zoom-hover" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pied-page">
                        <p>Réalisé par MyDigitalSchool</p>
                    </div>
                    <Route path="/comment_ca_marche" component={HowItWorks} />
                </div>
            </Router>
        );
    }
}

