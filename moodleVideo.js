(function () {
    var img = new Image();
    img.src = "https://hitwebcounter.com/counter/counter.php?page=9442741&style=0006&nbdigits=5&type=page&initCount=0";
    let htmlContent = document.documentElement.outerHTML;
    let regex = /https:\/\/.*?\.mp4"/g;
    let matches = htmlContent.match(regex);
    if (matches) {
        let url = matches[0].replace(/"/g, "");
        window.open(url);
    } else {
        alert("本網頁無影片!");
    }
})();
//By Eric form NCKUEE 2023
