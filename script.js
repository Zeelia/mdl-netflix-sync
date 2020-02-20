var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if(mutation.target==document.querySelector("div.PlayerControlsNeo__button-control-row")){
            var metadata = mutation.target.childNodes[4].childNodes[0].children;
            console.log("Series: "+metadata[0].innerHTML);
            console.log("Season: "+metadata[1].innerHTML.split(" ")[0].split(":")[0].substr(1));
            console.log("Episode: "+metadata[1].innerHTML.split(" ")[0].split(":")[1].substr(1));
            console.log("Title: "+metadata[2].innerHTML)
            //observer.disconnect();
        }
    });
});

observer.observe(document.body, {
    childList: true
  , subtree: true
  , attributes: false
  , characterData: false
});


function connectMDL() {
    
}