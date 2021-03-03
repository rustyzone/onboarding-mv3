const button = document.querySelector('button');
button.addEventListener('click', event => {
  chrome.permissions.request({
    origins: ["<all_urls>"]
  });
});
