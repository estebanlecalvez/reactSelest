import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import Banniere from '../components/Banniere';


import LeftMenu from '../components/LeftMenu';
import Photo from '../img/contenu/photoFemme.jpg';

export default class OthersProfile extends Component {
    render() {
        return (
            <div>
                <Banniere path="Profil de Emeline" />

                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-2">
                        <a><img src={Photo} className="rounded-photo" /></a>
                    </div>
                    <div className="col-4">
                        <p>Nom : <a>Lafondue</a></p>
                        <p>Prenom : <a>Emeline</a></p>
                        <p>Age :<a>26</a></p>
                        <p>Description : <a>Jeune infirmière venant d'arriver sur Vitré et cherchant à faire des connaissances et aider les autres.</a></p>
                        <p>Position : <a>Vitré</a></p>
                        <p>Adresse : <a>Cet utilisateur n'a pas souhaité rendre son adresse publique.</a></p>
                        <Link to="/"><Button className="btn btn-danger">Accueil</Button></Link>
                    </div>
                </div>
            </div>
        );
    }
}