import React, { closeStyle } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import logo from '../img/theme/logo-no-text-white-border.png';
import Inscription from './Inscription';
import request from 'request';


export default class Connexion extends React.Component {

    //TODO
    isConnected() {
        if (typeof sessionStorage.token !== "undefined") {
            return true;
        } else {
            return false;
        }
    }

    verifyBeforeSend = event => {
        console.log("verifyBeforeSend (first of the chain)");
        this.requestBDDForUser();
    }

    requestBDDForUser() {
        console.log("requestBDDForUser (second of the chain)");

        var id = document.getElementById("id").value;
        var mdp = document.getElementById("mdp").value;
        var verify = document.getElementById("verifyText");


        var data = new FormData();
        data.append("identifiant", id);
        data.append("mot_de_passe", mdp);
        fetch("https://selest-vitre.alwaysdata.net/authentification.php?identifiant=" + id + "&mot_de_passe=" + mdp,
            {
                method: 'POST',
                body: data
            })
            .then((response) => response.json())
            .then((responseJson) => {
                var text = document.getElementById("verifyText");
                if (responseJson.success === 0) {
                    text.innerHTML = "<p style='color:red'>" + responseJson.message + "</p>";
                } else {
                    text.innerHTML = "<p style='color:green'>Vous êtes connecté</p>";
                    var token = responseJson.token;
                    sessionStorage.token = token;
                    sessionStorage.uti_id = responseJson.uti_id
                    sessionStorage.uti_droits = responseJson.uti_droits
                    console.log(sessionStorage.token);
                    console.log(sessionStorage.uti_id);
                    console.log(sessionStorage.uti_droits);
                    window.location.replace("/");
                }
            })
    }

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        if (!this.isConnected()) {
            return (
                <div>
                    <a className="nav-link disabled btn-top-right" onClick={this.toggle}>{this.props.buttonLabel}Connexion</a>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle} className="modal-header">
                            <div className="container zoom-hover"><img src={logo} className="medium-icon space zoom-hover" />
                                Bonjour Sélestin(e) !
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <form>
                                <label className="label-80">Identifiant*
                                <input className="form-control" type="text" name="name" id="id" />
                                </label>
                                <label className="label-80">mot de passe*
                                <input className="form-control" type="password" name="name" id="mdp"
                                        onKeyPress={e => {
                                            if (e.key === 'Enter') {
                                                this.verifyBeforeSend(e)
                                            }
                                        }} />
                                </label>
                                <p style={{ color: '' }} >Vous n'avez pas de compte?<Inscription style="black" buttonLabel="Devenir Sel'estin(e)" /></p>
                                <b><p id="verifyText" style={{ align: 'left' }}></p></b>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button"
                                onClick={e => this.verifyBeforeSend(e)}
                                class="btn btn-success">Envoyer</button>
                        </ModalFooter>
                    </Modal>
                </div>
            );
        } else {
            return null;
        }
    }
}

