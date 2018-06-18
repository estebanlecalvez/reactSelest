import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LeftMenu from '../components/LeftMenu';
import Inscription from '../components/Inscription';
import Banniere from '../components/Banniere';


export default class HowItWorks extends Component {

    render() {
        return (
            <div>
                <Banniere path="Comment ça marche" />
                <div class="row page-how">
                    <div class="col-sm-3">
                        <div className="img-personage"></div>
                    </div>
                    <div class="col-sm-8">
                        <div class="container">
                            <div class="informative">
                                <p>Tu as un peu de temps ? Ou tu as des objets à prêter ? Tu peux participer !</p>
                                <p>Le fonctionnement est facile et tout le monde peut participer.</p>
                                <p>Et ce qui fait la force du Sél’est c’est, c’est la confiance mutuelle entre ses membres.</p>

                                <p>1.	Tu te préinscris en ligne</p>

                                <p>2.	Ta demande d’inscription est envoyée à l’équipe du Sél’est qui te contacte pour te proposer une rencontre et collecter les 2€ d’adhésion annuels</p>


                                <p>3.	Ton inscription est validée par l’équipe du Sél’est : bienvenue tu es maintenant un(e) Sélestin(e) !</p>

                                <p>4.	Tu peux te connecter, poster des offres et demandes d’objets ou de services, communiquer avec les autres, gérer ton compte de souèts en fonction des échanges réalisés.</p>

                                <p>Pour plus de précisions, tu peux aussi consulter notre<Link to="/faq"> Foire aux questions</Link></p>
                                <p>Pour devenir Sélestin(e) :<Inscription buttonLabel="Clique ici!" /></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}