// ==UserScript==
// @name		Grammarly Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://app.grammarly.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//MAIN SCREEN
		//Hide Left Banner
		wmHideAllInStyle("div[class*='business_banner-banner']");
		//Hide Premium from Menu
		wmHideAllInStyle("div[class*='index_navigation-premium']");
		//Hide Red Number from Menu
		wmHideAllInStyle("div[class*='index_navigation-apps'] i");
		//Hide Top Banner
		wmHideAllInStyle("div[class*='banner-container']");

		//DOCUMENT SCREEN
		//Hide Support Button (use Left Menu)
		wmHideAllInStyle("div[class*='toolbarSupportButton']");
		//Hide Premium Functions from Right Menu
		wmHideAllInStyle("div[class*='documentActionsTeaser']");
	}
})();
