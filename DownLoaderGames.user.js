// ==UserScript==
// @name		DownLoader Games
// @namespace	https://vash.omnimir.ru/
// @version		1.0
// @description	Press DOWN to Claim
// @author		kapsilon
// @match		https://freebies.indiegala.com/*
// @match		https://*.itch.io/*
// @match		https://www.steamgifts.com/discussion/zCtNz/free-itchio-games-and-everything-on-100-sale-sorted
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => closeOwnedGame(), false);
	//Press Down to Claim
	window.addEventListener("keydown", (event) => downToClaim(event), false);

	//Press Down to Claim
	function downToClaim(event) {
		if (event.code == "ArrowDown") {
			//Disable Default Action
			event.preventDefault();

			//Itch.io
			//Open All Free Games from steamgifts for last 7 days
			if (document.querySelector(".comment__description h3")) {
				for (let i = 0; i < 7; i++) {
					//Get all links from first seven table
					let gamesFromOneDay = document
						.querySelectorAll(".comment__description h3 + table")
						[i].querySelectorAll("strong a");
					//Click only even links
					for (let j = 0; j <= gamesFromOneDay.length; j++) {
						if (j % 2 == 0) {
							//Pause from DDOS
							setTimeout(() => {
								window.open(gamesFromOneDay[j].href);
							}, 500);
						}
					}
				}
			}
			//Click "No thanks, just take me to the downloads"
			wmClick("a.direct_download_btn");
			//Click "Download or Claim" Button
			wmClick("a.buy_btn");
			//Click "Claim Game" Button
			wmClick("button.button");

			//IndieGala
			//Open All Freebies
			if (document.querySelector(".products-row a")) {
				document.querySelectorAll(".products-row a").forEach((element) => {
					window.open(element.href);
				});
			}
			//Click Download Button
			wmClick(".developer-product-download-button-cont > button");
		}
	}

	//Close if you already own it
	function closeOwnedGame() {
		//Itch.io
		if (document.querySelector(".purchase_banner")) {
			wmCloseTab();
		}
		if (document.querySelector(".download_btn")) {
			wmCloseTab();
		}

		//IndieGala
		if (document.querySelector(".developer-product-download-button-login")) {
			wmCloseTab();
		}
	}
})();
