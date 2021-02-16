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
		let steamUrl = $('._2uQMM > a:first-child');

		if( currentUrl.includes("fastcup") && parent.length && steamUrl.length ) {
			let steamid = String(steamUrl.attr('href')).split('/').pop();
			let btnid = 'steam-' + steamid;
			if( !$(btnid).length ) {
				let urlFaceit = `https://faceitfinder.com/profile/${steamid}`;
				let faceit = $(`<div id="${btnid}" class="_2uQMM add-faceit-btn"><a href="${urlFaceit}" target="_blank" rel="noopener noreferrer" class="_33xKn _1Az77"><span>FACEIT</span></a></div>`);
				parent.find('.add-faceit-btn').remove();
        		parent.append(faceit);
			}
		}

	});
})();
