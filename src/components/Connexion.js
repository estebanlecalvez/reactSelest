import React, { closeStyle } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import logoSmall from '../img/theme/logo_small.png';
import Inscription from './Inscription';


export default class Connexion extends React.Component {
    verifyBeforeSend = event => {

        var token = this.requestBDDForUser();

    }

    requestBDDForUser() {
        var id = document.getElementById("id").value;
        var mdp = document.getElementById("mdp").value;
        var verify = document.getElementById("verifyText");

        var data = new FormData();
        data.append("identifiant", id);
        data.append("mot_de_passe", mdp);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            var text = document.getElementById("verifyText");
            if (this.status == 200 && this.readyState == 4) {
                var json = JSON.parse(this.responseText);
                var token = json.token;
                console.log(token);
                localStorage.token = token;
            }
            if (this.status == 404 && this.readyState == 4) {
                var json = JSON.parse(this.responseText);
                var message = json.message;
                text.innerHTML = "<p style='color:red'>" + message + "</p>";
            }
        });

        xhr.open("POST", "http://localhost/selest_ws/authentification.php?identifiant=" + id + "&mot_de_passe=" + mdp);

        xhr.send(data);
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
                <a className="nav-link disabled btn-top-right" onClick={this.toggle}>{this.props.buttonLabel}Connexion</a>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} style={{ color: '#2377b9' }}><img src={logoSmall} /> Devenez Sel'estin(e) dès maintenant !</ModalHeader>
                    <ModalBody>
                        <form>
                            <label className="label-80">Identifiant*
                                <input className="form-control" type="text" name="name" id="id" />
                            </label>
                            <label className="label-80">mot de passe*
                                <input className="form-control" type="password" name="name" id="mdp" />
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
    }
}

