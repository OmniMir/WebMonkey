// ==UserScript==
// @name		Comics HotKey Downloader
// @namespace	https://vash.omnimir.ru/
// @version		0.8
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @match		https://boosty.to/*
// @match		http://cm-project.com/*
// @match		http://dccomics.ru/*
// @match		https://drawnstories.ru/*
// @match		http://frankengeek.ru/*
// @match		https://hunderbridge.bitbucket.io/*
// @match		https://lectoribenevolosalutem.blogspot.com/*
// @match		https://manga-chan.me/*
// @match		https://omnizod-comics.ucoz.ru/*
// @match		https://realdealteam.blogspot.com/*
// @match		http://rikudou.ru/*
// @match		https://rp-universe.ru/*
// @match		https://savageworld.ucoz.ru/*
// @match		http://spaikcomics.moy.su/*
// @match		https://sudya-dredd.ru/*
// @match		http://supercomics.ru/*
// @match		https://vk.com/*?w=wall-*
// @match		https://vk.com/@*
// @match		https://vk.com/doc*
// @match		https://vk.com/wall-*
// @match		https://vk.com/topic-*
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
				//Disable Default Action
				event.preventDefault();

				//Boosty
				wmClick(".FileBase_link_1b7fa");
				//ComicsManiac
				wmClick(".yad a");
				//DCComics
				wmClickLast(".kp"); //Maybe two links on page
				//DrawnStories
				wmClickLast("#idds26 a");
				//FrankenGeek, Omnizod, SpaikComics & SuperComics
				wmClick(".eBlock a");
				//HunderBridge
				wmClick("#links a");
				//LBS
				wmClick(".separator ~ a");
				//Manga-Chan
				wmClick("#content a[href^='/download/'");
				//RealDealTeam
				wmClick(".article-content a[href^='https://yadi.sk/d/'");
				//Rikudou-Sennin Clan
				wmClickLast("#content section a");
				//RussianProjectUniverse
				wmClick(".tabs-sel a");
				//SavageWorld
				wmClick(".eMessage a");
				//SudyaDredd
				wmClickLast("a[href^='https://rocld.com/']");
				//VK Only one Post
				wmClick(".big_wall .mail_link");
				wmClick(".big_wall .lnk");
				wmClick(".big_wall .page_doc_title");
				//VK Third style
				wmClick(".flat_button.fl_r");
				//VK Fourth style
				wmClick(".thumbed_link a");
				//VK Article
				wmClick(".article_decoration_before a[href^='/away.php?to=https%3A%2F%2Fyadi.sk']");
				wmClick(".article_decoration_first a[href^='/away.php?to=https%3A%2F%2Fyadi.sk']");
				//VK Post in front of Wall
				wmClick("#wk_content .article_snippet");
				wmClick("#wk_content .media_link__title");
				wmClick("#wk_content .mail_link");
				wmClick("#wk_content .page_doc_title");
				//WonderComics
				wmClick("input[value='СКАЧАТЬ КОМИКС']");

				//And Close Opened Tab
				wmWaitAndCloseTab();
			}
		},
		false
	);
})();
