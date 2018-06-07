import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import positionLogo from '../../img/contenu/positionLogo.png';
import LeftMenu from '../../components/LeftMenu';
import Photo from '../../img/contenu/photoFemme.jpg';

export default class MonCompte extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-2 left-col-my-account">
                            <p> Emeline La Fondue</p>
                            <a><img src={Photo} className="imgMyAccount zoom-hover" /></a>
                        </div><div className="col-1"></div>
                        <div className="col-4 ">
                            <p>Age :<a>26</a></p>
                            <p>Position : <a>Vitré</a><img src={positionLogo} className="small-icon zoom-hover"/></p>
                            <p>Adresse : <a> Ajouter une adresse.</a></p>
                            <p>Changer de mot de passe</p>
                            <Link to="/"><Button className="btn btn-danger">Accueil</Button></Link>
                        </div>
                        <div className="col-4">
                            <h3>A propos de moi</h3>
                            <p>Jeune infirmière venant d'arriver sur Vitré et cherchant à faire des connaissances et aider les autres.</p>
                        </div>
                        
                    </div>
                    <hr />
                </div>

            </div>
        );
    }
}