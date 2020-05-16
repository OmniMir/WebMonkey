// ==UserScript==
// @name         DCComics HotKey Download
// @namespace    https://vash.omnimir.ru/
// @version      0.2
// @description  Press DOWN to DOWNload
// @author       kapsilon
// @match        http://dccomics.ru/*
// @grant        none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				//Maybe two links on page
				let downlinks = document.querySelectorAll(".kp");
				//Choosing last link
				if (downlinks) {
					downlinks[downlinks.length - 1].click();
				}
			}
		},
		false
	);
})();
