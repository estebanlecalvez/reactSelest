import React, { closeStyle } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import logo from '../img/theme/logo-no-text-white-border.png';
import Inscription from './Inscription';
import request from 'request';


export default class Banniere extends React.Component {

    render() {

        return (
            <div>
                <div className="banniere">
                    <div className="banniere-chemin">
                        <p>{this.props.path}</p>
                    </div>
                </div>
            </div>
        );
    }
}

