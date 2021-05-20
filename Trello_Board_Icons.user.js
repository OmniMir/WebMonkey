// ==UserScript==
// @name		Trello Board Icons
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Cards are BIGGER now! (For vertical screens)
// @author		kapsilon
// @license		MIT
// @match		https://trello.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";

	//Start on page load to take effect
	window.addEventListener("load", () => boardIcons(), false);

	//Hide Elements
	function boardIcons() {
		//Change Personal Boards Icon
		wmAddNewStyle(`
			.boards-page-board-section-header-icon-default-image {
				background: transparent;
				font-size: 18px;
			}
		`);
		document.querySelector(".boards-page-board-section-header-icon-default-image").innerText = "💁‍♂️";

		//Change Icons of Boards to more sharp versions
		wmAddNewStyle(`
			.boards-page-board-section-header-icon-image {
				height: 34px;
				width: 34px;
			}
		`);
	}
})();
