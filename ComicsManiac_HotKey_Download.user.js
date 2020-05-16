// ==UserScript==
// @name         ComicsManiac HotKey Download
// @namespace    https://vash.omnimir.ru/
// @version      0.1
// @description  Press DOWN to DOWNload
// @author       kapsilon
// @match        http://cm-project.com/*
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
				if (document.querySelector(".yad a")) {
					document.querySelector(".yad a").click();
				}
			}
		},
		false
	);
})();
