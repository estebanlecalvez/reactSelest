import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LeftMenu from '../components/LeftMenu';
import Banniere from '../components/Banniere';


export default class Faq extends Component {
    render() {
        return (
            <div>
                <Banniere path="Foire aux questions" />
                <div class="row page-question">
                    <div class="col-sm-3">
                        <div className="img-personage"></div>
                    </div>
                    <div class="col-sm-8">
                        <div class="container">
                            <div class="informative">
                                <h3>Puis-je bénéficier d’un service même si je n’ai pas encore participer ?</h3>
                                <p>Bien sûr : à l’inscription, le compte de chaque adhérent est crédité automatiquement de 60 souèts offerts. De plus le Sél’est accepte un compte débiteur jusqu’à – 1 800 souèts. C’est-à-dire qu’au début un adhérent peut tout à fait bénéficier de plusieurs services avant de « devoir » rendre service à son tour. </p>

                                <h3>Comment fixe-t-on le montant de souèts d’un échange ?</h3>
                                <p>Lorsque 2 personnes se mettent en contact pour se rendre service, elles se mettent d’accord sur le montant de l’échange.
                                Le principe de base est 60 souèts pour 1 heure de service : 120 souèts pour 2h de nettoyage de terrasse, 30 souèts pour une coupe de cheveux de 30 minutes, 180 souèts pour 3h de ramassage de pommes par exemple.
Pour ce qui ne peut pas se mesurer en temps, voici quelques exemples pratiqués : gardiennage de chat pendant 1 semaine 800 souèts, don de livre pour 15 souèts, don de kilos de 3kg de noix pour 50 souèts, prêt de remorque pour une après-midi pour 120 souèts … Mais ce ne sont que des exemples et la règle reste vraiment le commun accord.</p>

                                <h3>Comment puis-je payer mon adhésion annuelle de 2 € ?</h3>
                                <p>Le Sél’est demande une adhésion annuelle pour couvrir ses petits frais de bureau.
Le mieux est d’assister aux réunions d’informations 1 fois par trimestre au centre social de Vitré (suivre les dates dans la rubrique Actualités (lien vers la rubrique) ) et d’en profiter pour nous remettre votre adhésion. Mais sinon pas d’inquiétude, contactez-nous et nous vous expliquerons la démarche à suivre. Pour information, le Sél’est n’a pas de local.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}