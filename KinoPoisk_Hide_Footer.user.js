// ==UserScript==
// @name		KinoPoisk Hide Footer
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide Big Footer
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
			wmHide("#partial_component__footer");
			wmHide("#footer_wrapper");
		},
		false
	);
})();
