// ==UserScript==
// @name         AUTO ACCEPT 4 FASTCUP.NET
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  https://steamcommunity.com/id/Podrubatov/
// @author       Podrubatov
// @match        https://cs.fastcup.net/*
// @match        https://csgo.fastcup.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
setInterval( () => {
            let btn = document.querySelectorAll('.oRTKZ');
            if( btn.length && btn[0].innerText.toLowerCase() == 'готов к игре' ) {
                btn[0].click();
    }
}, 2000 )
    // Your code here...
})();
