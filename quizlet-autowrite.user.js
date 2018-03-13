// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically put in 'booty' as the answer and click the answer button
// @author       You
// @match        https://quizlet.com/*/write
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function() {

        setInterval(function () {document.getElementById('user-answer').value = "booty";document.getElementById("js-learnModeAnswerButton").click();}, 500);
    };
})();
