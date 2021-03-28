// ==UserScript==
// @name		AutoClicker
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Click to Web Button
// @author		kapsilon
// @license		MIT
// @match		http://octopus-zerkalo.ru
// @match		https://www.kcsoftwares.com/sumo/view.php?*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => AutoClick(), false);

	//Click on Button
	function AutoClick() {
		//Octopus
		wmClick("a.c-header__link");
		//SUMO
		wmClick(".btn-mini");

		//And Close Opened Tab
		wmWaitAndCloseTab();
	}
})();
