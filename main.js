var url = new URL(window.location.href);
var engine = url.searchParams.get("engine");
var customurl = url.searchParams.get("curl");
var customparam = url.searchParams.get("cparam");
var sform = document.getElementById("search");
var sfield = document.getElementById("searchf");

switch (engine) {
    case "google":
        console.log("Set search engine: google");
        sfield.placeholder = "Google Suche";
        sform.action = "https://www.google.de/search";
        break;
    case "duckduckgo":
        console.log("Set search engine: duckduckgo");
        sfield.placeholder = "Duckduckgo Suche";
        sform.action = "https://duckduckgo.com/";
        break;
    case "bing":
        console.log("Set search engine: bing");
        sfield.placeholder = "Bing Suche";
        sform.action = "https://www.bing.com/search";
        break;
    case "ecosia":
        console.log("Set search engine: ecosia");
        sfield.placeholder = "Ecosia Suche";
        sform.action = "https://www.ecosia.org/search";
        break;
    default:
        console.log("Set search engine: google");
        sfield.placeholder = "Google Suche";
        break;
}

if (customurl != null) {
    var surl = new URL(customurl);
    sfield.placeholder = surl.hostname + " Suche";
    console.log("Set custom search url: " + customurl);
    sform.action = customurl;
}

if (customparam != null) {
    console.log("Set custom search param: " + customparam);
    sfield.name = customparam;
}