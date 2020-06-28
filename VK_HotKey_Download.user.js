// ==UserScript==
// @name		VK HotKey Download
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	Press DOWN to DOWNload
// @author		kapsilon
// @license		MIT
// @match		https://vk.com/*?w=wall-*
// @match		https://vk.com/@*
// @match		https://vk.com/doc*
// @match		https://vk.com/wall*
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
				//Only one Post
				wmClick(".big_wall .mail_link");
				//Second style
				wmClick(".page_doc_title");
				//Third style
				wmClick(".flat_button.fl_r");
				//Fourth style
				wmClick(".thumbed_link a");
				//Article
				wmClick(".article_decoration_before a[href^='/away.php?to=https%3A%2F%2Fyadi.sk']");
				//Post in front of Wall
				wmClick("#wk_content .article_snippet");
				wmClick("#wk_content .media_link__title");
				wmClick("#wk_content .mail_link");
			}
		},
		false
	);
})();
