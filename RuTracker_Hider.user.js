// ==UserScript==
// @name		RuTracker Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://rutracker.org/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Header Banner
		wmHide(".tCenter.w100");
		//Hide Ads Banners
		wmHideAll(".bn-idx");
		wmHideAll("a[href^='https://robinbob.in/']");
		wmHide(".sb2-bg2 + div");
		//Hide AliExpress Banners
		wmHideAll(".products");
		//Hide Blocker After Thanks
		wmRemove("#bb-alert-box");
		wmRemove("#modal-blocker");
	}
})();
