// ==UserScript==
// @name		SUMo AutoClick
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Click to Web Button
// @author		kapsilon
// @license		MIT
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
			//Click to Button
			wmClick(".btn-mini");
			//And Close Opened Tab
			wmWaitAndCloseTab()
		},
		false
	);
})();
