// ==UserScript==
// @name		YandexDisk HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.2
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @license		MIT
// @match		https://yadi.sk/d/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				//First style choice
				if (document.querySelector(".action-buttons__button_download")) {
					document.querySelector(".action-buttons__button_download").click();
				}
				//Second style choice
				if (document.querySelector(".download-button")) {
					document.querySelector(".download-button").click();
				}
			}
		},
		false
	);
})();
