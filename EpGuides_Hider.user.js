// ==UserScript==
// @name		EpGuides Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
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
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Ads
		wmHide("#justwatch");
		wmRemove("#justwatch + iframe");
		wmHide("#amazon");
		//Hide Footer
		wmHide(".footer");
	}
})();
