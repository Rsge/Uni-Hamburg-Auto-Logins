// ==UserScript==
// @name           Uni Hamburg Auto Logins
// @name:de        Uni Hamburg Auto-Logins

// @description    Automatically logs you in to a few different Uni Hamburg sites, given automated password filling.
// @description:de Loggt Dich automatisch in verschiedene Seiten der Uni Hamburg ein, gegeben, dass die Login-Daten automatisch ausgefüllt werden.

// @version        2.0.0
// @copyright      2023+, Jan G. (Rsge)
// @license        Mozilla Public License 2.0
// @icon           https://www.uni-hamburg.de/favicon.ico

// @namespace      https://github.com/Rsge
// @homepageURL    https://github.com/Rsge/Uni-Hamburg-Moodle-Auto-Login
// @supportURL     https://github.com/Rsge/Uni-Hamburg-Moodle-Auto-Login/issues
// @downloadURL    https://update.greasyfork.org/scripts/479165/Uni%20Hamburg%20Moodle%20Auto%20Login.user.js
// @updateURL      https://update.greasyfork.org/scripts/479165/Uni%20Hamburg%20Moodle%20Auto%20Login.user.js

// @match          https://lernen.min.uni-hamburg.de/login/*
// @match          https://www.openolat.uni-hamburg.de/dmz/*
// @match          https://login.uni-hamburg.de/idp/*

// @run-at         document-end
// @grant          none
// ==/UserScript==

(function() {
  'use strict';

  window.addEventListener('load', function() {
    // lernen.min.uni-hamburg.de
    let lernenMINLoginButtons = document.getElementsByClassName("btn login-identityprovider-btn btn-primary btn-lg btn-block");
    if (lernenMINLoginButtons.length > 0) {
      lernenMINLoginButtons[0].click();
      return;
    }
    // openolat.uni-hamburg.de
    let openOlatLoginButtonDivs = document.getElementsByClassName("o_block");
    if (openOlatLoginButtonDivs.length > 0) {
      let openOlatLoginButton = openOlatLoginButtonDivs[0].firstElementChild;
      openOlatLoginButton.click();
      return;
    }
    /*
    let openOlatLoginVariantButton = document.getElementById("o_col_ShibGeneric");
    if (openOlatLoginVariantButton) {
      openOlatLoginVariantButton.click();
      setTimeout(function() {
      XXX
        }
      }, 800);
      return;
    }*/
    // login.uni-hamburg.de
    let loginLoginButtons = document.getElementsByClassName("form-element form-button");
    if (loginLoginButtons.length > 0) {
      let passwordInput = document.getElementById("password");
      if (passwordInput?.value.length > 0) {
        loginLoginButtons[0].click();
      } else {
        passwordInput.addEventListener("input", function() {
          loginLoginButtons[0].click();
        });
      }
    }
  }, false);
})();
