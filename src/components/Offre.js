import React, { Component } from 'react';
import LeftMenu from '../components/LeftMenu';

export default class Offre extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div class="col-3 left-menu">
                        <LeftMenu />
                    </div>
                    <div className="card col-sm-5">
                        <div className="card-body">
                            <h2 className="card-title">Emeline La Fondue</h2>
                            <strong className="card-text">Description</strong>
                            <p className="card-title">Cherche une personne pour venir m'aider à garder les chiens des voisins, ils sont très gentils, et en manque d'amuuur, pliz hailp</p>
                        </div>
                        <div >
                            <p className="lead">Categorie :
          <span>
                                    Multiple
          </span>
                            </p>
                            <p className="lead">Souèts :
          <span>
                                    120(2heures)
          </span>
                            </p>
                            <p className="lead">Date souhaitée :
          <span>
                                    12/07/2018
          </span>
                            </p>
                            <button type="button" className="btn btn-success">Accepter</button>
                        </div>
                    </div>
                    <div className="card bottom_shadowed_box col-sm-3">
                        <img className="card-img-top" src="img/theme/profil.png" alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-title">User Name</p>
                            <p className="card-text">Description</p>
                            <p className="card-body">Age : 29</p>
                            <a href="#" className="btn btn-primary">Voir le profil</a>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}