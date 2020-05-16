// ==UserScript==
// @name         SuperComics HotKey Download
// @namespace    https://vash.omnimir.ru/
// @version      0.1
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
		function (e) {
			//Code for Arrow Key
			if (e.keyCode == 40) {
				if (document.querySelector(".eBlock a")) {
					document.querySelector(".eBlock a").click();
				}
			}
		},
		false
	);
})();
