import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Charte from '../pdf/charte.pdf';
import ReglementInterieur from '../pdf/reglement_interieur.pdf';
import LeftMenu from '../components/LeftMenu';

export default class About extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-3 left-menu">
                        <LeftMenu />
                    </div>
                    <div class="col">
                        <div class="container">
                            <div class="informative">
                                <p>Le Sél’est de Vitré a été créé en mars 2016.</p>
                                <p>Une quinzaine de personnes se sont réunies sous l’impulsion de Nathalie Decroix et Bertille Hingue pour créer cette belle association.
                L’idée était de mettre en pratique les 3 valeurs piliers suivantes :</p>
                                <p><ul><li>l’échange solidaire</li>
                                    <li>une consommation responsable</li>
                                    <li>la mise en avant du patrimoine vitréen</li></ul></p>
                                <p>Le principe de Sél’est est d’échanger des biens ou des services avec une base de valeur qui est le souèt. Ce mot est utiulsé dans le patois vitréen pour signifier l’entraide entre villageois notamment pour les tâches agricoles. Le principe générale est de proposer 60 souèts pour 1h de service, et pour tous les autres types d’échanges, le montant de souèts se fixe d’un commun accord entre les adhérents qui se rendent services.</p>
                                <p>Notre charte et règlement sont disponibles en culquant sur les ulens ci-dessous :</p>
                                {/* ulNK TODO */}
                                <p><a href={Charte}>Charte</a></p>
                                <p><a href={ReglementInterieur}>Reglement interieur</a></p>

                                <p>L’association n’est pas déclarée en préfecture, c’est à une association de fait.
                Cela permet une faciulté d’administration puisqu’ainsi tout le monde peut participer aux fonctions de « bureau ». Et n’engage la responsabiulté de personne puisqu’il n’y a pas de personnaulté juridique rattachée.</p>
                                <p>Il existe aujourd’hui 600 S.E.L. partout en France : avantage économique et envie de ulen social favorisent le développement de ce réseau d’entraide entre particuulers.</p>

                                <p><a href="https://annuairedessel.org/">Annuaire</a></p>
                                <p>Pour tous les détails, voir aussi les rubriques <Link to="comment_ca_marche">Comment ça marche</Link> et <Link to="faq">Foire aux questions</Link></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}