import React, { Component } from 'react';
import Selest2_0 from '../img/contenu/Actualites/selest2_0.png';
import ReuMardi from '../img/contenu/Actualites/reu_mardi.jpg';
import Banniere from '../img/theme/img-slider-selest.png';



export default class Actualites extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="banniere">
                        <div className="banniere-chemin">
                            <p> Accueil/Actualites</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-9">
                        <div class="row actuality-box">
                            <div class=" col-sm-2 ">
                                <img src={Selest2_0} className="actualite-img" />
                            </div>
                            <div class="col">
                                <div className="actuality-title">
                                    <p>Le SEL 2.0!</p>
                                </div>
                                <div className="actuality-text">
                                    <p>Bonjour à tous, l'équipe du SEL de Vitré en collaboration avec les étudiants de My Digital School Rennes, travaille actuellement sur un projet de site internet. Pour mieux connaître les attentes des potentiels utilisateurs, nous réalisons un sondage. 2 minutes de votre temps seront une aide très précieuse. Pour participer <a href="https://goo.gl/forms/IyKn6zmXgfLOmrix1"> cliquez ici</a> !</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-2"></div>
                    <div class="col-9">
                        <div class="row actuality-box">
                            <div class=" col-2 ">
                                <img src={ReuMardi} className="actualite-img" />
                            </div>
                            <div class="col">
                                <div className="actuality-title">
                                    <p>Réunion mardi soir!</p>
                                </div>
                                <div className="actuality-text">
                                    <p>Bonjour à tous
Sel'est vous invite à une réunion mardi soir au centre social à 19h30, l'occasion de se retrouver entre adhérents, ou de découvrir le SEL pour les non-adhérents.

à l'ordre du jour :

- échanges et rencontres passés
- carrefour des association 9 septembre
- création du forum
- notre facebook : qui le met à jour ?
- utilisation de la liste d'email : ouvrir certaines choses aux non adhérents pour attirer d'autres personnes
- compta souets : chacun se met à jour
- prochaines rencontres de la rentrée

et en plus, comme c'est la saison des confitures,
on vous propose un échange de confiture maison qu'on fera en fin de réunion.

et comme d'habitude, chacun peut amener de quoi boire ou grignoter pour terminer par un moment sympa !! (pensez à vos gobelets réutilisables !!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>




        );
    }
}