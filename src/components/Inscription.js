import React, { closeStyle } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import logoSmall from '../img/theme/logo_small.png';
import validate from '../img/validate.png';
import unvalidate from '../img/unvalidate.png';


export default class Inscription extends React.Component {
    //TODO
    isConnected() {
        if (typeof localStorage.Authorization != "undefined") {
            return true;
        } else {
            return false;
        }
    }

    checkEmail = event => {
        let email = document.getElementById("email");
        let emailText = document.getElementById("emailText");
        var regexEmail = new RegExp("^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$");
        if (regexEmail.test(email.value)) {
            emailText.innerHTML = "<p style='color:green'>Email correct.</p>";
            return true;
        } else {
            emailText.innerHTML = "<p style='color:red'>Email incorrect.</p>";
            return false;
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
        } else {
            return false;
        }
    };


    checkSamePasswords = event => {
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let passwordCheck = document.getElementById("passwordCheck");
        if (password != confirmPassword) {
            passwordCheck.innerHTML = "<p style='color:red'><b>les mots de passes ne correspondent pas.</b></p>";
            return false;
        } else {
            passwordCheck.innerHTML = "<p style='color:green'><b>Les mots de passes correspondent.</b></p>";
            return true;
        }
    }

    verifyBeforeSend = event => {
        let verifyBeforeSend = document.getElementById("verifyBeforeSend");
        if (this.checkSamePasswords() && this.verifyPasswordConformity() && this.checkEmail()) {
            verifyBeforeSend.innerHTML = "<p style='color:green'><b>Inscription réussie.</b><br/> L'équipe du Sel'est te contactera rapidement pour te proposer une rencontre et collecter ta cotisation qui est de 2€ annuels.<br/> Merci et à bientôt.<br/><br/><b>L'équipe du Sel'est.</b>"
            this.sendInscription();
            return true;
        } else {
            verifyBeforeSend.innerHTML = "<p style='color:red'<b>Certains champs sont incorrects."
            return false;
        }
    }

    sendInscription() {
        return true;
    }

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
        if (!this.isConnected()) {
            return (
                <div>
                    <a className="nav-link disabled btn-top-right" style={{ color: this.props.style }} onClick={this.toggle} >{this.props.buttonLabel}</a>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader style={{ color: '#2377b9' }} toggle={this.toggle}><img src={logoSmall} /> Devenez Sel'estin(e) dès maintenant !</ModalHeader>
                        <ModalBody>
                            <p style={{ color: '#2377b9' }}>Pour faire parti de la communauté du Sel'est et participer aux echanges, tu dois d'abord te préinscrire en remplissant le formulaire ci-dessous:</p>
                            <p style={{ color: '#2377b9' }}>* Champs obligatoires</p>
                            <form>
                                <div class="modal-form">
                                    <label className="label-80">Nom*
                                <input className="form-control" type="text" name="name" />
                                    </label>
                                    <label className="label-80">Prenom*
                                <input className="form-control" type="text" name="name" />
                                    </label>
                                    <label className="label-80">Email*
                                <input className="form-control" type="email" name="name" onChange={e => this.checkEmail(e)} id="email" />
                                    </label>
                                    <b><p id="emailText"></p></b>
                                    <p style={{ color: '#2377b9' }}>Veuillez entrer un e-mail valide pour que nous puissions vous contacter et valider l'inscription.</p>
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
                                        <p></p>
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
                                    <p id="verifyBeforeSend"></p>
                                </div>
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

