import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="container">
                        <div className="footer_grids">
                            <h2 className="title-footer">Reseau voisinage</h2>
                            <div className="block-footer col-md-4 col-sm-6">
                                <ul className="list1">
                                    <li><a title="réseau social" href="#">A propos</a></li>
                                    <li><a title="comment utiliser" href="#">Conditions d'utilisation</a></li>
                                    <li><a title="confidentialité des données" href="#">Confidentialité</a></li>
                                    <li><a title="contact" href="#">Nous contacter</a></li>
                                    <li><a title="aide" href="#">Aide</a></li>
                                </ul>
                            </div>
                            <div className="block-footer col-md-4 col-sm-6">
                                <ul className="list2">
                                    <li><a title="réseau social" href="#">A propos</a></li>
                                    <li><a title="comment utiliser" href="#">Conditions d'utilisation</a></li>
                                    <li><a title="confidentialité des données" href="#">Confidentialité</a></li>
                                    <li><a title="contact" href="#">Nous contacter</a></li>
                                    <li><a title="aide" href="#">Aide</a></li>
                                </ul>
                            </div>
                            <div className="block-footer col-md-4 col-sm-6">
                                <ul className="list3">
                                    <li><a title="réseau social" href="#">A propos</a></li>
                                    <li><a title="comment utiliser" href="#">Conditions d'utilisation</a></li>
                                    <li><a title="confidentialité des données" href="#">Confidentialité</a></li>
                                    <li><a title="contact" href="#">Nous contacter</a></li>
                                    <li><a title="aide" href="#">Aide</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

