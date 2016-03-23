
var xhr = new XMLHttpRequest();
var str = "https://api.imgur.com/3/gallery/hot/viral/0.json";
xhr.open("GET", str, false);
xhr.setRequestHeader("Authorization", "Client-ID 5101525199200b1");
xhr.send();
var json = xhr.responseText;
var obj = JSON.parse(json);

document.getElementById("search").addEventListener("click", function () {
    document.getElementById("pictures").innerHTML = "";
    searchKeyword(document.getElementById("input").value.toLowerCase());
});

for (var i = 0, max = obj.data.length; i < max; i++) {
    var node = document.createTextNode(obj.data[i].title);
    document.getElementById("hottest").appendChild(node);
    var br = document.createElement("br");
    document.getElementById("hottest").appendChild(br);
}
function searchKeyword(keyword) {
    if (keyword == null) {
        return;
    }
    for (var i = 0, max = obj.data.length; i < max; i++) {
        var title = obj.data[i].title.toLowerCase();
        if (title.search(keyword) !== -1) {
            var img = new Image();
            img.src = obj.data[i].link;
            if (img.src.search(".gif") !== -1) {
                var newsrc = img.src.split("h.");
                img.src = newsrc[0] + "." + newsrc[1];
            }
            if (img.src.search("/a/") !== -1) {
                var album = requestjuttu(obj.data[i].id);
                img.src = album.data.images[0].link;
                var link = document.createElement('a');
                var node = document.createTextNode("(album with " + album.data.images.length + " pictures)");
                link.appendChild(node);
                link.href = album.data.link;
                document.getElementById("pictures").appendChild(link);

            }
            var node = document.createTextNode(obj.data[i].title);
            document.getElementById("pictures").appendChild(node);
            img.style.cssText = 'display: block; margin-left: auto; margin-right: auto; padding:10px 0px 10px 0px; max-width: 85%';
            document.getElementById("pictures").appendChild(img);
        }
    }
}
function requestjuttu(id) {
    var xhr = new XMLHttpRequest();
    var str = "https://api.imgur.com/3/gallery/album/" + id;
    xhr.open("GET", str, false);
    xhr.setRequestHeader("Authorization", "Client-ID 5101525199200b1");
    xhr.send();
    var json = xhr.responseText;
    var obj = JSON.parse(json);
    return obj;
}

