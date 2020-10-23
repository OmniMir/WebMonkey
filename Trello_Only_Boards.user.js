// ==UserScript==
// @name		Trello Only Boards
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	View Your Boards Not Useless Dashboard
// @author		kapsilon
// @license		MIT
// @match		https://trello.com/
// @grant		none
// @run-at		document-start
// ==/UserScript==

(function () {
	"use strict";
	//URL for All Boards
	let allBoardsURL = "https://trello.com/your/boards"
	//Open URL in Same Tab
	window.open(allBoardsURL, "_self");
})();
