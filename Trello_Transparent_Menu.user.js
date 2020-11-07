// ==UserScript==
// @name		TEST Trello Transparent Menu
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	That's NOT working
// @author		kapsilon
// @license		MIT
// @match		https://trello.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Set Side Menu Transparent
	wmAddNewStyle(`
		.board-menu, .board-menu-tab-content {
			background-color: rgba(244, 245, 247, 0.75);
		}
	`)
})();
