// ==UserScript==
// @name         FASTCUP FACEIT LINK
// @namespace    http://tampermonkey.net/
// @version      0.1
// @require      http://code.jquery.com/jquery-latest.js
// @author       Podrubatov
// @match        https://csgo.fastcup.net/*
// @match        https://cs.fastcup.net/*
// @grant        none
// ==/UserScript==
//Если не отображается кнопка обновите страницу
(function() {
    'use strict';
 let interval = setInterval( () => {
        let parent = $('div._3cgCe');
        if( parent.length ) {
            const currentUrl = window.location.href;
            if(currentUrl.includes("fastcup")) {
                const steamlink = String($('._2uQMM > a:first-child').attr('href'));
                const steamid = steamlink.slice(36);
                const urlFaceit = `https://faceitfinder.com/profile/${steamid}`;
                const faceit = $(`<div class="_2uQMM"><a href="${urlFaceit}" target="_blank" id="knopka" rel="noopener noreferrer" class="_33xKn _1Az77"><span>FACEIT</span></a></div>`);
        parent.append(faceit);
        clearTimeout(interval);
}}}, 200)
    setTimeout( () => {
        clearTimeout(interval)
    }, 5000)
})();
