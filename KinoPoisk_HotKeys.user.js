// ==UserScript==
// @name		KinoPoisk HotKeys
// @namespace	https://vash.omnimir.ru/
// @version		0.5
// @description	Press D/P/T For Dates/Posters/Trailer
// @author		kapsilon
// @match		https://www.kinopoisk.ru/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start with Keydown
	window.addEventListener("keydown", (event) => HotKeys(event), false);

	//KinoPoisk HotKey Control
	function HotKeys(event) {
		//Press D to Dates
		if (event.code == "KeyD") {
			//Disable Default Action
			event.preventDefault();

			//Click Dates Link
			wmClick("div[data-test-id='encyclopedic-table'] a[href$='/dates/']");
		}

		//Press P to Posters
		if (event.code == "KeyP") {
			//Disable Default Action
			event.preventDefault();

			//Click Posters Link
			wmClick("div[class^='styles_posterContainer'] a[href$='/posters/']");
		}

		//Press T to Trailer
		if (event.code == "KeyT") {
			//Disable Default Action
			event.preventDefault();

			//Click Trailer Button
			wmClick(".film-trailer div[role='button']");
		}
	}
})();
