(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* General style */\nhtml {\n  font-size: 10px;\n}\nbody {\n  margin: 0;\n  font-family: 'Assistant', sans-serif;\n  color: #1f271b;\n  background-color: #fafafa;\n}\n* {\n  box-sizing: border-box;\n}\na:hover {\n  text-decoration: none;\n}\nul {\n  padding: 0;\n}\nli {\n  list-style: none;\n}\nimg {\n  width: 100%;\n  height: auto;\n}\n.centerBlock {\n  margin-left: auto;\n  margin-right: auto;\n}\n.textCenter {\n  text-align: center;\n}\n/* --··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··-- */\n/* Display */\n.block {\n  display: block;\n}\n/* --··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··-- */\n/* Flex */\n.flex {\n  display: flex;\n}\n.flex-column {\n  flex-direction: column;\n}\n.sp-between {\n  justify-content: space-between;\n}\n.sp-around {\n  justify-content: space-around;\n}\n.flex-center {\n  justify-content: center;\n}\n.flex-start {\n  justify-content: flex-start;\n}\n.flex-middle {\n  align-content: center;\n  align-items: center;\n}\n.flex-baseline {\n  align-items: baseline;\n}\n.align-end {\n  align-items: flex-end;\n}\n.wrap {\n  flex-wrap: wrap;\n}\n/* --··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··-- */\n/* Width */\n.w-115{\n  width: 115px;\n}\n.w-100 {\n  width: 100%;\n}\n.w-80 {\n  width: 80%;\n}\n.w-50 {\n  width: 50%;\n}\n/* --··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··-- */\n/* Height */\n.h-400 {\n  height: 400px;\n}\n.h-92vh {\n  height: 92vh;\n}\n.h-100 {\n  height: 100vh;\n}\n.h-100x {\n  height: 100%;\n}\n.h-50 {\n  height: 50px;\n}\n.h-200 {\n  height: 200px;\n}\n.centerVertical {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n/* --··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··-- */\n/* Padding */\n.p-50 {\n  padding: 50px;\n}\n.p-20 {\n  padding: 20px;\n}\n.pt-100 {\n  padding-top: 100px;\n}\n.pt-50 {\n  padding-top: 50px;\n}\n.pt-10 {\n  padding-top: 10px;\n}\n.pb-100 {\n  padding-bottom: 100px;\n}\n.pb-50 {\n  padding-bottom: 50px;\n}\n.pb-10 {\n  padding-bottom: 10px;\n}\n.pb-20 {\n  padding-bottom: 20px;\n}\n.pl-10 {\n  padding-left: 10px;\n}\n.pr-10 {\n  padding-right: 10px;\n}\n.p-0 {\n  padding: 0;\n}\n/* --··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··-- */\n/* Margin */\n.m-0 {\n  margin: 0;\n}\n.mt-10 {\n  margin-top: 10px;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.mt-30 {\n  margin-top: 30px;\n}\n.mt-40 {\n  margin-top: 40px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.mt-60 {\n  margin-top: 60px;\n}\n.mt-100 {\n  margin-top: 100px;\n}\n.mb-10 {\n  margin-bottom: 10px;\n}\n.mb-30 {\n  margin-bottom: 30px !important;\n}\n.mb-100 {\n  margin-bottom: 100px;\n}\n.mr-10 {\n  margin-right: 10px;\n}\n.ml-10 {\n  margin-left: 10px;\n}\n/* --··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··-- */\n/* Opacity */\n.op-4 {\n  opacity: .4;\n}\n.op-5 {\n  opacity: .5;\n}\n.op-6 {\n  opacity: .6;\n}\n.op-7 {\n  opacity: .7;\n}\n.op-8 {\n  opacity: .8;\n}\n.op-9 {\n  opacity: .9;\n}\n.op-10 {\n  opacity: 1;\n}\n/* --··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··-- */\n/* Border */\n.br {\n  border-radius: 0.25rem;\n}\n.br-5 {\n  border-radius: 5px;\n}\n.b-top {\n  border-top: 0.25px solid #a6a4a8;\n}\n.b-bottom {\n  border-bottom: 1px solid #a6a4a8;\n}\n.b-bottomThin {\n  border-bottom: 0.25px solid #a6a4a8;\n}\n/* --··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··-- */\n/* Shadow */\n.shadow {\n  box-shadow: 1px 2px 4px #A6A4A8;\n}\n/* --··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··-- */\n/* Brand Colors */\n.bg-lightSeeGreen {\n  background-color: #28afb0;\n}\n.bg-darkJungleGreen {\n  background-color: #1f271b;\n}\n.bg-darkJungleGreen2 {\n  background-color: #12160f;\n}\n.bg-pineApple {\n  background-color: #44355b;\n}\n.bg-stilDeGrainYellow {\n  background-color: #f4d35e;\n}\n.bg-bigFootFeet {\n  background-color: #ee964b;\n}\n.bg-grey {\n  background-color: #a6a4a8;\n}\n.bg-greyLight {\n  background-color: #fafafa;\n}\n.colorGrey {\n  color: #a6a4a8;\n}\n.colorWhite {\n  color: #ffffff;\n}\n.colorStil {\n  color: #f4d35e;\n}\n.gradient {\n  background-image: linear-gradient(137deg, #28afb0, #44355b);\n}\n.gradient-reverse {\n  background-image: linear-gradient(137deg, #44355b, #28afb0);\n}\n.gradient-opacity {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, .4), rgba(68, 53, 91, .4));\n}\n.gradient-reverse-smooth {\n  background-image: linear-gradient(137deg, #44355b, #28afb0);\n  transition: all 0.5s;\n}\n/* --··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··-- */\n/* Text styles */\n.huge {\n  font-size: 4.4rem;\n  font-weight: 700;\n}\n.h1 {\n  font-size: 3.6rem;\n  font-weight: 700;\n}\n.h2 {\n  font-size: 3rem;\n  font-weight: 700;\n}\n.h3 {\n  font-size: 2.4rem;\n  font-weight: 700;\n}\n.h4 {\n  font-size: 2rem;\n  font-weight: 700;\n}\n.introductionText {\n  font-size: 1.8rem;\n  font-weight: 400;\n}\n.bodyText {\n  font-size: 1.6rem;\n  font-weight: 400;\n}\n.bodyTextBold {\n  font-size: 1.6rem;\n  font-weight: 700;\n}\n.smallText {\n  font-size: 1rem;\n  font-weight: 400;\n}\n.quoteText {\n  font-family: 'Amaranth', sans-serif;\n  font-size: 2.4rem;\n  font-style: italic;\n}\n.mayus {\n  text-transform: uppercase;\n}\n.capitalize {\n  text-transform: capitalize;\n}\n.lineHeight-15 {\n  line-height: 1.5;\n}\n/* --··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··----··--··--··--··--··-- */\n.hoverWhite:hover {\n  color: #ffffff;\n}\n.iconMenu {\n  display: none;\n}\n.hand:hover {\n  cursor: pointer;\n}\nul a:not([href]):not([tabindex]) {\n  color: #a6a4a8;\n}\nul a:not([href]):not([tabindex]):hover {\n  color: #28afb0;\n}\n.overflowH {\n  overflow: hidden;\n}\n.btn-author {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, .8), rgba(68, 53, 91, .8));\n  width: 100%;\n}\n.btn-author-reverse {\n  background-image: linear-gradient(137deg, rgba(68, 53, 91, .8), rgba(40, 175, 176, .8));\n  width: 100%;\n}\n.btn-author:hover {\n  background-image: linear-gradient(137deg, rgba(40, 175, 176, 1), rgba(68, 53, 91, 1));\n}\n.btn-author-reverse:hover {\n  background-image: linear-gradient(137deg, rgba(68, 53, 91, 1), rgba(40, 175, 176, 1));\n}\n.btn-login {\n  background-image: linear-gradient(137deg, rgba(68, 53, 91, .4), rgba(40, 175, 176, .4));\n  margin-top: 0px;\n}\n.btn-login:hover {\n  background-image: linear-gradient(137deg, rgba(68, 53, 91, .8), rgba(40, 175, 176, .8));\n}\n.dinamicBg {\n  min-height: 53px;\n  background-position: center;\n  background-size: cover;\n}\n#gradient {\n  min-height: 53px;\n}\n.page-header-image {\n  background-attachment: fixed;\n}\n.btn-cofluencer {\n  border-radius: 30px;\n  font-size: 1.6rem;\n}\n.coButton {\n  width: 100% !important;\n  display: inline-block;\n  margin-right: 20px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  border-radius: 30px;\n  padding: .5rem .75rem;\n  font-size: 1.6rem;\n}\n@media (max-width: 980px) {\n  .iconMenu {\n    display: block;\n  }\n}\n@media (min-width: 450px) {\n  .page-header .container>.content-center {\n    text-align: left;\n  }\n\n  #signupHome {\n    width: 40%;\n  }\n\n  .brand a {\n    vertical-align: middle;\n    display: inline-block;\n    margin-left: 30px;\n  }\n\n  #homeH1 {\n    font-size: 6rem;\n    padding-right: 100px;\n  }\n\n}\n@media (min-width: 600px) {\n  #homeH1 {\n    font-size: 6.5rem;\n    padding-right: 400px;\n  }\n\n}\n@media (max-width: 600px) {\n}\n@media (max-width: 768px) {\n  #editButton {\n    width: 100%;\n    margin-right: 0px;\n  }\n  \n  .buttons {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #moreInfo {\n    bottom: 20px;\n  }\n\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mpacheco/M/Ironhack/1017_webPT/cofluencer-app/cofluencer-frontend/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map