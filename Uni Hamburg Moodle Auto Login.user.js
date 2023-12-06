// ==UserScript==
// @name           Uni Hamburg Moodle Auto Login
// @name:de        Uni-Hamburg-Moodle Auto-Login

// @description    Automatically logs you in to the Uni Hamburg Moodle, given automated password filling.
// @description:de Loggt Dich automatisch in das Moodle der Uni Hamburg ein, gegeben, dass die Login-Daten automatisch ausgefüllt werden.

// @version        1.0.5
// @copyright      2023+, Jan G. (Rsge)
// @license        Mozilla Public License 2.0
// @icon           https://lernen.min.uni-hamburg.de/theme/image.php/uhh/theme/1698645195/favicon

// @namespace      https://github.com/Rsge
// @homepageURL    https://github.com/Rsge/Uni-Hamburg-Moodle-Auto-Login
// @supportURL     https://github.com/Rsge/Uni-Hamburg-Moodle-Auto-Login/issues
// @downloadURL    https://update.greasyfork.org/scripts/479165/Uni%20Hamburg%20Moodle%20Auto%20Login.user.js
// @updateURL      https://update.greasyfork.org/scripts/479165/Uni%20Hamburg%20Moodle%20Auto%20Login.meta.js

// @match          https://lernen.min.uni-hamburg.de/login/*
// @match          https://login.uni-hamburg.de/idp/*

// @run-at         document-end
// @grant          none
// ==/UserScript==

(function() {
  'use strict';

  window.addEventListener('load', function() {
    let firstLoginButtonElements = document.getElementsByClassName("btn login-identityprovider-btn btn-primary btn-lg btn-block");
    if (firstLoginButtonElements.length > 0) {
      firstLoginButtonElements[0].click();
      return;
    }
    let secondLoginButtonElements = document.getElementsByClassName("form-element form-button");
    if (secondLoginButtonElements.length > 0) {
      let passwordInput = document.getElementById("password");
      if (passwordInput?.value.length > 0) {
        secondLoginButtonElements[0].click();
      } else {
        passwordInput.addEventListener("input", function() {
          secondLoginButtonElements[0].click();
        });
      }
    }
  }, false);
})();
