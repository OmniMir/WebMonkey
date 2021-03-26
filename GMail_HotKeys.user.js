// ==UserScript==
// @name		GMail HotKeys
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Some external hotkeys for gmail
// @author		kapsilon
// @match		https://mail.google.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	window.addEventListener(
		"keydown",
		function (event) {
			//Press Alt + A to check all unread emails
			if (event.code == "KeyA" && event.altKey) {
				if (document.querySelector(".zE")) {
					document
						.querySelectorAll(".zE div[aria-checked='false']")
						.forEach((element) => {
							element.click();
						});
				} else {
					wmClick("span[aria-checked]");
				}
			}
		},
		false
	);
})();
