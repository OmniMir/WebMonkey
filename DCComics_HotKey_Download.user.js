// ==UserScript==
// @name         DCComics HotKey Download
// @namespace    https://vash.omnimir.ru/
// @version      0.1
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
		function (e) {
			//Code for Arrow Key
			if (e.keyCode == 40) {
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
