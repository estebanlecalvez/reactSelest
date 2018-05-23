import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LeftMenu from '../components/LeftMenu';
import profil from '../img/contenu/patoche.jpg';

export default class Messagerie extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div class="col-3 left-menu">
                        <LeftMenu />
                    </div>
                    <div className="card col-8">
                        <div className="card-header">
                            <div class="row">
                                <div class="col-sm-1">
                                    <img src={profil} />
                                </div>
                                <div class="col">
                                    <h4>Patrick Sebastien</h4>
                                </div>
                            </div>
                        </div>
                        <div class="messagerie" id="messagerie">
                        <p><span class="other-messages">Bonjour comment allez vous???</span></p><br />
                            <p><span class="my-messages">Bien et vous ptdr?</span></p><br />
                            <p><span class="my-messages">ya kkn?</span></p><br />
                            <p><span class="my-messages">Vouzaite pas tres causant.</span></p><br />
                            <p><span class="other-messages">Pardonnez je suis très occupé je suis en train de developper votre site internet du sel'est.</span></p>
                            <p><span class="other-messages">Que voulez vous savoir?</span></p>
                        </div>
                        <div className="card-footer">
                            <input type="text"/><Button>Envoyer</Button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}