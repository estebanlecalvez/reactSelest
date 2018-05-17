import React, { closeStyle } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import validate from '../img/validate.png';
import unvalidate from '../img/unvalidate.png';


export default class Inscription extends React.Component {

    checkSamePasswords = event => {
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let passwordCheck = document.getElementById("passwordCheck");
        if (password != confirmPassword) {
            passwordCheck.innerHTML = "<p style='color:red'><b>les mots de passes ne correspondent pas.</b></p>";
        } else {
            passwordCheck.innerHTML = "<p style='color:green'><b>Les mots de passes correspondent.</b></p>";
        }
    }

    verifyPasswordConformity = event => {
        let password = document.getElementById("password").value;
        let majusculeDOM = document.getElementById("majuscule");
        let minusculeDOM = document.getElementById("minuscule");
        let chiffreDOM = document.getElementById("chiffre");
        let longueurDOM = document.getElementById("longueur");
        var majuscule = new RegExp("(?=.*[A-Z])");
        var minuscule = new RegExp("(?=.*[a-z])");
        var chiffre = new RegExp("(?=.*[0-9])")
        var longueur = new RegExp(".{8,}$")
        if (majuscule.test(password)) majusculeDOM.style.color = "green"; else majusculeDOM.style.color = "red";
        if (minuscule.test(password)) minusculeDOM.style.color = "green"; else minusculeDOM.style.color = "red";
        if (chiffre.test(password)) chiffreDOM.style.color = "green"; else chiffreDOM.style.color = "red";
        if (longueur.test(password)) longueurDOM.style.color = "green"; else longueurDOM.style.color = "red";
        if (majuscule.test(password) && minuscule.test(password) && chiffre.test(password) && longueur.test(password)) {
            return true;
        }
    };

    showConformity = event => {
        this.verifyPasswordConformity();
        document.getElementById("majuscule").innerHTML = "<p>Au moins une majuscule</p>";
        document.getElementById("minuscule").innerHTML = "<p>Au moins une minuscule</p>";
        document.getElementById("chiffre").innerHTML = "<p>Au moins un chiffre</p>";
        document.getElementById("longueur").innerHTML = "<p>Au moins 8 caractères</p>";
    }

    hideConformity = event => {
        document.getElementById("majuscule").innerHTML = "";
        document.getElementById("minuscule").innerHTML = "";
        document.getElementById("chiffre").innerHTML = "";
        document.getElementById("longueur").innerHTML = "";
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
        return (
            <div>
                <a className="nav-link disabled btn-top-right" style={{textColor : this.props.style}}onClick={this.toggle} >{this.props.buttonLabel}</a>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Devenez Sel'estin(e) dès maintenant !</ModalHeader>
                    <ModalBody>
                        <form>
                            <label className="label-80">Nom*
                                <input className="form-control" type="text" name="name" />
                            </label>
                            <label className="label-80">Prenom*
                                <input className="form-control" type="text" name="name" />
                            </label>
                            <label className="label-80">Email*
                                <input className="form-control" type="text" name="name" />
                            </label>
                            <label className="label-80">Telephone mobile
                                <input className="form-control" type="text" name="name" />
                            </label>
                            <label className="label-80">Telephone fixe
                                <input className="form-control" type="text" name="name" />
                            </label>
                            <label className="label-80">Code postal*
                                <input className="form-control" type="text" name="name" />
                            </label>
                            <label className="label-80">Ville*
                                <input className="form-control" type="text" name="name" />
                            </label>
                            <label className="label-80">Adresse*
                                <input className="form-control" type="text" name="name" />
                            </label>
                            <label className="label-80">Mot de passe*
                                <input className="form-control" type="password" name="password"
                                    onChange={e => this.verifyPasswordConformity(e)}
                                    onFocus={e => this.showConformity(e)}
                                    onBlur={e => this.hideConformity(e)}
                                    id="password" />
                                <b><p id="majuscule"></p>
                                    <p id="minuscule"></p>
                                    <p id="chiffre"></p>
                                    <p id="longueur"></p></b>
                            </label>
                            <label className="label-80">Confirmation de mot de passe*
                                <input className="form-control" type="password" name="confirmPassword"
                                    onChange={e => this.checkSamePasswords(e)}
                                    id="confirmPassword" />
                                <b><p id="passwordCheck"></p></b>
                            </label>
                            <p></p>
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
    }
}

