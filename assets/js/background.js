chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    for (var i = 0; i < details.responseHeaders.length; ++i) {
      if (details.responseHeaders[i].name.toLowerCase() == "x-frame-options") {
        details.responseHeaders.splice(i, 1);
        return { responseHeaders: details.responseHeaders };
      }
    }
  },
  { urls: ["*://*.4devs.com.br/*"] },
  ["blocking", "responseHeaders"]
);

document.addEventListener("DOMContentLoaded", function () {
  var backButton = document.getElementById("backButton");
  backButton.addEventListener("click", function () {
    var iframe = document.getElementById("site-iframe");
    iframe.contentWindow.history.back();
  });
});
