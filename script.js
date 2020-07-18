function createMeme(link, title, subtitle)
{
    document.getElementById("memeTitle").innerHTML = title;
    document.getElementById("memeSubtitle").innerHTML = subtitle;
    
    document.getElementById("memeImage").src = link;
}