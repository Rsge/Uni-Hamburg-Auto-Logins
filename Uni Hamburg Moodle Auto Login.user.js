// ==UserScript==
// @name           Uni Hamburg Moodle Auto Login
// @name:de        Uni-Hamburg-Moodle Auto-Login

// @description    Automatically logs you in to the Uni Hamburg Moodle, given automated password filling.
// @description:de Loggt Dich automatisch in das Moodle der Uni Hamburg ein, gegeben, dass die Login-Daten automatisch ausgefüllt werden.

// @version        1.0.0
// @copyright      2023+, Jan G. (Rsge)
// @license        Mozilla Public License 2.0
// @icon           https://lernen.min.uni-hamburg.de/theme/image.php/uhh/theme/1698645195/favicon

// @namespace      https://github.com/Rsge
// @homepageURL    https://github.com/Rsge/Uni-Hamburg-Moodle-Auto-Login
// @supportURL     https://github.com/Rsge/Uni-Hamburg-Moodle-Auto-Login/issues

// @match          https://lernen.min.uni-hamburg.de/login/*
// @match          https://login.uni-hamburg.de/idp/*

// @run-at         document-idle
// @grant          none
// ==/UserScript==

(function() {
    'use strict';

    let firstLoginButtonElements = document.getElementsByClassName("btn login-identityprovider-btn btn-primary btn-lg btn-block");
    if (firstLoginButtonElements.length > 0) {
        firstLoginButtonElements[0].click();
        return;
    }
    let secondLoginButtonElements = document.getElementsByClassName("form-element form-button");
    if (secondLoginButtonElements.length > 0) {
        secondLoginButtonElements[0].click();
    }
})();