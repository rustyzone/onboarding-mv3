
try{
//On first install open onboarding
chrome.runtime.onInstalled.addListener(r => {
  if(r.reason == 'install'){
    //first install
    //show onboarding page
    chrome.tabs.create({
      url: 'onboarding-page.html'
    });
  };
});


//ON page change
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    const tabId = tabs[0].id;
    // read changeInfo data and do something with it (like read the url)
    if (changeInfo.url) {
      //if have all_urls permissions...
      chrome.scripting.executeScript({
        //  ^^ This line works but according to the offical docs it should be chrome.scripting.executeScript
        files: ['contentScript.js'],
        target: {tabId: tabId}
      });
    }
  });
});


}catch(e){
  console.log(e);
}
