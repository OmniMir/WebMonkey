// ==UserScript==
// @name		Trello Board Icons
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Cards are BIGGER now! (For vertical screens)
// @author		kapsilon
// @license		MIT
// @match		https://trello.com/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Change Icons of Boards to more sharp versions
			document
				.querySelectorAll(".boards-page-board-section-header-icon img")
				.forEach((element) => {
					element.src = element.src.replace("/30.png", "/170.png");
					element.srcset = element.srcset.replace(/\S* 1x, /g, "");
				});
		},
		false
	);
})();
