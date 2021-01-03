// ==UserScript==
// @name		Trello HotKey Control
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Ctrl+F to Search, Ctrl+S to Save
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
	}
})();

