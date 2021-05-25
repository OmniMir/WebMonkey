// ==UserScript==
// @name		DownLoader Comics
// @namespace	https://vash.omnimir.ru/
// @version		1.0
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @match		https://adamcomics.ucoz.ru/*
// @match		https://boosty.to/*
// @match		http://cm-project.com/*
// @match		http://comix-base.moy.su/*
// @match		http://dccomics.ru/*
// @match		http://dccoms.ru/*
// @match		https://drawnstories.ru/*
// @match		http://elfquest.ucoz.ru/*
// @match		http://frankengeek.ru/*
// @match		https://hunderbridge.bitbucket.io/*
// @match		https://lectoribenevolosalutem.blogspot.com/*
// @match		https://manga-chan.me/*
// @match		https://marvel-comics.moy.su/*
// @match		https://omnizod-comics.ucoz.ru/*
// @match		http://www.otaku-team.ru/*
// @match		http://promethea.katab.asia/*
// @match		http://realdealteam.blogspot.com/*
// @match		https://realdealteam.blogspot.com/*
// @match		http://rikudou.ru/*
// @match		https://rp-universe.ru/*
// @match		https://www.rp-universe.ru/*
// @match		http://rus-bd.com/*
// @match		http://www.rus-bd.com/*
// @match		https://savageworld.ucoz.ru/*
// @match		http://spaikcomics.moy.su/*
// @match		http://spawnalley.ru/*
// @match		https://sudya-dredd.ru/*
// @match		http://super-comics.ru/*
// @match		http://supercomics.3dn.ru/*
// @match		http://supercomics.ru/*
// @match		https://swcomics.ru/*
// @match		https://www.turtlepower.ru/*
// @match		https://vk.com/*w=wall-*
// @match		https://vk.com/@*
// @match		https://vk.com/doc*
// @match		https://vk.com/photo-*
// @match		https://vk.com/wall-*
// @match		https://vk.com/*page-*
// @match		https://vk.com/topic-*
// @match		http://web-of-comics.3dn.ru/*
// @match		https://wondercomics.3dn.ru/*
// @match		http://young-comics.ru/*
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
				wmClick("a[class*=FileBlock_link_]");
				wmClickLast("a[class*=FileBlock_link_]");
				//ComicsManiac
				wmClick(".yad a");
				//DCComics
				wmClickLast(".kp"); //Maybe two links on page
				//DrawnStories
				wmClickLast("#idds26 a");
				//AdamComics, ComixBase, ElfQuest, FrankenGeek, MarvelComics, Omnizod, SpaikComics, SpawnAlley & SuperComics (uCoz Sites)
				wmClick(".eBlock a[href^='/load/0']");
				//HunderBridge
				wmClick("#links a");
				//LBS
				wmClickLast(".entry-content a[target='_blank']");
				//MangaChan
				wmClick("#download_table a[href^='/engine/download.php']");
				//OtakuTeam
				wmClickLast(".type-post > ul li a");
				//Promethea
				wmClickLast(".t776__btn_second");
				//RealDealTeam
				wmClick(".article-content a[href^='https://yadi.sk/d/']");
				//Rikudou-Sennin Clan
				wmClickLast("#content section a");
				//RusBD
				wmClickLast(".contentpaneopen a[href^='https://cloud.mail.ru/public/']");
				//RussianProjectUniverse
				wmClick(".tabs-sel a");
				//SavageWorld
				wmClick(".eMessage p a");
				//SudyaDredd
				wmClickLast("a[href^='https://rocld.com/']");
				//SuperComics
				//wmClick(".eBlock a[href^='https://yadi.sk/d/']");
				//SWComics
				wmClick("td[width='200'] a");
				//TurtlePower
				wmClickLast(".kr_postbita_article a");
				//VK Only one Post
				wmClick(".big_wall .mail_link");
				wmClick(".big_wall .lnk");
				wmClick(".big_wall .page_doc_title");
				//wmClick(".wall_module .media_desc__doc a");
				//VK Other
				wmClick(".flat_button.fl_r");
				//wmClick(".thumbed_link a");
				//VK Article
				wmClick(".article_decoration_before.article_decoration_last a[href^='/away.php?to=https%3A%2F%2Fyadi.sk']");
				//wmClick(".article_decoration_before a[href^='/away.php?to=https%3A%2F%2Fyadi.sk']");
				//wmClick(".article_decoration_last a[href^='/away.php?to=https%3A%2F%2Fyadi.sk']");
				//VK Photo
				wmClick("#pv_box .page_doc_title");
				//VK Post as Wall
				wmClick("#page_wall_posts .media_link__title");
				//VK Post in front of Wall
				wmClick("#wk_content .article_snippet");
				wmClick("#wk_content .media_link__title");
				wmClick("#wk_content .mail_link");
				wmClick("#wk_content .page_doc_title");
				wmClick("#wk_content .media_desc .lnk");
				wmClick("#wk_content .thumbed_link__title");
				wmClick("#wk_content .wall_post_text a[href^='/away.php?to=https%3A%2F%2Fcloud.mail.ru']");
				wmClick("#wk_content .wall_post_text a[href^='https://vk.com/doc-']");
				wmClickLast("#wk_content .wk_ext_link");
				wmClickLast("#wk_content a.wk_photo[href^='https://vk.com/doc-']");
				//WebOfComics
				wmClickLast("a img[src='http://web-of-comics.3dn.ru/skachat-2.jpg']");
				//WonderComics
				wmClick("input[value='СКАЧАТЬ КОМИКС']");
				//YoungComics
				wmClick(".wn3p");

				//And Close Opened Tab
				wmWaitAndCloseTab();
			}
		},
		false
	);
})();
