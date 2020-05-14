// ==UserScript==
// @name		YandexDisk HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.1
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
		function (e) {
			//Code for Arrow Key
			if (e.keyCode == 40) {
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
