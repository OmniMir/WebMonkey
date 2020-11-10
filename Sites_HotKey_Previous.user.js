// ==UserScript==
// @name		Sites HotKey Previous
// @namespace	https://vash.omnimir.ru/
// @version		0.7
// @description	Press LEFT/RIGHT to CONTROL
// @author		kapsilon
// @match		https://aliexpress.com/*
// @match		https://aliexpress.ru/*
// @match		https://*.aliexpress.com/*
// @match		https://*.aliexpress.ru/*
// @match		https://animejoy.ru/*
// @match		https://baibako.tv/*
// @match		http://www.baibako.tv/*
// @match		https://www.chookandgeek.ru/*
// @match		https://comicsdb.ru/*
// @match		https://comicvine.gamespot.com/*
// @match		https://www.google.com/search*
// @match		https://*.mail.ru/*
// @match		https://lifehacker.ru/*
// @match		https://naruto-base.su/*
// @match		https://www.ozon.ru/*
// @match		https://pwnews.net/news/*
// @match		https://repack.me/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Press Left Arrow to Previous
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowLeft" && event.ctrlKey) {
				//Disable Default Action
				event.preventDefault();

				//AliExpress
				wmClick(".next-pagination-item.next-prev");
				wmClick(".ui-pagination-prev");
				//AnimeJoy
				wmClick(".page_prev  a");
				//Baibako
				wmClick(".index a");
				//ChookAndGeek & Repack
				wmClick(".pagination a");
				//ComicsDB
				wmClick(".previous a");
				wmClick("small a");
				//ComicVine
				wmClick(".paginate__item.prev a");
				//Google
				wmClick("#pnprev");
				//Lifehacker
				wmClick(".the-paginator__arrow-icon--left");
				//MailRu
				wmClick(".icon_triangle_left");
				//NarutoBase
				wmClick("a.series-link");
				//Ozon
				//NONE
				//PWNews
				wmClick(".catPages1 a");
			}
		},
		false
	);
	//Press Right Arrow to Next
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.code == "ArrowRight" && event.ctrlKey) {
				//Disable Default Action
				event.preventDefault();

				//AliExpress
				wmClick(".next-pagination-item.next-next");
				wmClick(".ui-pagination-next");
				//AnimeJoy
				wmClick(".page_next  a");
				//Baibako
				wmClickLast(".index a");
				//ChookAndGeek & Repack
				wmClickLast(".pagination a");
				//ComicsDB
				wmClick(".next a");
				wmClickLast("small a");
				//ComicVine
				wmClick(".paginate__item.next a");
				//Google
				wmClick("#pnnext");
				//Lifehacker
				wmClick(".the-paginator__arrow-icon--right");
				//MailRu
				wmClick(".icon_triangle_right");
				//NarutoBase
				wmClickLast("a.series-link");
				//Ozon
				wmClick(".b8n5 a");
				//PWNews
				wmClickLast(".catPages1 a");
			}
		},
		false
	);
})();
