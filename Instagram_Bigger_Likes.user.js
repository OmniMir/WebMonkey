// ==UserScript==
// @name		Instagram Bigger Likes
// @namespace	https://vash.omnimir.ru/
// @version		0.1
// @description	Numbaers can be BIG
// @author		kapsilon
// @license		MIT
// @match		https://www.instagram.com/*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Add new style for existing class
	let bigLikes = document.createElement("style");
	bigLikes.type = "text/css";
	bigLikes.innerText = `
			.-V_eO {
			font-size: 50px;
			line-height: 50px;
			}
		`;
	document.head.appendChild(bigLikes);
})();
