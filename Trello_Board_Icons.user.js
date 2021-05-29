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
		//Change Icons of Boards to more sharp versions
		wmAddNewStyle(`
			.boards-page-board-section-header-icon-image {
				height: 30px;
				width: 30px;
			}
		`);
		//Set Headers of Workspaces Bigger
		wmAddNewStyle(`
			.boards-page-board-section-header-name {
				margin: 2px 0 0;
				font-size: 20px;
			}
		`);
	}
})();
