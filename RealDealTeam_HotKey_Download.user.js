// ==UserScript==
// @name		RealDealTeam HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.3
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @match		https://realdealteam.blogspot.com/*
// @grant		none
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
