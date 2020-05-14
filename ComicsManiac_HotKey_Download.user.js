// ==UserScript==
// @name         ComicsManiac HotKey Download
// @namespace    https://vash.omnimir.ru/
// @version      0.1
// @description  try to take over the world!
// @author       kapsilon
// @match        http://cm-project.com/*
// @grant        none
// ==/UserScript==

(function () {
	"use strict";
	window.addEventListener(
		"keydown",
		function (e) {
			// pressed del
			if (e.keyCode == 40) {
				if (document.querySelector(".yad a")) {
					document.querySelector(".yad a").click();
				}
			}
		},
		false
	);
})();
