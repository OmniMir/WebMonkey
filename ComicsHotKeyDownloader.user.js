// ==UserScript==
// @name		TEST Comics HotKey Downloader
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @match		https://boosty.to/*
// @match		http://cm-project.com/*
// @match		http://dccomics.ru/*
// @match		https://drawnstories.ru/*
// @match		http://frankengeek.ru/*
// @match		https://lectoribenevolosalutem.blogspot.com/*
// @match		https://realdealteam.blogspot.com/*
// @match		https://rp-universe.ru/*
// @match		https://savageworld.ucoz.ru/*
// @match		http://spaikcomics.moy.su/*
// @match		https://sudya-dredd.ru/*
// @match		http://supercomics.ru/*
// @match		https://wondercomics.3dn.ru/*
// @require		https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press Down Arrow to Action
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowDown") {
				//Boosty
				wmClick(".FileBase_link_1b7fa");
				//ComicsManiac
				wmClick(".yad a");
				//DCComics
				wmClickLast(".kp"); //Maybe two links on page
				//DrawnStories
				wmClickLast("#idds26 a");
				//FrankenGeek&SpaikComics
				wmClick(".eTitle + table a");
				//LBS
				wmClick(".separator ~ a");
				//RealDealTeam
				wmClickNumber(".article-content a", 2);
				//RussianProjectUniverse
				wmClick(".tabs-sel a");
				//SavageWorld
				wmClick(".eMessage a");
				//SudyaDredd
				wmClickNumber(".su-column-size-2-3 a", 4);
				wmClick(".FileBase_link_1b7fa");
				//SuperComics
				wmClick(".eBlock a");
				//WonderComics
				wmClick("input[value='СКАЧАТЬ КОМИКС']");
			}
		},
		false
	);
})();
