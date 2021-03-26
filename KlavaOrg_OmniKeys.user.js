// ==UserScript==
// @name		KlavaOrg OmniKeys
// @namespace	https://vash.omnimir.ru/
// @version		0.6
// @description	OmniKeys Keyboard for Klava.Org
// @author		kapsilon
// @license		MIT
// @match		https://klava.org/*
// @require 	https://raw.githubusercontent.com/OmniMir/WebMonkey/master/lib.min.js
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	//Start on page load to take effect
	window.addEventListener("load", () => AddOmniKeys(), false);

	//Hide Elements
	function AddOmniKeys() {
		keyboards = {
			eng: {
				qwerty: [
					"`<sup><sup>~</sup></sup>",
					"!<sup>1</sup>",
					"@<sup>2</sup>",
					"#<sup>3</sup>",
					"$<sup>4</sup>",
					"%<sup>5</sup>",
					"^<sup>6</sup>",
					"&amp;<sup>7</sup>",
					"*<sup>8</sup>",
					"(<sup>9</sup>",
					")<sup>0</sup>",
					"_<sup><sup>-</sup></sup>",
					"=<sup>+</sup>",
					"Q",
					"W",
					"E",
					"R",
					"T",
					"Y",
					"U",
					"I",
					"O",
					"P",
					"[<sup>{</sup>",
					"]<sup>}</sup>",
					"\\<sup>|</sup>",
					"A",
					"S",
					"D",
					"F",
					"G",
					"H",
					"J",
					"K",
					"L",
					";<sup>:</sup>",
					"'<sup>\"</sup>",
					"Z",
					"X",
					"C",
					"V",
					"B",
					"N",
					"M",
					",<sup>&lt;</sup>",
					".<sup>&gt;</sup>",
					"/<sup>?</sup>",
				],
			},
			rus: {
				йцукен: [
					"Ё",
					"!<sup>1</sup>",
					"@<sup>2</sup>",
					"#<sup>3</sup>",
					"$<sup>4</sup>",
					"%<sup>5</sup>",
					"^<sup>6</sup>",
					"&amp;<sup>7</sup>",
					"*<sup>8</sup>",
					"(<sup>9</sup>",
					")<sup>0</sup>",
					"_<sup><sup>-</sup></sup>",
					"=<sup>+</sup>",
					"Й",
					"Ц",
					"У",
					"К",
					"Е",
					"Н",
					"Г",
					"Ш",
					"Щ",
					"З",
					"Х",
					"Ъ",
					"\\<sup>/</sup>",
					"Ф",
					"Ы",
					"В",
					"А",
					"П",
					"Р",
					"О",
					"Л",
					"Д",
					"Ж",
					"Э",
					"Я",
					"Ч",
					"С",
					"М",
					"И",
					"Т",
					"Ь",
					"Б",
					"Ю",
					".<sup>,</sup>",
				],
			},
		};
	}
})();
