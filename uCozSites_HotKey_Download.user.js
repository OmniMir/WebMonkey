// ==UserScript==
// @name		uCozSites HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @match		http://frankengeek.ru/*
// @match		https://savageworld.ucoz.ru/*
// @match		http://spaikcomics.moy.su/*
// @match		https://wondercomics.3dn.ru/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				//FrankenGeek&SpaikComics Style
				wmClick(".eTitle + table a");
				//SavageWorld Style
				wmClick(".eMessage a");
				//WonderComics Style
				wmClick("input[value='СКАЧАТЬ КОМИКС']");
			}
		},
		false
	);
})();
