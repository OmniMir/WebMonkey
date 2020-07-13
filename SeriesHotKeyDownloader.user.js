// ==UserScript==
// @name		Series HotKey Downloader
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @match		https://baibako.tv/*
// @match		http://insearch.site/*
// @match		https://www.lostfilm.tv/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				//Baibako
				wmClick(".fa-download");
				//LostFilm
				wmClickLast(".external-btn");
				//LostFilm Insearch
				wmClickNumber(".inner-box--link.main a", 2);
				wmClickNumber(".block_3 a", 2);
			}
		},
		false
	);
})();
