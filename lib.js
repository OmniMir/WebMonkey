// ==UserScriptLibrary==
// @name		WebMonkey Library
// @namespace	https://vash.omnimir.ru/
// @version		1.0
// @description	Some useful functions for other WebMonkey Scripts
// @author		kapsilon
// @license		MIT
// @grant		none
// ==/UserScriptLibrary==
// Add to UserScript Header "// @require https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.js"
"use strict";
//Hide element by CSS
function wmHide(cssSelector) {
	if (document.querySelector(cssSelector)) {
		document.querySelector(cssSelector).style.display = "none";
	}
}
//Remove element by CSS
function wmRemove(cssSelector) {
	if (document.querySelector(cssSelector)) {
		document.querySelector(cssSelector).remove();
	}
}
//Wait 2 seconds and Hide element by CSS
function wmWaitAndHide(cssSelector) {
	setTimeout(() => {
		wmHide(cssSelector);
	}, 2000);
}
//Wait 2 seconds and Remove element by CSS
function wmWaitAndHide(cssSelector) {
	setTimeout(() => {
		wmRemove(cssSelector);
	}, 2000);
}
//Hide All elements by CSS
function wmHideAll(cssSelector) {
	document.querySelectorAll(cssSelector).forEach((element) => {
		element.style.display = "none";
	});
}
//Remove All elements by CSS
function wmRemoveAll(cssSelector) {
	document.querySelectorAll(cssSelector).forEach((element) => {
		element.remove();
	});
}
//Click element by CSS
function wmClick(cssSelector) {
	if (document.querySelector(cssSelector)) {
		document.querySelector(cssSelector).click();
	}
}
//Click last element by CSS
function wmClickLast(cssSelector) {
	if (document.querySelector(cssSelector)) {
		let downlinks = document.querySelectorAll(cssSelector);
		//Choosing only last link
		if (downlinks) {
			downlinks[downlinks.length - 1].click();
		}
	}
}
