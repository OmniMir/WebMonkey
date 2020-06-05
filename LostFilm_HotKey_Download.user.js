// ==UserScript==
// @name		LostFilm HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @match		https://www.lostfilm.tv/*
// @match		http://insearch.site/*
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
				wmClickLast(".external-btn");
				wmClickNumber(".inner-box--link.main a", 2);
			}
		},
		false
	);
})();
