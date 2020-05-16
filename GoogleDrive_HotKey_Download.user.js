// ==UserScript==
// @name		GoogleDrive HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.2
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @license		MIT
// @match		https://drive.google.com/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				if (document.querySelector("#uc-download-link")) {
					document.querySelector("#uc-download-link").click();
				}
				/*Video Player mode is blocked(
				if (
					document.querySelector(
						".ndfHFb-c4YZDc-to915-LgbsSe.ndfHFb-c4YZDc-C7uZwb-LgbsSe.VIpgJd-TzA9Ye-eEGnhe.ndfHFb-c4YZDc-LgbsSe.ndfHFb-c4YZDc-C7uZwb-LgbsSe-SfQLQb-Bz112c"
					)
				) {
					console.log("OK3")
					let downURL = document.baseURI;
					downURL = downURL
						.replace("file/d/", "u/0/uc?id=")
						.replace("/view", "&export=download");
					window.open(downURL);
				}
				*/
			}
		},
		false
	);
})();
