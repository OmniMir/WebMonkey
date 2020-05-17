// ==UserScript==
// @name         SpaikComics HotKey Download
// @namespace    https://vash.omnimir.ru/
// @version      0.2
// @description  Press DOWN to DOWNload
// @author       kapsilon
// @match        http://spaikcomics.moy.su/*
// @grant        none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				if (document.querySelector(".eTitle + table a")) {
					document.querySelector(".eTitle + table a").click();
				}
			}
		},
		false
	);
})();
