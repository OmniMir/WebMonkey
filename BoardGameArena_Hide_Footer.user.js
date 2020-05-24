// ==UserScript==
// @name		BoardGameArena Hide Footer
// @namespace	https://vash.omnimir.ru/
// @version		0.1
// @description	Hide that big footer
// @author		kapsilon
// @license		MIT
// @match		https://boardgamearena.com/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			document.querySelector("#overall-footer").style.display = "none";
		},
		false
	);
})();
