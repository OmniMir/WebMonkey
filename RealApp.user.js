// ==UserScript==
// @name		RealApp
// @namespace	https://vash.omnimir.ru/
// @version		1.0
// @description	No Context Menu
// @author		kapsilon
// @match		https://boardgamearena.com/*
// @match		https://cloudconvert.com/*
// @match		https://deepwork.fm/
// @match		https://mail.google.com/mail/*
// @match		https://photos.google.com/*
// @match		https://app.grammarly.com/*
// @match		https://www.lingvolive.com/*
// @match		https://noises.online/
// @match		https://www.shazam.com/*
// @match		https://spaces.fm/
// @match		https://trello.com/*
// @match		ttps://yandex.ru/maps/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start with right click
	window.addEventListener("contextmenu", (event) => NoContextMenu(event), false);

	//Context Menu Switch Off (Now It's Real App)
	function NoContextMenu(event) {
		//Context Menu Returns with Ctrl
		if (event.ctrlKey) {
			return;
		}
		//Disable Default Action
		else {
			event.preventDefault();
		}
	}
})();
