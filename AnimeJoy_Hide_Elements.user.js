// ==UserScript==
// @name		AnimeJoy Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.8
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
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
			//Hide Top Header
			wmHide("#topside");
			wmHide("#breadcrumbs");
			wmHide(".mecen");
			//Hide Ad Banner
			wmHide(".banner");
			//Hide Subscribe Button
			wmHide("#vkm");
			//Hide Donations Button
			wmHide("#donateb");
			//Hide Random/Popular Tab
			wmHide(".block_tabs");
			wmHide(".tab-content");
			//Hide Footer
			wmHide("#footer");
		}
})();
