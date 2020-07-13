// ==UserScript==
// @name		APKPure Hide Elements
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		https://apkpure.com/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Hide Ads
			wmHide(".left .ad-box-auto");
			wmHide(".left .box[style^='overflow']");
			wmHide(".right div .box");
			//Hide QR
			wmHide("#ad-aegon-side");
			//Hide Footer
			wmHide(".footer");
		},
		false
	);
})();
