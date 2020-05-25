// ==UserScript==
// @name		MediaFire HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.5
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @license		MIT
// @match		http://www.mediafire.com/file/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				wmClick(".popsok");
			}
		},
		false
	);
})();
