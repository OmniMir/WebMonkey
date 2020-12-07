// ==UserScript==
// @name		Book24 Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://book24.ru/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Top Banner
		wmHide(".header-d__poster");
		//Hide Chat
		wmHide(".fake-jivosite");
		//Hide Big Footer
		wmHide(".page__footer");
	}
})();
