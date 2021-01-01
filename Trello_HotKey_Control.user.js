// ==UserScript==
// @name		Trello HotKey Control
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Press Ctrl+F to Search
// @author		kapsilon
// @match		https://trello.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	window.addEventListener(
		"keydown",
		function (event) {
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
			else if (event.code == "KeyS" && event.ctrlKey) {
				//Disable Default Action
				event.preventDefault();

				//Click Add Card Button
				wmClick(".js-add-card.confirm");
				//Click Create One Card
				wmClick(".js-cancel.full");
				//Click Save Card Button
				wmClick(".js-save-edits.primary");
				//Click Save Description Button
				wmClick(".js-save-edit.confirm");
				//Click Update Attachment
				wmClick(".js-edit-attachment.primary");
			}
		},
		false
	);
})();
