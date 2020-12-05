// ==UserScript==
// @name		AutoClicker
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Click to Web Button
// @author		kapsilon
// @license		MIT
// @match		http://octopus-zerkalo.ru
// @match		https://pwnews.net/blog/1-0-1
// @match		https://pwnews.net/blog/1-0-2
// @match		https://www.kcsoftwares.com/sumo/view.php?*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Click to button
			//Octopus
			wmClick("a.c-header__link");
			//PWNews
			wmClick(".example3 a");
			//SUMO
			wmClick(".btn-mini");

			//And Close Opened Tab
			wmWaitAndCloseTab();
		},
		false
	);
})();
