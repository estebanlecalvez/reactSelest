import React, { closeStyle } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import logo from '../img/theme/logo-no-text-white-border.png';
import Inscription from './Inscription';
import request from 'request';
import Photo from '../img/contenu/photoFemme.jpg';
import Crop from 'react-cropper';
import 'cropperjs/dist/cropper.css';

export default class Cropper extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            file: '',
            imagePreviewUrl: ''
        };

        this.toggle = this.toggle.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    _crop() {
        // image in dataUrl
        console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
    }

    seeImage() {
        var imageCropped = this.refs.cropper.getCroppedCanvas().toDataURL();
        console.log(imageCropped);
        document.getElementById("cropped-image").innerHTML = "<img src='" + imageCropped + "' style=width:50%;border-radius:50%;'/>";
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<Crop
                ref='cropper'
                src={imagePreviewUrl}
                // Cropper.js options
                aspectRatio={16 / 16}
                guides={false}
                crop={this._crop.bind(this)} />);
        } else {
            $imagePreview = (<div>Veuillez selectionner une image</div>);
        }
        return (
            <div>
                <div className="container">
                    <button className="btn-skew-green" onClick={this.toggle}>{this.props.buttonLabel}</button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle} className="modal-header">
                            <div className="container zoom-hover"><img src={logo} className="medium-icon space zoom-hover" />
                                Changez votre photo!
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="container">
                                <form onSubmit={(e) => this._handleSubmit(e)}>
                                    <input
                                        type="file"
                                        onChange={(e) => this._handleImageChange(e)} />
                                    <button

                                        type="submit"
                                        onClick={(e) => this._handleSubmit(e)}>Envoyer</button>
                                </form>
                                <div className="imgPreview">
                                    {$imagePreview}
                                </div>
                            </div>



                        </ModalBody>
                        <ModalFooter>
                            <button type="button"
                                onClick={e => this.seeImage(e)}
                                class="btn-skew-green">Crop</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

