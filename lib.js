// ==UserScriptLibrary==
// @name		WebMonkey Library
// @namespace	https://vash.omnimir.ru/
// @version		1.6
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
function wmWaitAndRemove(cssSelector) {
	setTimeout(() => {
		wmRemove(cssSelector);
	}, 2000);
}
//Wait 4 seconds and Remove element by CSS
function wmWaitWaitAndRemove(cssSelector) {
	setTimeout(() => {
		wmRemove(cssSelector);
	}, 4000);
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
//Click element by CSS and its order
function wmClickNumber(cssSelector, order) {
	if (document.querySelector(cssSelector)) {
		//Choosing only link by order
		document.querySelectorAll(cssSelector)[order - 1].click();
	}
}
//Add new/changed custom CSS Style to page
function wmAddNewStyle(cssStyle) {
	//Processing of CSS Style to one line
	cssStyle = cssStyle.replace(/(\n|\t)/g, "");
	//Add CSS Style to Head Section
	let newStyle = document.createElement("style");
	newStyle.type = "text/css";
	newStyle.innerText = cssStyle;
	document.head.appendChild(newStyle);
}
//Close Any Tab (Works ONLY with AutoCloser.user.js)
function wmCloseTab() {
	//Hardcoded URl in AutoCloser that granted ability to close Tab
	//Because Chrome is just as: "Scripts may close only the windows that were opened by them."
	window.open("https://vash.omnimir.ru/tabautoclose/", "_self");
}
//Wait 2 seconds and Close Any Tab (Works ONLY with AutoCloser.user.js)
function wmWaitAndCloseTab() {
	setTimeout(() => {
		wmCloseTab();
	}, 2000);
}
