// ==UserScript==
// @name		KinoPoisk Hide RandomMovie
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying RandomMovie
// @author		kapsilon
// @license		MIT
// @match		https://www.kinopoisk.ru/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			wmHide(".randomMovie");
		},
		false
	);
})();
