// ==UserScript==
// @name         RealDealTeam HotKey Download
// @namespace    https://vash.omnimir.ru/
// @version      0.2
// @description  Press DOWN to DOWNload
// @author       kapsilon
// @match        https://realdealteam.blogspot.com/*
// @grant        none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				if (document.querySelectorAll(".article-content a")[1]) {
					document.querySelectorAll(".article-content a")[1].click()
				}
			}
		},
		false
	);
})();


body > div.viewitem-panel > div > div.viewitem-inner > div > div > div.article-content.entry-content > div > div:nth-child(3) > a