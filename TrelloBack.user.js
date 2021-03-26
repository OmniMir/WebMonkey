// ==UserScript==
// @name		TrelloBack
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	DownLoad All Boards from Trello
// @author		kapsilon
// @license		MIT
// @match		https://trello.com/*/boards
// @grant		none
// ==/UserScript==
(function () {
	"use strict";
	window.addEventListener("keydown", (event) => HotKeys(event), false);

	function HotKeys(event) {
		//Press Ctrl+F to Search at Board (without language switch bug)
		if (event.code == "ArrowDown" && event.ctrlKey) {
			//Disable Default Action
			event.preventDefault();

			//Find All Tables
			let organizations = document.querySelectorAll(".boards-page-board-section");

			for (let i = 1; i < organizations.length; i++) {
				//Get Organization Name
				let orgName = organizations[i].querySelector("h3").outerText;
				orgName = orgName.replace("Персональные доски", "Персональные");
				orgName = orgName + "_";
				//Find All Tables of Organization
				let tables = organizations[i].querySelectorAll("a.board-tile");
				//Get All Tables of Organization
				for (let j = 0; j < tables.length; j++) {
					let tableLink = tables[j].href;
					//Get URL of Archived Table
					let tableURL = tableLink.slice(0, 29);
					tableURL = tableURL + ".json";
					//Get Name of Archived Table
					let tableName = tableLink.slice(30);
					tableName = decodeURI(tableName);
					tableName = orgName + tableName;
					//Download Archived Table via Time Limit
					setTimeout(() => {
						download(tableURL, tableName);
					}, i * j * 500);
				}
			}
		}
	}

	//Download Page as File
	function download(url, name) {
		//Set New Download Link
		let link = document.createElement("a");
		link.href = url;
		link.download = name;
		//Add New Link to PAge
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
})();
