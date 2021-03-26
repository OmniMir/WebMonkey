// ==UserScript==
// @name		InoReader Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://www.inoreader.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Upgrade Button
		wmHide("#sb_rp_upgrade");
		wmHideAllInStyle(".inno_toolbar_button_menu_item:nth-child(4)");
		wmHideAllInStyle(".inno_toolbar_button_menu_item:nth-child(5)");
		wmHideAllInStyle(".inno_toolbar_button_menu_item:nth-child(14)");
	}
})();
