import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import FbLogo from '../img/theme/fb.png';
import Messagerie from '../components/Messagerie';
import Inscription from '../components/Inscription';
import Connexion from '../components/Connexion';
import Demandes from '../components/Demandes';
import Demande from '../components/Demande';
import Offres from '../components/Offres';
import Offre from '../components/Offre';
import About from '../components/About';
import Faq from '../components/Faq';
import Aide from '../components/Aide';
import Profil from '../components/OthersProfile';
import logo from '../img/theme/logo.png';
import OthersProfile from '../components/OthersProfile';
import HowItWorks from '../components/HowItWorks';
import LogoutButton from '../components/LogoutButton';
import MonCompte from '../components/MonCompte';
import profilImg from '../img/contenu/photoFemme.jpg';

export default class Header extends Component {

    isConnected() {
        if (typeof localStorage.Authorization != "undefined") {
            return true;
        } else {
            return false;
        }
    }

    render() {
        if (this.isConnected()) {
            return (
                <Router>
                    <div className="header">
                        <div className="top-header">
                            <div className="left-top">
                                <form className="form-inline my-2 my-lg-0 motor-recherche">
                                    <input className="form-control mr-sm-2" placeholder="  Recherche" aria-label="Search" type="search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><span className="txt-recherche">Rechercher</span></button>
                                </form>
                            </div>
                            <div className="right-top" >
                                <ul>
                                    <li>
                                        <div class="dropdown">
                                            <a><img src={profilImg} className="imgHeader" /></a>
                                            <div class="dropdown-content">
                                                <Link to="mon_compte"><p>Editer mon profil.</p></Link>
                                                <Link to="mon_compte"><p>Voir mes demandes.</p></Link>
                                                <Link to="mon_compte"><p>Voir mes offres.</p></Link>
                                                <p>Mes souets : <a id="souetUser">12</a></p>
                                                <Link to="parametre_compte"><p>Paramètres</p></Link>
                                                <hr />
                                                <LogoutButton buttonLabel="Deconnexion" />
                                            </div>
                                        </div>
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
                                                <Link to="/"><a className="nav-link">Accueil</a></Link>
                                            </li>
                                            <li className="nav-item active">
                                                <Link to="/demandes"><a className="nav-link">Demandes</a></Link>
                                            </li>
                                            <li className="nav-item active">
                                                <Link to="/offres"><a className="nav-link">Offres</a></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/comment_ca_marche"><a className="nav-link">Comment ça marche?</a></Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="/aide"><a className="nav-link">Aide</a></Link>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://www.facebook.com/selest35/" ><img src={FbLogo} style={{ width: '10%' }} /></a>
                                            </li>

                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <Route exact path="/" component={Home} />
                        <Route path="/inscription" component={Inscription} />
                        <Route path="/faq" component={Faq} />
                        <Route path="/connexion" component={Connexion} />
                        <Route path="/demandes" component={Demandes} />
                        <Route path="/apropos" component={About} />
                        <Route path="/demande" component={Demande} />
                        <Route path="/offres" component={Offres} />
                        <Route path="/offre" component={Offre} />
                        <Route path="/messages" component={Messagerie} />
                        <Route path="/profil" component={OthersProfile} />
                        <Route path="/comment_ca_marche" component={HowItWorks} />
                        <Route path="/mon_compte" component={MonCompte} />
                    </div>
                </Router >
            );
        } else {
            return (
                <Router>
                    <div className="header">
                        <div className="top-header">
                            <div className="left-top">
                                <form className="form-inline my-2 my-lg-0 motor-recherche">
                                    <input className="form-control mr-sm-2" placeholder="  Recherche" aria-label="Search" type="search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><span className="txt-recherche">Rechercher</span></button>
                                </form>
                            </div>
                            <div className="right-top" >
                                <ul>
                                    <li className="nav-item">
                                        <Inscription buttonLabel="Devenir Sel'estin(e)" />
                                    </li>
                                    <li className="nav-item">
                                        <Connexion />
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
                                                <Link to="/"><a className="nav-link">Accueil</a></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/comment_ca_marche"><a className="nav-link">Comment ça marche?</a></Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="/aide"><a className="nav-link">Aide</a></Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="/faq"><a className="nav-link">Foire aux questions</a></Link>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://www.facebook.com/selest35/" ><img src={FbLogo} style={{ width: '10%' }} /></a>
                                            </li>

                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <Route exact path="/" component={Home} />
                        <Route path="/inscription" component={Inscription} />
                        <Route path="/faq" component={Faq} />
                        <Route path="/connexion" component={Connexion} />
                        <Route path="/apropos" component={About} />
                        <Route path="/comment_ca_marche" component={HowItWorks} />

                    </div>
                </Router>
            )
        }
    }
}