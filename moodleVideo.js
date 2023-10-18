(function() {
    let htmlContent = document.documentElement.outerHTML;
    let regex = /https:\/\/.*?\.mp4"/g;
    let matches = htmlContent.match(regex);
    if(matches){
        url = matches[0].replace(/"/g, "");
        window.open(url);
    }else{
        alert("本網頁無影片!");
    }
})();
//By Eric form NCKUEE 2023