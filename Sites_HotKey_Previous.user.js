// ==UserScript==
// @name		Sites HotKey Previous
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Press LEFT/RIGHT to CONTROL
// @author		kapsilon
// @match		https://animejoy.ru/*
// @match		https://baibako.tv/*
// @match		https://comicsdb.ru/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press Left Arrow to Previous
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowLeft") {
				//Disable Default Action
				event.preventDefault();
				//AnimeJoy
				wmClick(".page_prev  a");
				//Baibako
				wmClick(".index a");
				//ComicsDB
				wmClick(".previous a");
				wmClick("small a");
			}
		},
		false
	);
	//Press Right Arrow to Next
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowRight") {
				//Disable Default Action
				event.preventDefault();
				//AnimeJoy
				wmClick(".page_next  a");
				//Baibako
				wmClickLast(".index a");
				//ComicsDB
				wmClick(".next a");
				wmClickLast("small a");
			}
		},
		false
	);
})();
