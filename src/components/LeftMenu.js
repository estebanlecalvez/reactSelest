import React, { Component } from 'react';
import request from 'request';
import $ from 'jquery';

export default class LeftMenu extends Component {
    getCategories() {
        // var data = null;
        // var xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;

        // xhr.addEventListener("readystatechange", function () {
        //     var menu = document.getElementById("leftMenu");
        //     console.log(this.status + " " + this.readyState);
        //     if (this.readyState == 4) {
        //         console.log(localStorage);
        //         console.log(localStorage.token);
        //         console.log("response text : "+this.responseText);
        //     }
        // });

        // xhr.open("GET", "http://localhost/selest_ws/get_categories.php");
        // xhr.setRequestHeader("token",localStorage.token);
        // // console.log(localStorage.token);
        // // console.log(xhr.getResponseHeader)
        // xhr.send(data);



        // var settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "http://localhost/selest_ws/get_categories.php",
        //     "method": "GET",
        //     "headers": {
        //       "token": localStorage.token,
        //       "Content-Type": "application/json",
        //       "Cache-Control": "no-cache"
        //     }
        //   }

        //   $.ajax(settings).done(function (response) {
        //     console.log(response);
        //   });






        // var options = {
        //     method: 'GET',
        //     url: 'http://localhost/selest_ws/get_categories.php',
        //     headers: { 'Authorization': `Bearer ` }        };

        // request(options, function (response, body) {
        //     console.log(response);
        //     console.log(body);
        // });


        request.get({
            url: 'https://api.some-server.com/',
            headerData: [
                {
                    "key": "token",
                    "value": localStorage.token,
                    "description": "",
                    "enabled": true
                }
            ]
        });

        // var settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "http://localhost/selest_ws/get_categories.php",
        //     "method": "GET",
        //     "headerData": [
        //         {
        //             "key": "token",
        //             "value": "e0281f42542d47cdf38f4be0767a9dbf4dbf3c5c087be45562e065635cbc14d4",
        //             "description": "",
        //             "enabled": true
        //         }
        //     ]
        //   }

        //   $.ajax(settings).done(function (response) {
        //     console.log(response);
        //   });

    }

    componentDidMount() {
        this.getCategories();
    }

    render() {
        return (
            <div id="leftMenu">
                <div className="categorie-title">
                    <p>Categories</p>
                </div>
                <div className="categorie-parent">
                    <div className="categorie-enfant">
                        <p>Baby-Sitting</p>
                    </div>
                    <div className="categorie-enfant">
                        <p>Jardinage</p>
                    </div>
                    <div className="categorie-enfant">
                        <p>Bricolage</p>
                    </div>
                    <div className="categorie-enfant">
                        <p>Cuisine</p>
                    </div>
                    <div className="categorie-enfant">
                        <p>Entretien</p>
                    </div>

                </div>
            </div>
        );
    }
}