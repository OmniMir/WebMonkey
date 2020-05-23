// ==UserScript==
// @name		Kaspersky_Hide_Shields
// @namespace	https://vash.omnimir.ru/
// @version		0.2
// @description	Hide annoying green shields from search
// @author		kapsilon
// @license		MIT
// @match		https://www.google.com/search*
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener(
		"load",
		function () {
			//Waiting to Kapsersky Protection Extension
			setTimeout(() => {
				//Search special image by name and hide all of them
				document.querySelectorAll("img[name=kl_1590231308987]").forEach((element) => {
					element.style.display = "none";
				});
			}, 2000);
		},
		false
	);
})();
