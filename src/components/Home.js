import React, { Component } from 'react';
import annonce from '../img/annonce.png';
import partage from '../img/partage.png';
import objet from '../img/objet.png';
import jardin from '../img/jardin.png';
import service from '../img/service.png';
import local from '../img/local.png';
import group from '../img/group.png';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="img-background">
                    <div className="container">
                        <div className="row">
                            <div className="zone-txt-animation">
                                <ul>
                                    <li>pratique</li>
                                    <li>économique</li>
                                    <li>solidaire</li>
                                </ul>
                            </div>
                            {/* <div className="zone-avantage">
                                <strong className="titre-avantage">Les Avantages</strong>
                                <ul>                                                        <li><p>Lorem ipsum dolor sit amet</p></li>
                                    <li><p>Lorem ipsum dolor sit amet</p></li>
                                    <li><p>Lorem ipsum dolor sit amet</p></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
                <section id="service" className="zone-service">
                    <div className="container">
                        <div className="section">
                            <h2 className="txt-titre-service">ENTRAIDE, SERVICES ET OBJETS ENTRE VOISINS</h2>
                            <h3 className="txt-sous-titre-service">Un seul réseau pour partager et faire des économies</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="btn-service">
                                    <a href="#" className="btn btn-sq  avoid-clicks icone">
                                        <img src={annonce} /><br />
                                        Petites<br />annonces
                  </a>
                                    <a href="#" className="btn btn-sq  avoid-clicks icone">
                                        <img src={partage} /><br />
                                        Auto partage<br />Covoiturage
                  </a>
                                    <a href="#" className="btn btn-sq  avoid-clicks icone">
                                        <img src={objet} /><br />
                                        Prêt<br />d'objets
                  </a>
                                    <a href="#" className="btn btn-sq  avoid-clicks icone">
                                        <img src={jardin} /><br />
                                        Jardins<br />partagés
                  </a>
                                    <a href="#" className="btn btn-sq  avoid-clicks icone">
                                        <img src={service} /><br />
                                        Services<br />de Selest
                  </a>
                                    <a href="#" className="btn btn-sq  avoid-clicks icone-1">
                                        <img src={local} /><br />
                                        Vie<br />locale
                  </a>
                                    <a href="#" className="btn btn-sq  avoid-clicks icone-2">
                                        <img src={group} /><br />
                                        Entraide<br />lien social
                  </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<section className="zone-pub">*/}
                    {/*<div>*/}
                        {/*<h2 className="txt-service-centre">pratique, économique, solidaire</h2>*/}
                    {/*</div>*/}
                {/*</section>*/}
                <section className="zone-marche">
                    <div className="container">
                        <h2>Comment ça marche.</h2>
                        <div className="row">
                            <div class="img-zone-marche-left"></div>
                            <div class="img-zone-marche-centre"></div>
                            <div class="img-zone-marche-right"></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

