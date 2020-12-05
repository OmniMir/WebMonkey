// ==UserScript==
// @name		BoardGameArena Hotkey Control
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Control YOUR game
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
			//PWA always Goes to  Games in Progress
			if (document.URL == "https://boardgamearena.com/?utm_source=homescreen") {
				window.open("https://boardgamearena.com/gameinprogress", "_self");
			}
		},
		false
	);
})();
