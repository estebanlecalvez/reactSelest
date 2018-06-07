import React, { closeStyle } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import logoSmall from '../img/theme/logo_small.png';
import validate from '../img/validate.png';
import unvalidate from '../img/unvalidate.png';


export default class LogoutButton extends React.Component {
    //TODO
    isConnected() {
        if (typeof sessionStorage.token != "undefined") {
            return true;
        } else {
            return false;
        }
    }

    deconnect() {
        sessionStorage.removeItem("token");
        window.location.replace("/");
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
        if (this.isConnected()) {
            return (
                <div
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            this.deconnect(e)
                        }
                    }}>
                    <Button className="btn btn-danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader style={{ color: '#2377b9' }} toggle={this.toggle}><img src={logoSmall} />Se deconnecter</ModalHeader>
                        <ModalBody>
                            <p>Voulez-vous vous deconnecter?</p>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button"
                                onClick={e => this.deconnect()}
                                class="btn btn-success">Oui</button>
                        </ModalFooter>
                    </Modal>
                </div>
            );
        } else {
            return null;
        }
    }
}

