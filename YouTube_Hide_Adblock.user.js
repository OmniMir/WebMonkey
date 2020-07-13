// ==UserScript==
// @name		YouTube Hide Adblock
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying elements from Adblock for YouTube Extension
// @author		kapsilon
// @license		MIT
// @match		https://www.youtube.com/watch*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Hide Caption under video
			wmWaitAndHide("#ab4yt-brand");
		},
		false
	);

})();
