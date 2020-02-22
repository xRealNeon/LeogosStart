var url = new URL(window.location.href);
var engine = url.searchParams.get("engine");
var customurl = url.searchParams.get("curl");
var customparam = url.searchParams.get("cparam");
var customname = url.searchParams.get("cname");
var sform = document.getElementById("search");
var sfield = document.getElementById("searchf");

function setEngine(name) {
    switch (name) {
        case "google":
            console.log("%cSuchmaschine gesetzt auf: Google", "color: Lime; font-size: 15px;");
            sfield.placeholder = "Google Suche";
            sform.action = "https://www.google.de/search";
            break;
        case "duckduckgo":
            console.log("%cSuchmaschine gesetzt auf: Duckduckgo", "color: Lime; font-size: 15px;");
            sfield.placeholder = "Duckduckgo Suche";
            sform.action = "https://duckduckgo.com/";
            break;
        case "bing":
            console.log("%cSuchmaschine gesetzt auf: Bing", "color: Lime; font-size: 15px;");
            sfield.placeholder = "Bing Suche";
            sform.action = "https://www.bing.com/search";
            break;
        case "ecosia":
            console.log("%cSuchmaschine gesetzt auf: Ecosia", "color: Lime; font-size: 15px;");
            sfield.placeholder = "Ecosia Suche";
            sform.action = "https://www.ecosia.org/search";
            break;
        default:
            console.log("%cSuchmaschine gesetzt auf: Google", "color: Lime; font-size: 15px;");
            sfield.placeholder = "Google Suche";
            break;
    }
}

function setCustomEngine(icustomurl, icustomparam, icustomname) {
    if (icustomurl != null) {
        var surl = new URL(icustomurl);
        sfield.placeholder = surl.hostname + " Suche";
        console.log("%cBenutzerdefinierte Such-URL festgelegt: " + icustomurl, "color: Lime; font-size: 15px;");
        sform.action = icustomurl;
    }

    if (icustomparam != null) {
        console.log("%cBenutzerdefinierten Suchparameter festgelegt: " + icustomparam, "color: Lime; font-size: 15px;");
        sfield.name = icustomparam;
    }

    if (icustomname != null) {
        console.log("%cBenutzerdefinierten Name festgelegt: " + icustomname, "color: Lime; font-size: 15px;");
        sfield.placeholder = icustomname + " Suche";
    }
}

function openProjects() {
    Swal.fire({
        title: '<strong>Projekte</strong>',
        html: '<a href="https://wordpress.nibis.de/leogos/">Schülerfirma R4e1</a><br>' +
            '<a href="https://leogos.de/titan-lg/">Titan-LG (Riesen-3D-Drucker)</a><br>' +
            '<a href="https://leogos.de/marco.nicolai/_/Planetarium/index_.htm">Planetarium</a>',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'ok',
    });
}

console.log("%cGratulation, du hast die Developer Tools gefunden dann zeige ich dir wie du die Suchmaschine ändern kannst.", "color: Crimson; font-size: 20px;");
console.log("%cMit dem Parameter \"engine\" kannst du zwichen Google, Duckduckgo, Bing und Ecosia wechseln.", "color: DarkCyan; font-size: 15px;");
console.log("%cWenn du eine andere Suchmaschine benutzen willst, kannst du die url der Suchmaschine mit dem \"curl\" Parameter, den Such Parameter mit dem \"cparam\" Parameter und den Namen mit dem \"cname\" Parameter setzen.", "color: DarkCyan; font-size: 15px;");
console.log("%cDu kannst auch hier in der Konsole mit der \"setCustomEngine\" funktion testen.", "color: DarkCyan; font-size: 15px;");
console.log("%cBeispiel: " + url.origin + url.pathname + "?engine=ecosia", "color: ForestGreen; font-size: 15px;");
console.log("%cBeispiel: " + url.origin + url.pathname + "?curl=https://www.ecosia.org/search&cparam=q&cname=Ecosia", "color: ForestGreen; font-size: 15px;");
console.log("%cBeispiel: setCustomEngine(\"https://www.ecosia.org/search\", \"q\", \"Ecosia\");", "color: ForestGreen; font-size: 15px;");
console.log();
console.log();

setEngine(engine == null ? null : engine.toLowerCase());
setCustomEngine(customurl, customparam, customname);