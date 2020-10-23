// ==UserScript==
// @name		Trello Bigger Cards
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Cards are BIGGER now! (For vertical screens)
// @author		kapsilon
// @license		MIT
// @match		https://trello.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Set Card BIGGER
			wmAddNewStyle(`
				.window {
					margin-bottom: 40px;
					margin-top: 200px;
					width: 1000px;
				}
			`);
			//Set Card Description BIGGER
			wmAddNewStyle(`
				.window-main-col {
					padding-left: 48px;
					width: 748px;
				}
			`);
			//Remove Shortened Card Description (ONLY with !important)
			wmAddNewStyle(`
			.is-hide-full {
				max-height: none !important;
				overflow: unset !important;
			}
			.description-content-fade-button {
				display: none !important;
			}
			`);
		},
		false
	);
})();
