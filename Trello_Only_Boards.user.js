// ==UserScript==
// @name		Trello Only Boards
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	View Your Boards Not Useless Dashboard
// @author		kapsilon
// @license		MIT
// @match		https://trello.com/*
// @grant		none
// @run-at		document-start
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => allBoards(), false);

	//Hide Elements
	function allBoards() {
		//URL for All Boards
		let allBoardsURL = "https://trello.com/your/boards";
		//Change Top Trello Link to Boards
		document.querySelector("a._2eXs5ruz0QfFdH").href = allBoardsURL;
		//Open URL in Same Tab
		if (location.href == "https://trello.com/") {
			window.open(allBoardsURL, "_self");
		}
	}
})();
