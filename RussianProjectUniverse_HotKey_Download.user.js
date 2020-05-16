// ==UserScript==
// @name         RussianProjectUniverse HotKey Download
// @namespace    https://vash.omnimir.ru/
// @version      0.2
// @description  Press DOWN to DOWNload
// @author       kapsilon
// @match        https://rp-universe.ru/*
// @grant        none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				if (document.querySelector(".tabs-sel a")) {
					document.querySelector(".tabs-sel a").click();
				}
			}
		},
		false
	);
})();
