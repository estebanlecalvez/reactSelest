import React, { Component } from 'react';
import FbLogo from '../img/theme/fb.png';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-selest">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <h3>A propos de Sel’est</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
                            </div>
                            <div className="col-sm-4 menu-footer">
                                <ul className="list2">
                                    <li><a title="réseau social" href="#">Demandes</a></li>
                                    <li><a title="comment utiliser" href="#">Offres</a></li>
                                    <li><a title="confidentialité des données" href="#">Comment ça marche?</a></li>
                                    <li><a title="contact" href="#">Aide</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4">
                                <h3>Contactez-Nous</h3>
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
                    <p>Réalisé par group MyDigitalSchool</p>
                </div>
            </div>
        );
    }
}

