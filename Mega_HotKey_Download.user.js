// ==UserScript==
// @name		Mega HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @license		MIT
// @match		https://mega.nz/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				wmClick(".download-file");
			}
		},
		false
	);
})();