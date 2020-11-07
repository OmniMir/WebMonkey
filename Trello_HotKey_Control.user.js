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

				//Click Save Button
				wmClick(".confirm.js-save-edit");
				//Click Create One Card
				wmClick(".js-cancel.full");
				//Click Update Attachment
				wmClick(".js-edit-attachment.primary");
			}
		},
		false
	);

	//Context Menu Switch Off (Now It's Real App)
	window.addEventListener(
		"contextmenu",
		function (event) {
			//Context Menu Returns with Ctrl
			if (event.ctrlKey) {
				return;
			}
			//Disable Default Action
			else {
				event.preventDefault();
			}
		},
		false
	);
})();
