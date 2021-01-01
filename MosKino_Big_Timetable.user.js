// ==UserScript==
// @name		MosKino Big Timetable
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Set Timetable BIGGER
// @author		kapsilon
// @license		MIT
// @match		https://mos-kino.ru/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => bigTimetable(), false);

	//Set Movies Timetable BIGGER
	function bigTimetable() {
		wmAddNewStyle(`
			.widget0{
				height: 2160px !important;
			}
		`)
	}
})();
