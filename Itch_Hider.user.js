// ==UserScript==
// @name		Itch Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://itch.io/*
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
		//Hide Add to Collection Button
		wmHideAllInStyle(".game_cell_tools");
		//Hide PopUp Window
		wmHideAllInStyleImportant(".popup_details");
	}
})();
