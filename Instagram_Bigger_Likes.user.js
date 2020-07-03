// ==UserScript==
// @name		Instagram Bigger Likes
// @namespace	https://vash.omnimir.ru/
// @version		0.2
// @description	Numbaers can be BIG
// @author		kapsilon
// @license		MIT
// @match		https://www.instagram.com/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Add new style for existing class
	wmAddNewStyle(`
			.-V_eO {
			font-size: 50px;
			line-height: 50px;
			}
		`);
})();
