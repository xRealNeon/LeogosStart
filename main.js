var url = new URL(window.location.href);
var engine = url.searchParams.get("engine");
var customurl = url.searchParams.get("curl");
var customparam = url.searchParams.get("cparam");
var sform = document.getElementById("search");
var sfield = document.getElementById("searchf");

switch (engine == null ? null : engine.toLowerCase()) {
    case "google":
        console.log("Suchmaschine gesetzt auf: Google");
        sfield.placeholder = "Google Suche";
        sform.action = "https://www.google.de/search";
        break;
    case "duckduckgo":
        console.log("Suchmaschine gesetzt auf: Duckduckgo");
        sfield.placeholder = "Duckduckgo Suche";
        sform.action = "https://duckduckgo.com/";
        break;
    case "bing":
        console.log("Suchmaschine gesetzt auf: Bing");
        sfield.placeholder = "Bing Suche";
        sform.action = "https://www.bing.com/search";
        break;
    case "ecosia":
        console.log("Suchmaschine gesetzt auf: Ecosia");
        sfield.placeholder = "Ecosia Suche";
        sform.action = "https://www.ecosia.org/search";
        break;
    default:
        console.log("Suchmaschine gesetzt auf: Google");
        sfield.placeholder = "Google Suche";
        break;
}

if (customurl != null) {
    var surl = new URL(customurl);
    sfield.placeholder = surl.hostname + " Suche";
    console.log("Benutzerdefinierte Such-URL festgelegt: " + customurl);
    sform.action = customurl;
}

if (customparam != null) {
    console.log("Benutzerdefinierten Suchparameter festgelegt: " + customparam);
    sfield.name = customparam;
}

console.log("Gratulation, du hast die Developer Tools gefunden dann zeige ich dir wie du die Suchmaschine ändern kannst.");
console.log("Mit dem Parameter \"engine\" kannst du zwichen Google, Duckduckgo, Bing und Ecosia wechseln.");
console.log("Wenn du eine andere Suchmaschine benutzen willst, kannst du die url der Suchmaschine mit dem \"curl\" Parameter und den Such Parameter mit dem \"cparam\" Parameter setzen.");
console.log("Beispiel: https://example.com/?engine=ecosia");
console.log("Beispiel: https://example.com/?curl=https://www.ecosia.org/search&cparam=q");