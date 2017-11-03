// ==UserScript==
// @name           Frozen Cookies
// @version        github-latest
// @description    Userscript to load Frozen Cookies written by Icehawk78, forked by Lordshinjo, forked by fishpen0
// @author         fishpen0
// @homepage       https://github.com/fishpen0/FrozenCookies
// @include        http://orteil.dashnet.org/cookieclicker/
// @updateURL      https://rawgit.com/fishpen0/FrozenCookies/master/fc_userscript_loader.js
// @downloadURL    https://rawgit.com/fishpen0/FrozenCookies/master/fc_userscript_loader.js
// @run-at         document-start
// ==/UserScript==

// Dev:       https://github.com/fishpen0/FrozenCookies/development/
// Master:    https://github.com/fishpen0/FrozenCookies/master/
// Github.io: http://fishpen0.github.io/FrozenCookies/

function LoadFrozenCookies() {
    Game.LoadMod('https://rawgit.com/fishpen0/FrozenCookies/master/frozen_cookies.js');
}

window.addEventListener("load", LoadFrozenCookies, false);
