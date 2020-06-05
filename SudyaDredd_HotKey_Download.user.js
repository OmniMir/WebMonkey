// ==UserScript==
// @name		SudyaDredd HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @match		https://sudya-dredd.ru/*
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
				wmClickNumber(".su-column-size-2-3 a", 4)
				wmClick(".FileBase_link_1b7fa");
			}
		},
		false
	);
})();
