// ==UserScript==
// @name		AliExpress Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://aliexpress.com/*
// @match		https://aliexpress.ru/*
// @match		https://*.aliexpress.com/*
// @match		https://*.aliexpress.ru/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Hide Top Banners
		wmHide(".top-banner-container");
		wmHide(".col-xs-48 > div > a");
		//Hide Mobile App Ads
		wmHide(".ng-mobile");
		wmHide(".mobile-app");
		//Hide Social Buttons
		wmHide(".product-fix-sns");
		//Hide Shopping Cart Footer
		wmHide(".recommend-container");
		//Hide Survey Button
		wmHide(".survey-link");
		//Hide Footer
		wmHide(".footer-copywrite");
		wmWaitAndHide(".site-footer");
		//Hide Eva
		wmWaitAndHide("#J_xiaomi_dialog");
	}

	//Hide Clock Icon at Orders
	wmAddNewStyle(`
		.left-sendgoods-day:before {
			display: none;
		}
	`)
})();
