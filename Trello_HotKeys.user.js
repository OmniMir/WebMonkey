// ==UserScript==
// @name		Trello HotKeys
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Ctrl+F to Search, Ctrl+S to Save, Ctrl+H to Hide
// @author		kapsilon
// @match		https://trello.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start with Keydown
	window.addEventListener("keydown", (event) => HotKeys(event), false);

	//Trello HotKey Control
	function HotKeys(event) {
		//Press Ctrl+F to Search at Board (without language switch bug)
		if (event.code == "KeyF" && event.ctrlKey) {
			//Disable Default Action
			event.preventDefault();

			//Click Invisible Menu Button
			wmClick(".js-open-card-filter");

			//Show Search Menu if it was closed
			wmClick(".js-show-sidebar");
			//Focus to search bar if not autofocused
			document.querySelector(".js-autofocus").focus();
		}

		//Press Ctrl+S to Save Description at Card (shortcut to Ctrl+Enter)
		if (event.code == "KeyS" && event.ctrlKey) {
			//Disable Default Action
			event.preventDefault();

			//Click Add Card Button
			wmClick(".js-add-card.confirm");
			//Click Create One Card Button
			wmClick(".js-cancel.full");
			//Click Save Card Button
			wmClick(".js-save-edits.nch-button");
			//Click Save Description Button
			wmClick(".js-save-edit.confirm");
			//Click Update Attachment Button
			wmClick(".js-edit-attachment.nch-button");
		}

		//Press Ctrl+H to Hide Empty Lists
		if (event.code == "KeyH" && event.ctrlKey) {
			//Disable Default Action
			event.preventDefault();

			//Hide Empty Lists
			hideEmptyLists();
		}
	}

	//Hide Empty Lists
	function hideEmptyLists() {
		//Get All Lists from Board
		let lists = document.querySelectorAll(".js-list");
		for (let i = 0; i < lists.length; i++) {
			//Find List with at Least One Unhided Card
			if (lists[i].querySelector(".list-card:not(.hide)")) {
				//Set List Visible
				lists[i].style.display = "inline-block";
			} else {
				//Set List Invisible
				lists[i].style.display = "none";
			}
		}
	}
})();
