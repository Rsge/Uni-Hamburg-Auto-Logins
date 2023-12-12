// ==UserScript==
// @name           Uni Hamburg Auto Logins
// @name:de        Uni Hamburg Auto-Logins

// @description    Automatically logs you in to a few different Uni Hamburg sites, given automated password filling.
// @description:de Loggt Dich automatisch in verschiedene Seiten der Uni Hamburg ein, gegeben, dass die Login-Daten automatisch ausgefüllt werden.

// @version        2.1.1
// @copyright      2023+, Jan G. (Rsge)
// @license        Mozilla Public License 2.0
// @icon           https://www.uni-hamburg.de/favicon.ico

// @namespace      https://github.com/Rsge
// @homepageURL    https://github.com/Rsge/Uni-Hamburg-Auto-Login
// @supportURL     https://github.com/Rsge/Uni-Hamburg-Auto-Login/issues
// @downloadURL    https://update.greasyfork.org/scripts/481691/Uni%20Hamburg%20Auto%20Logins.user.js
// @updateURL      https://update.greasyfork.org/scripts/481691/Uni%20Hamburg%20Auto%20Logins.user.js

// @match          https://lernen.min.uni-hamburg.de/login/*
// @match          https://www.openolat.uni-hamburg.de/dmz/*
// @match          https://login.uni-hamburg.de/idp/*
// @match          https://www.stine.uni-hamburg.de/scripts/*
// @match          https://cndsf.ad.uni-hamburg.de/IdentityServer/Account/*

// @run-at         document-end
// @grant          none
// ==/UserScript==

(function() {
  'use strict';

  // Checks for input password. Clicks if there is one, otherwise waits for input to click.
  function checkPwdLogin(pwdInput, button) {
    if (pwdInput?.value.length > 0) {
      button.click();
    } else {
      pwdInput.addEventListener("input", function() {
        button.click();
      });
    }
  }

  // Carries out login sequence.
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
      let pwdInput = document.getElementById("password");
      checkPwdLogin(pwdInput, loginLoginButtons[0]);
      return;
    }
    // stine.uni-hamburg.de
    let stineOpenLoginButton = document.getElementById("logIn_btn");
    if (stineOpenLoginButton) {
      stineOpenLoginButton.click();
      return;
    }
    // cndsf.ad.uni-hamburg.de
    let campusNetLoginButtons = document.getElementsByClassName("btn btn-primary");
    if (campusNetLoginButtons.length > 0) {
      let pwdInput = document.getElementById("Password");
      checkPwdLogin(pwdInput, campusNetLoginButtons[0]);
      return;
    }
  }, false);
})();
