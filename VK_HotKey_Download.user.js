// ==UserScript==
// @name		VK HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.5
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @license		MIT
// @match		https://vk.com/wall*
// @match		https://vk.com/@*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.js
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
				wmClick(".mail_link");
				//Second style choice
				wmClick(".page_doc_title");
				//Third style choice
				wmClick(".flat_button.fl_r");
				//Fourth style choice
				wmClick(".thumbed_link a");
				//Fifth style choice
				wmClickLast(".article_decoration_before a");
			}
		},
		false
	);
})();
