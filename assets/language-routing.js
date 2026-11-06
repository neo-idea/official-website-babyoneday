(function () {
  "use strict";

  var STORAGE_KEY = "babyoneday-language";

  function readStoredLanguage() {
    try {
      var value = window.sessionStorage.getItem(STORAGE_KEY);
      return value === "zh" || value === "en" ? value : null;
    } catch (error) {
      return null;
    }
  }

  function storeLanguage(language) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      // Private-browsing modes may deny storage. Automatic routing still works.
    }
  }

  function requestedLanguage(parameters) {
    var value = (parameters.get("lang") || "").toLowerCase();
    if (value === "zh" || value.indexOf("zh-") === 0) return "zh";
    if (value === "en" || value.indexOf("en-") === 0) return "en";
    return null;
  }

  function prefersChinese() {
    var languages = window.navigator.languages;
    var primary = ((languages && languages.length ? languages[0] : window.navigator.language) || "").toLowerCase();
    return primary.indexOf("zh") === 0;
  }

  var currentUrl = new URL(window.location.href);
  var routingScript = document.currentScript;
  var scriptUrl = new URL(routingScript.src);
  var siteBase = scriptUrl.pathname.replace(/\/assets\/language-routing\.js$/, "");
  var explicitLanguage = requestedLanguage(currentUrl.searchParams);
  var language = explicitLanguage || readStoredLanguage();

  if (explicitLanguage) {
    storeLanguage(explicitLanguage);
    currentUrl.searchParams.delete("lang");
    window.history.replaceState(null, "", currentUrl);
  }

  if ((language || (prefersChinese() ? "zh" : "en")) !== "en") return;

  var path = currentUrl.pathname;
  var routePath = path.slice(siteBase.length);
  var normalizedPath = routePath.replace(/\/index\.html$/, "/");
  var targetPath = null;

  if (normalizedPath === "/") {
    targetPath = siteBase + "/en/";
  } else if (/^\/[^/]+\.html$/.test(normalizedPath)) {
    targetPath = siteBase + "/en" + normalizedPath;
  }

  if (!targetPath || targetPath === path) return;
  currentUrl.pathname = targetPath;
  window.location.replace(currentUrl.href);
})();
