// ==UserScript==
// @name		VK HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.3
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @license		MIT
// @match		https://vk.com/*
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
				if (document.querySelector(".mail_link")) {
					document.querySelector(".mail_link").click();
				}
				//Second style choice
				if (document.querySelector(".page_doc_title")) {
					document.querySelector(".page_doc_title").click();
				}
				//Third style choice
				if (document.querySelector(".flat_button.fl_r")) {
					document.querySelector(".flat_button.fl_r").click();
				}
				//Fourth style choice
				if (document.querySelector(".thumbed_link a")) {
					document.querySelector(".thumbed_link a").click();
				}
				//Fifth style choice
				if (document.querySelector(".article_decoration_before a")) {
					//Maybe two links on page
					let downlinks = document.querySelectorAll(".article_decoration_before a");
					//Choosing last link
					if (downlinks) {
						downlinks[downlinks.length - 1].click();
					}
				}
			}
		},
		false
	);
})();
