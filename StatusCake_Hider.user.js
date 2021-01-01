// ==UserScript==
// @name		StatusCake Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://app.statuscake.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Left Banners
		wmHide("li[style^='background-color: #CEA71B;']");
		//Hide Business Menu
		wmHideAll("li.greyed");
		//Hide Top Banner
		wmHide("#attentionBanner");
		//Hide Chat Button
		wmHide("#intercom-container");
	}
})();
