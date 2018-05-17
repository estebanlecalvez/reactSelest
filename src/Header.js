import React, { Component } from 'react';
import logo from './img/theme/logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="top-header">
                    <div className="left-top">
                        <form className="form-inline my-2 my-lg-0 motor-recherche">
                            <input className="form-control mr-sm-2" placeholder="  Recherche" aria-label="Search" type="search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><span className="txt-recherche">Rechercher</span></button>
                        </form>
                    </div>
                    <div className="right-top">
                        <ul>
                            <li className="nav-item">
                                <a className="nav-link disabled btn-top-right" href="inscription.js">Incription</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled btn-top-right" href="#">Connexion</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <img src={logo} alt className="logo" />
                        </div>
                        <nav className="navbar navbar-expand-lg navbar-success col">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="index.php">Accueil</a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="page_demande.php">Demandes
                              </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Comment ça marche?</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Aide
                              </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}