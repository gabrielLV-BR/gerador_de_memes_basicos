function createMeme(linke, title, subtitle)
{
    document.getElementById("memeTitle").innerHTML = title;
    document.getElementById("memeSubtitle").innerHTML = subtitle;

	if(linke != ''){
		document.getElementById("memeImage").src = linke;
	}
}