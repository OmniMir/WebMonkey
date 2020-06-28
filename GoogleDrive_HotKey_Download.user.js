// ==UserScript==
// @name		GoogleDrive HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @license		MIT
// @match		https://drive.google.com/file/d/*
// @match		https://drive.google.com/uc?id=*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//View mode is blocked🙁 Therefore only automated opening new tab to downloading page
			setTimeout(() => {
				if (
					//Only with "Add to Drive" Button that appear some time later
					document.querySelector(
						".ndfHFb-c4YZDc-Wrql6b-htvI8d-wcotoc-wHEfpf-ndfHFb-Bz112c"
					)
				) {
					let downURL = document.baseURI;
					downURL = downURL
						.replace("file/d/", "u/0/uc?id=")
						.replace("/view", "&export=download");
					window.open(downURL);
				}
			}, 1000);
		},
		false
	);
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				wmClick("#uc-download-link");
			}
		},
		false
	);
})();
