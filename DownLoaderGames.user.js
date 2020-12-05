// ==UserScript==
// @name		GameStores HotKey Control
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Press DOWN to Claim
// @author		kapsilon
// @match		https://freebies.indiegala.com/*
// @match		https://*.itch.io/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down to Claim
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				//Disable Default Action
				event.preventDefault();

				//Itch.io
				//Click "No thanks, just take me to the downloads"
				wmClick("a.direct_download_btn");
				//Click "Download or Claim" Button
				wmClick("a.buy_btn");
				//Click "Claim Game" Button
				wmClick("button.button");

				//IndieGala
				wmClick("#add-collection-product-col");
			}
		},
		false
	);
	//Close if you already own it
	window.addEventListener(
		"load",
		function () {
			//Itch.io
			if (document.querySelector(".purchase_banner")) {
				wmCloseTab();
			}
			if (document.querySelector(".download_btn")) {
				wmCloseTab();
			}

			//IndieGala
			if (document.querySelector("#added-collection-product-col")) {
				wmCloseTab();
			}
		},
		false
	);
})();
