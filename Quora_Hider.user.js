// ==UserScript==
// @name		Quora Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.1
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://www.quora.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Sponsored Articles
		wmHideAllInStyle(".q-box > .q-box.qu-pb--medium.qu-borderBottom");
	}
})();
