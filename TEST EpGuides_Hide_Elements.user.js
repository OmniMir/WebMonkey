// ==UserScript==
// @name		TEST EpGuides Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		http://epguides.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Hide Ads
			wmHide("#justwatch");
			wmHide("#justwatch + iframe");
			//Hide Footer
			wmHide(".footer");
		},
		false
	);
})();
