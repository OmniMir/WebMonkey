// ==UserScript==
// @name		SyncThing Hider
// @namespace	https://vash.omnimir.ru/
// @version		0.1
// @description	Hide annoying elements
// @author		kapsilon
// @license		MIT
// @match		http://127.0.0.1:8384/
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => hideElements(), false);

	//Hide Elements
	function hideElements() {
		//Set Name of Device Bigger
		wmAddNewStyle(`
			.navbar-text {
				font-size: 30px;
				margin-bottom: 0px;
				margin-top: 0px;
			}
		`);
		//Add Shutdown Button to Naviagation Menu
		let shutdown = document.querySelector("a[ng-click='shutdown()'").closest("li");
		document.querySelector(".navbar-right").append(shutdown);
		//Font Bug for Headers of Directories&Devices
		wmAddNewStyle(`
			h4 {
				font-family: auto;
			}
		`);
		//String Length Bug for Russian Version
		setTimeout(() => {
			document.querySelector("button[ng-click='addDevice()'] .ng-scope").innerText = "Добавить устройство";
		}, 1000);
		//Footer
		wmHide(".navbar-fixed-bottom");
	}
})();
