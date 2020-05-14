// ==UserScript==
// @name		Mega HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.1
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
		function (e) {
			//Code for Arrow Key
			if (e.keyCode == 40) {
				if (document.querySelector(".download-file")) {
					document.querySelector(".download-file").click();
				}
			}
		},
		false
	);
})();
