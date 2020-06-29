// ==UserScript==
// @name		TEST AnimeJoy Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://animejoy.ru/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Remove Top Header
			wmHide("#topside");
			//Remove Ad Banner
			wmHide(".banner");
			//Remove Donations
			wmHide("#donateb");
			//Remove Footer
			wmHide("#footer");
		},
		false
	);
})();
