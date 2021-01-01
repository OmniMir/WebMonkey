// ==UserScript==
// @name		KGPortal Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://kg-portal.ru/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Header
		wmHide(".ten_topbar + div");

		//Hide Blank Block
		wmHideAll(".cough_block");
		//Hide Social Garbage
		wmHide(".section_social");
		//Hide Promo Ads
		wmHideAll(".kg_promo");

		//Hide Donate Button
		wmHideAll(".news_donate_author");
		wmHideAll(".donate");
		//Hide Sharing Button
		wmHideAll(".sharing");
		//Hide Comment Button
		wmHide(".news_commentsjump");
		//Hide Related Articles
		wmHide(".section-related");

		//Hide Footer
		wmHide(".footer_wrap");
	}
})();
