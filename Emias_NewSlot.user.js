// ==UserScript==
// @name		Emias NewSlot
// @namespace	https://vash.omnimir.ru/
// @version		0.2
// @description	Cards are BIGGER now! (For vertical screens)
// @author		kapsilon
// @license		MIT
// @match		https://emias.info/appointment/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";

	//Start on page load to take effect
	window.addEventListener("load", () => NewSlot(), false);

	//Hide Elements
	function NewSlot() {
		let doctorName = "Сулейманов Саид Лемаевич";

		setTimeout(() => {
			wmClick("button.NzcxsL");
		}, 2000);

		setTimeout(() => {
			let doctors = document.querySelectorAll("button ._2-nIhZ");
			doctors.forEach((doctor) => {
				if (doctor.innerText == doctorName) {
					doctor.click();
				}
			});
		}, 4000);

		setTimeout(() => {
			let firstDayNew = document.querySelector(".yTPSPX._2UpnWt ._1LD3SA").innerText;
			let firstDayOld = localStorage.getItem("firstDay");
			if (firstDayNew != firstDayOld) {
				localStorage.setItem("firstDay", firstDayNew);
				window.alert("Новый день\n" + firstDayNew);
			} else {
				setTimeout(() => {
					window.open("https://emias.info/appointment/list", "_self");
				}, 30 * 60 * 1000);
			}
		}, 6000);
	}
})();
