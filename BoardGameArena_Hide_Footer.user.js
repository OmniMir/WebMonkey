// ==UserScript==
// @name		BoardGameArena Hide Footer
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide that big footer
// @author		kapsilon
// @license		MIT
// @match		https://boardgamearena.com/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			wmHide("#overall-footer");
		},
		false
	);
})();
