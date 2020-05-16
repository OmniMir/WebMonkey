// ==UserScript==
// @name         SuperComics HotKey Download
// @namespace    https://vash.omnimir.ru/
// @version      0.2
// @description  Press DOWN to DOWNload
// @author       kapsilon
// @match        http://supercomics.ru/*
// @grant        none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				if (document.querySelector(".eBlock a")) {
					document.querySelector(".eBlock a").click();
				}
			}
		},
		false
	);
})();
