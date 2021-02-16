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
	document.addEventListener("DOMSubtreeModified", function() {
		let parent = $('div._3cgCe');
		let currentUrl = window.location.href;
		if( currentUrl.includes("fastcup") && parent.length && !$('#inner_btn').length ) {
			let steamlink = String($('._2uQMM > a:first-child').attr('href')).slice(36);
			let steamid = steamlink.slice(36);
			let urlFaceit = `https://faceitfinder.com/profile/${steamid}`;
			let faceit = $(`<div id="inner_btn" class="_2uQMM"><a href="${urlFaceit}" target="_blank" rel="noopener noreferrer" class="_33xKn _1Az77"><span>FACEIT</span></a></div>`);
        	parent.append(faceit);
		}
	});
})();
