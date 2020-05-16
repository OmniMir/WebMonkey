// ==UserScript==
// @name		Mega HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.2
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @license		MIT
// @match		https://mega.nz/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				if (document.querySelector(".download-file")) {
					document.querySelector(".download-file").click();
				}
			}
		},
		false
	);
})();
