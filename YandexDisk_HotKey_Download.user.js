// ==UserScript==
// @name		YandexDisk HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @license		MIT
// @match		https://yadi.sk/d/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
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
				wmClick(".action-buttons__button_download");
				//Second style choice
				wmClick(".download-button");
			}
		},
		false
	);
})();
