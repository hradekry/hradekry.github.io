var button_is_on = false
var lehkaobt = false
var stredniobt = false
var tezkaobt = false
var nadpis = document.querySelector("#vysledek");
var zacatek = document.querySelector("#start");
var pocet_bodu = document.getElementById("body");
var obrazek = document.getElementById("img");
//var dalsi = document.getElementById("#dalsi:hover")
var kliknuto = false;
var kola = 0;
var body = 0;
var startTime, endTime
var skore = document.getElementById("score")
var tecka = document.getElementById("tečka")
var zebricek = document.getElementById("zebricek")
var show_zebricek = document.getElementById("show_zebricek")
var lehka_zebricek = document.getElementById("lehka_zebricek")
var stredni_zebricek = document.getElementById("stredni_zebricek")
var hide_zebricek = document.getElementById("hide_zebricek")
const stredni = [['Klatovy', '271', '596'], ['Tachov', '124', '458'], ['Stříbro', '209', '479'], ['Domažlice', '185', '579'], ['Horšovský Týn', '195', '553'], ['Stod', '247', '519'], ['Nýřany', '254', '494'], ['Přeštice', '286', '537'], ['Blovice', '333', '539'], ['Nepomuk', '344', '567'], ['Horažďovice', '370', '622'], ['Sušice', '327', '649'], ['Kralovice', '326', '408'], ['Rokycany', '351', '484'], ['Plzeň', '298', '486'], ['Jablunkov', '1576', '528'], ['Třinec', '1552', '497'], ['Český Těšín', '1529', '478'], ['Karviná', '1518', '442'], ['Orlová', '1494', '441'], ['Bohumín', '1477', '424'], ['Hlučín', '1437', '433'], ['Kravaře', '1393', '421'], ['Opava', '1366', '422'], ['Krnov', '1318', '373'], ['Rýmařov', '1220', '426'], ['Bruntál', '1261', '409'], ['Vítkov', '1330', '476'], ['Odry', '1351', '511'], ['Nový Jičín', '1395', '529'], ['Bílovec', '1399', '478'], ['Kopřivnice', '1426', '530'], ['Frenštát pod Radhoštem', '1446', '543'], ['Frýdlant nad Ostravicí', '1478', '533'], ['Frýdek-Místek', '1474', '499'], ['Havířov', '1500', '470'], ['Ostrava', '1456', '454'], ['Uherský Brod', '1315', '722'], ['Luhačovice', '1342', '693'], ['Valašské Klobouky', '1402', '678'], ['Vizovice', '1363', '655'], ['Vsetín', '1395', '614'], ['Rožnov pod Radhoštěm', '1430', '572'], ['Valašské Meziříčí', '1388', '570'], ['Bystřice pod Hostýnem', '1315', '596'], ['Holešov', '1293', '622'], ['Kroměříž', '1251', '635'], ['Uherské Hradiště', '1270', '707'], ['Otrokovice', '1286', '661'], ['Zlín', '1313', '656'], ['Znojmo', '934', '786'], ['Mikulov', '1074', '796'], ['Břeclav', '1135', '812'], ['Hodonín', '1188', '778'], ['Veselí nad Moravou', '1251', '746'], ['Kyjov', '1189', '728'], ['Bučovice', '1159', '684'], ['Vyškov', '1157', '640'], ['Blansko', '1072', '614'], ['Boskovice', '1072', '572'], ['Tišnov', '1015', '621'], ['Rosice', '1011', '676'], ['Ivančice', '1005', '702'], ['Moravský Krumlov', '992', '721'], ['Pohořelice', '1043', '741'], ['Hustopeče', '1095', '754'], ['Slavkov u Brna', '1129', '682'], ['Šlapanice', '1094', '680'], ['Kuřim', '1044', '636'], ['Židlochovice', '1067', '721'], ['Brno', '1062', '672'], ['Jeseník', '1198', '328'], ['Šumperk', '1150', '417'], ['Zábřeh', '1125', '447'], ['Mohelnice', '1137', '480'], ['Litovel', '1170', '502'], ['Konice', '1125', '538'], ['Prostějov', '1182', '576'], ['Přerov', '1265', '583'], ['Lipník nad Bečvou', '1294', '553'], ['Hranice', '1330', '547'], ['Šternberk', '1222', '491'], ['Uničov', '1189', '484'], ['Olomouc', '1218', '537'], ['Přelouč', '812', '399'], ['Chrudim', '868', '426'], ['Hlinsko', '896', '487'], ['Polička', '981', '500'], ['Svitavy', '1028', '488'], ['Moravská Třebová', '1072', '483'], ['Lanškroun', '1074', '431'], ['Králíky', '1096', '382'], ['Žamberk', '1025', '383'], ['Ústí nad Orlicí', '1008', '417'], ['Vysoké Mýto', '952', '431'], ['Holice', '915', '385'], ['Litomyšl', '1022', '442'], ['Česká Třebová', '984', '457'], ['Pardubice', '864', '403'], ['Pacov', '681', '580'], ['Pelhřimov', '733', '596'], ['Humpolec', '763', '557'], ['Světlá nad Sázavou', '777', '517'], ['Havlíčkův Brod', '818', '538'], ['Chotěboř', '839', '500'], ['Žďár nad Sázavou', '903', '550'], ['Nové Město na Moravě', '935', '551'], ['Bystřice nad Pernštejnem', '977', '563'], ['Velké Meziříčí', '922', '618'], ['Náměšť nad Oslavou', '955', '665'], ['Třebíč', '889', '667'], ['Moravské Budějovice', '872', '719'], ['Telč', '792', '676'], ['Jihlava', '822', '605'], ['Kostelec nad Orlicí', '965', '368'], ['Rychnov nad Kněžnou', '982', '353'], ['Dobruška', '953', '317'], ['Nové Město nad Metují', '949', '294'], ['Náchod', '956', '267'], ['Broumov', '995', '213'], ['Trutnov', '903', '219'], ['Vrchlabí', '828', '206'], ['Nová Paka', '801', '246'], ['Jičín', '768', '266'], ['Nový Bydžov', '796', '331'], ['Hořice', '831', '287'], ['Dvůr Králové nad labem', '875', '263'], ['Jaroměř', '899', '294'], ['Hradec Králové', '877', '339'], ['Nový Bor', '581', '158'], ['Česká Lípa', '578', '182'], ['Turnov', '724', '215'], ['Železný Brod', '749', '197'], ['Semily', '762', '210'], ['Jilemnice', '802', '205'], ['Tanvald', '755', '167'], ['Jablonec nad Nisou', '728', '168'], ['Frýdlant', '703', '105'], ['Liberec', '697', '163'], ['Rumburk', '582', '94'], ['Varnsdorf', '599', '111'], ['Děčín', '500', '153'], ['Litoměřice', '482', '228'], ['Roudnice nad Labem', '511', '266'], ['Louny', '405', '284'], ['Žatec', '342', '294'], ['Podbořany', '309', '327'], ['Kadaň', '276', '275'], ['Chomutov', '312', '247'], ['Litvínov', '362', '205'], ['Teplice', '413', '189'], ['Most', '365', '236'], ['Bílina', '397', '221'], ['Lovosice', '461', '241'], ['Ústí nad Labem', '460', '186'], ['Aš', '29', '315'], ['Kraslice', '103', '286'], ['Cheb', '66', '365'], ['Sokolov', '132', '335'], ['Mariánské Lázně', '141', '409'], ['Ostrov', '201', '298'], ['Karlovy Vary', '184', '319'], ['Mnichovo Hradiště', '677', '242'], ['Mladá Boleslav', '665', '269'], ['Lysá nad Labem', '645', '345'], ['Nymburk', '690', '349'], ['Poděbrady', '711', '362'], ['Kolín', '729', '398'], ['Kutná Hora', '747', '424'], ['Čáslav', '774', '438'], ['Vlašim', '656', '504'], ['Votice', '593', '525'], ['Sedlčany', '542', '517'], ['Příbram', '445', '505'], ['Hořovice', '425', '456'], ['Dobříš', '487', '474'], ['Benešov', '609', '478'], ['Černošice', '521', '422'], ['Říčany', '604', '410'], ['Český Brod', '643', '384'], ['Brandýs nad Labem - Stará Boleslav', '605', '350'], ['Neratovice', '569', '323'], ['Mělník', '564', '288'], ['Kralupy nad Vltavou', '521', '328'], ['Slaný', '468', '331'], ['Kladno', '472', '356'], ['Rakovník', '386', '371'], ['Beroun', '465', '415'], ['Praha', '561', '383'], ['Blatná', '413', '589'], ['Strakonice', '418', '644'], ['Vimperk', '387', '711'], ['Prachatice', '441', '728'], ['Český Krumlov', '516', '793'], ['Kaplice', '554', '818'], ['Trhové Sviny', '589', '783'], ['Třeboň', '623', '733'], ['Dačice', '785', '708'], ['Jindřichův Hradec', '681', '687'], ['Soběslav', '613', '652'], ['Tábor', '601', '600'], ['Milevsko', '525', '588'], ['Týn nad Vltavou', '541', '661'], ['Písek', '476', '630'], ['Vodňany', '483', '684'], ['České Budějovice', '554', '737']]
const lehke = [["Praha", 559, 387], ["České Budějovice", 560, 730], ["Brno", 1065, 672], ["Ostrava", 1457, 462], ["Olomouc", 1216, 540], ["Hradec Králové", 877, 340], ["Plzeň", 298, 480], ["Karlovy Vary", 185, 318], ["Ústí nad Labem", 459, 187], ["Liberec", 699, 161], ["Pardubice", 862, 400], ["Jihlava", 822, 603], ["Zlín", 1315, 659], ["Kladno", 472, 358]];
const tezke = []

const nahodne_lehka = []
const nahodne_stredni = []
const nahodne_tezka = []

//if (navigator.userAgent.match(/Mobile/)){
    //document.getElementById("dalsi").transform = scale(1);
//}

function texty(){
    var rank = document.getElementById("global_rank")
    rank.style.display = "block"
    if (typeof c !== "undefined") {
        rank.textContent = "Umístil jsi se na " + c + ". místě na světě!"
    }
    else {
        rank.textContent = "Nedostal jsi se do top 10 na světě"
    }
}

function show_zebricek_buttons() {
    lehka_zebricek.style.display = "block"
    stredni_zebricek.style.display = "block"
    zacatek.style.display = "none"
    show_zebricek.style.display = "none"
}

function hide_ladder() {
    location.reload();
}

function ladder(obtiznost) {
    show_zebricek.style.display = "none"
    lehka_zebricek.style.display = "none"
    stredni_zebricek.style.display = "none"
    const list = []
    getScores(function(scores) {
        for(let i = 0; i < scores.length; i++){
            parsedScore = JSON.parse(scores[i])
            if (parsedScore[2] == obtiznost) {
                list.push(parsedScore)
            }
        }
        var sorted_list = list.sort(function(a, b) {
                    if (a[0] == b[0]) {
                        return a[1] - b[1];
                            }
                    return b[0] - a[0];
        })            
        for(let i = 0; i < scores.length; i++){
            promenna_score = scores[i]
            znovu_submitScore(promenna_score)
        }  
        zebricek.innerHTML =  "#\xa0\xa0\xa0\xa0\xa0" + "Body"+ "\xa0\xa0\xa0\xa0\xa0" + "Čas"  + "<br />" + "1.\xa0\xa0\xa0\xa0" + (sorted_list[0])[0] + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + (sorted_list[0])[1]  + "<br />" + "2.\xa0\xa0\xa0\xa0" + (sorted_list[1])[0] + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + (sorted_list[1])[1] + "<br />" + "3.\xa0\xa0\xa0\xa0" + (sorted_list[2])[0] +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + (sorted_list[2])[1] + "<br />" + "4.\xa0\xa0\xa0\xa0" + (sorted_list[3])[0] +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + (sorted_list[3])[1] + "<br />" + "5.\xa0\xa0\xa0\xa0" + (sorted_list[4])[0] +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + (sorted_list[4])[1] + "<br />" + "6.\xa0\xa0\xa0\xa0" + (sorted_list[5])[0] +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + (sorted_list[5])[1] + "<br />" + "7.\xa0\xa0\xa0\xa0" + (sorted_list[6])[0] +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + (sorted_list[6])[1] + "<br />" + "8.\xa0\xa0\xa0\xa0" + (sorted_list[7])[0] +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + (sorted_list[7])[1] + "<br />" + "9.\xa0\xa0\xa0\xa0" + (sorted_list[8])[0] +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + (sorted_list[8])[1] + "<br />" + "10.\xa0\xa0\xa0\xa0" + (sorted_list[9])[0] +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + (sorted_list[9])[1]
    })
    hide_zebricek.style.display = "block"
}

var znovu_submitScore = function(score, callback) {

    $.post("https://server.loca.lt/submitScore", {score}, function(data)
    {
        if(!data)
        {
            console.log("Server Communication Error");
            callback && callback(false);
            return;
        }
        if(data.error)
        {
            console.log("Server Error: " + data.error);
            callback && callback(false);
            return;
        }
        callback && callback(true);

    });
}

var submitScore = function(score, callback) {
    const global_scores1 = []
    const global_scores2 = []
    $.post("https://server.loca.lt/submitScore", {score}, function(data)
    {
        if(!data)
        {
            console.log("Server Communication Error");
            callback && callback(false);
            return;
        }
        if(data.error)
        {
            console.log("Server Error: " + data.error);
            callback && callback(false);
            return;
        }
        callback && callback(true);

        getScores(function(scores) {
            console.log(scores)
            for(let i = 0; i < scores.length; i++){
                parsedScore = JSON.parse(scores[i])
                if (parsedScore[2] == 0) {
                    global_scores1.push(parsedScore)
                }
                if (parsedScore[2] == 1) {
                    global_scores2.push(parsedScore)
                }
            }
            var sorted_globalScores1 = global_scores1.sort(function(a, b) {
                    if (a[0] == b[0]) {
                        return a[1] - b[1];
                            }
                    return b[0] - a[0];
                  
                });
            var sorted_globalScores2 = global_scores2.sort(function(a, b) {
                    if (a[0] == b[0]) {
                        return a[1] - b[1];
                            }
                    return b[0] - a[0];
                  
                }); 
            if(sorted_globalScores1.length > 10) {
                sorted_globalScores1.pop()
            }
            if (sorted_globalScores2.length > 10) {
                sorted_globalScores2.pop()
            }
            console.log(sorted_globalScores1)
            console.log(sorted_globalScores2)
            for(let i = 0; i < sorted_globalScores1.length; i++) {
                var stringifiedScore1 = JSON.stringify(sorted_globalScores1[i])
                if (stringifiedScore1 == score1) {
                    window.c = i + 1
                }
                znovu_submitScore(stringifiedScore1)
            }
            for(let i = 0; i < sorted_globalScores2.length; i++) {
                var stringifiedScore2 = JSON.stringify(sorted_globalScores2[i])
                if (stringifiedScore2 == score2) {
                    window.c = i + 1
                }
                znovu_submitScore(stringifiedScore2)
            }
            texty()

        })
    });
}

var getScores = function(callback)
    {
        $.post("https://server.loca.lt/highScores", null, function(data)
        {
            if(!data)
            {
                console.log("Server Communication Error");
                callback && callback(false);
                return;
            }
            if(data.error)
            {
                console.log("Server Error: " + data.error);
                callback && callback(false);
                return;
            }
            callback && callback(data.scores);
        })
}


function reset() {
    if (confirm("Určitě chceš resetovat své nejvyšší skóre?")) {
        localStorage.clear()
    }
    else {
        return
    }
}

function highScore(obtiznost) {
    const score_local1 = [body, cas_cislo, 0]
    window.score1 = JSON.stringify(score_local1)
    const score_local2 = [body, cas_cislo, 1]
    window.score2 = JSON.stringify(score_local2)
    const score_local = [body, cas_cislo]
    console.log(score_local1)
    if (localStorage.getItem("highScores_lehke") === null || localStorage.getItem("highScores_stredni") === null || localStorage.getItem("highScores_tezke") === null) {
        localStorage.setItem("highScores_lehke", JSON.stringify([]))
        localStorage.setItem("highScores_stredni", JSON.stringify([]))
        localStorage.setItem("highScores_tezke", JSON.stringify([]))
    }
    console.log(JSON.parse(localStorage.getItem(obtiznost)))
    const nejvyssi_score = JSON.parse(localStorage.getItem(obtiznost))
    if (nejvyssi_score[0] < score_local[0]) {
        localStorage.setItem(obtiznost, JSON.stringify(score_local))
        skore.textContent = "Nové nejvyšší skóre!"
    }
    if (nejvyssi_score[0] == score_local[0]) {
        if (nejvyssi_score[1] > score_local[1]) {
            localStorage.setItem(obtiznost, JSON.stringify(score_local))
            skore.textContent = "Nové nejvyšší skóre!"
        }
        if (nejvyssi_score[1] < score_local[1]) {
            skore.textContent = "Dříve se ti dařilo více :("
        }
    }
    if (nejvyssi_score[0] > score_local[0]) {
        skore.textContent = "Dříve se ti dařilo více :("
    }
    if (nejvyssi_score.length != 2) {
        localStorage.setItem(obtiznost, JSON.stringify(score_local))
        skore.textContent = "Tvoje první skóre!"
    }
    document.getElementById("reset_score").style.visibility = "visible"
    if(lehkaobt == true) {
        submitScore(score1, function(success) // Submit the score
        {
            if(!success) // If score submission failed, exit
            {
                return;
            }
        })
    }
    if(stredniobt == true) {
        submitScore(score2, function(success) // Submit the score
        {
            if(!success) // If score submission failed, exit
            {
                return;
            }
        })
    }
}


function konec_hry() {
    endTime = new Date;
    var cas = endTime - startTime;
    var cas_milisekundy = cas % 1000;
    var cas_sekundy = ((cas - cas_milisekundy) / 1000);
    window.cas_cislo = cas_sekundy + (cas_milisekundy / 1000)
    var cas_minuty = Math.round(cas_sekundy / 60);
    obrazek.style.visibility = "hidden"
    document.body.style.backgroundImage = "url('kdelezi3.jpg')"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "100%"
    nadpis.textContent = ""
    document.getElementById("dalsi").style.visibility = "hidden";
    document.getElementById("otazka").textContent = "Konec hry"
    pocet_bodu.textContent = "Máš " + body + " bodů!"
    document.getElementById("cas").textContent = "Tvůj čas je: " + cas_cislo + " sekund."
    if (lehkaobt == true) {
        highScore("highScores_lehke")
    }
    if (stredniobt == true) {
        highScore("highScores_stredni")
    }
    if (tezkaobt == true) {
        highScore("highScores_tezke")
    }
}

function vybrano_lehke() {
    window.lehkaobt = true
    show_image()
    document.getElementById("diff").style.display = "none"
}

function vybrano_stredni() {
    window.stredniobt = true
    show_image()
    document.getElementById("diff").style.display = "none"
}

function vybrano_tezke() {
    window.tezkaobt = true
    show_image()
    document.getElementById("diff").style.display = "none"
}

function show_buttons() {
    document.getElementById("diff").style.display = "block"
    zacatek.style.display = "none"
    show_zebricek.style.display = "none"
}

function show_image(src) {
    document.body.style.background = "DarkSlateGray", "gray"
    window.startTime = new Date;
    obrazek.style.visibility = "visible";
    vyber();
}

function vyber_lehka() {
    var nahoda = parseInt(Math.floor((Math.random() * lehke.length)));
    console.log(nahoda)
    for (cislo in nahodne_lehka) {
        if (nahodne_lehka[cislo] == nahoda) {
            vyber_lehka()
            return
        }
    }
    nahodne_lehka.push(nahoda)
    console.log(nahodne_lehka)
    window.a = parseInt((lehke[nahoda])[1]);
    window.b = parseInt((lehke[nahoda])[2]);
    nadpis.textContent = "Kde leží " + (lehke[nahoda])[0] + " ?";
}

function vyber_stredni() {
    var nahoda = parseInt(Math.floor((Math.random() * stredni.length)));
    console.log(nahoda)
    for (cislo in nahodne_stredni) {
        if (nahodne_stredni[cislo] == nahoda) {
            vyber_stredni()
            return
        }
    }
    nahodne_stredni.push(nahoda)
    window.a = parseInt((stredni[nahoda])[1]);
    window.b = parseInt((stredni[nahoda])[2]);
    nadpis.textContent = "Kde leží " + (stredni[nahoda])[0] + " ?";
}

function vyber_tezka() {
    var nahoda = parseInt(Math.floor((Math.random() * tezke.length)));
    console.log(nahoda)
    for (cislo in nahodne_tezka) {
        if (nahodne_tezka[cislo] == nahoda) {
            vyber_tezka()
            return
        }
    }
    nahodne_tezka.push(nahoda)
    window.a = parseInt((tezke[nahoda])[1]);
    window.b = parseInt((tezke[nahoda])[2]);
    nadpis.textContent = "Kde leží " + (tezke[nahoda])[0] + " ?";
}

function vyber() {
    tecka.style.visibility = "hidden"
    nadpis.style.color = "black"
    kola = kola + 1
    if (kola == 11) {
        konec_hry()
    }
    else {
        if (lehkaobt == true) {
            vyber_lehka()
        }
        if (stredniobt == true) {
            vyber_stredni()
        }
        if (tezkaobt == true) {
           vyber_tezka()
        }
        window.kliknuto = false
    }  
}
var obr = document.querySelector("#img");
obr.addEventListener("click", function(e)
    {
    if (kliknuto == false) {
        var width = obrazek.clientWidth;
        console.log(width);
        var pomer = 1600 / width;
        var pomer2 = width / 1600;
        var y_offset = window.scrollY
        var rect = e.target.getBoundingClientRect();
        console.log(rect)
        window.x = parseInt((e.clientX - rect.left) * pomer);
        window.y = parseInt((e.clientY - rect.top) * pomer);
        console.log("Souřadnice: " + x + ", " + y);
        console.log(x)
        console.log(a)
        if (((a - x) ** 2 + (b - y) ** 2) ** (1 / 2) <= 40) {
            nadpis.textContent = "SPRÁVNĚ!";
            nadpis.style.color = "DarkGreen";
            body = body + 1
            tecka.style.visibility = "visible"
            tecka.style.left = ((a * pomer2) + rect.left) + "px"
            tecka.style.top = ((b * pomer2) + (rect.top + y_offset)) + "px"
        }
        else {
            nadpis.textContent = "ŠPATNĚ!";
            nadpis.style.color = "FireBrick";
            tecka.style.visibility = "visible"
            tecka.style.left = ((a * pomer2) + rect.left) + "px"
            tecka.style.top = ((b * pomer2) + (rect.top + y_offset)) + "px"
        }
        if (button_is_on == false) {
            document.getElementById("dalsi").style.visibility = "visible";
        }
        window.kliknuto = true
    }
})