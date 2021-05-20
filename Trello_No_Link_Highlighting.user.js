// ==UserScript==
// @name		Trello No Link Highlighting
// @namespace	https://vash.omnimir.ru/
// @version		0.2
// @description	No highlighting for known service links
// @author		kapsilon
// @license		MIT
// @match		https://trello.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Set Smaller Margin for Known Service Links
	wmAddNewStyle(`
		.known-service-icon {
			margin-right: 3px;
		}
		.known-service-link {
			padding: 1px 1px 2px;
		}
	`)
	//Set No Highlighting  for Known Service Links
	wmAddNewStyle(`
		.known-service-link {
			background-color: transparent;
			box-shadow: none;
			color: #172b4d;
		}
		.known-service-link:hover {
			color: #172b4d;
		}
	`)
})();
