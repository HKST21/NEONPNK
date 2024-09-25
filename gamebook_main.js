// NeonPunk2070_main.js

const NeonPunk2070 = new Gamebook("Neonové Peklo Hong Kongu 2070");


// Úvodní stránka (Intro)
const stranka0 = new Stranka(
  0,
  "Vítej ve světě plném neonových světel a temných stínů. Tento interaktivní NeonPunk2070 ti umožní stát se Ryuem, hackerem na volné noze v Hong Kongu roku 2070. Držíš v rukou svůj osud. Každé rozhodnutí, které uděláš, změní směr příběhu. Život v tomto městě je tvrdý a ovládají ho megakorporace. Ty, jako Ryu, jsi zvyklý přežívat. Jsi zvyklý na to, že musíš porušovat pravidla, aby sis zajistil obživu. Ale dnes, když se setkáš s neznámou ženou jménem Mei, začneš chápat, že ve hře je mnohem víc. Tvoje rozhodnutí ovlivní nejen tvůj vlastní osud, ale i budoucnost celého světa. Svět roku 2070 je krutý a nelítostný. Jsi připraven čelit výzvám, které tě čekají?",
  null, null,
  { dalsiStranka: 1 },  // Číst dále
  "NEONPNK/images/cyberpunk-city.gif",
  null
);

// Stránka 1 – První kapitola
const stranka1 = new Stranka(
  1,
  "Neonové světlo pronikalo skrz hustý smog, když jsem se probíral ulicemi Hong Kongu roku 2070. Jmenuji se Ryu a jsem hacker na volné noze. Život ve městě ovládaném megakorporacemi není snadný, ale vždycky jsem si našel způsob, jak přežít. Všechno se změnilo ten večer, kdy jsem narazil na tajemnou ženu jménem Mei v jednom z nelegálních kyber-barů. Její oči zářily neobvyklým odstínem modré - určitě implantáty. Ale bylo na ní něco víc, něco, co mě okamžitě přitahovalo. 'Slyšela jsem, že jsi nejlepší hacker ve městě,' řekla bez okolků. 'Potřebuji se dostat do systémů Nexus Corp. Zaplatím dobře.' Věděl jsem, že je to nebezpečné. Nexus Corp byla jedna z nejmocnějších korporací na světě. Ale nemohl jsem odolat výzvě - ani té ženě. 'Jsem v tom,' odpověděl jsem...",
  null, null,
  { dalsiStranka: 2 },  // Číst dále
  "NEONPNK/images/neonDragon.jpg",
  null
);

// Stránka 2 – Kapitola 2
const stranka2 = new Stranka(
  2,
  "'Je mi to líto, Ryu,' řekla, když namířila zbraň na mou hlavu. 'Ale nemůžu tě nechat, abys tohle prozradil.' V tom okamžiku se rozezněly poplašné systémy. Bezpečnostní jednotky Nexus Corp vtrhly do místnosti. V nastalém chaosu jsem využil příležitosti a utekl, moje mysl se točila zradou a odhalením. Teď jsem na útěku, skrývám se v temných zákoutích Hong Kongu. Mám informace, které by mohly svrhnout Nexus Corp a možná i celý systém. Ale vím, že Mei je stále tam venku, stejně jako nespočet dalších nepřátel. Každý den je bojem o přežití. Každá noc je naplněna sny o Mei a o tom, co mohlo být. Ale nemohu se vzdát. Příliš toho visí na vlásku...",
  null, null,
  { dalsiStranka: 3 },  // Číst dále
  "NEONPNK/images/neonGirl.jpg",
  null
);

// Stránka 3 – Rozhodovací stránka
const stranka3 = new Stranka(
  3,
  "Moje mysl se točila změtí otázek a pochybností. Byla to past, kterou na mě nastražila Nexus Corp? Nebo je Mei opravdu na mé straně? Neměl jsem čas dlouho přemýšlet. Zatímco jsem se snažil rozhodnout, další zpráva od Nexus Corp mě informovala, že mám jen několik hodin, než mě vystopují. Musel jsem se rozhodnout hned teď.",
  { text: "Vydám se do chrámu a budu věřit Mei, že mi říká pravdu.", dalsiStranka: 4 },
  { text: "Zůstanu skrývat a pokusím se zjistit víc o Nexus Corp.", dalsiStranka: 5 },
  null,  // Na rozhodovacích stránkách není Číst dále
  null
);
// Stránka 4 - méně zásadní rozhodnutí, pokračování úvodní fáze příběhu
let stranka4 = new Stranka(
    4,
    "Jako hacker jsi vždycky pracoval v temnotě, ale tentokrát se věci rychle zkomplikovaly. Skupina, kterou jsi pomáhal svrhnout, se tě snaží polapit. Nexus Corp je teď za tebou, stejně jako nespočet dalších nepřátel. Ulice Hong Kongu jsou neúprosné, a ty jsi na útěku.\n\
    Zastav se na chvíli a rozmysli si, co dál. Je tu možnost pokusit se ukrýt, nebo se můžeš vydat do temných kanálů pod městem. Volba je na tobě.",
    { text: "Ukryj se v blízké budově.", dalsiStranka: 5 },
    { text: "Sestup do podzemních kanálů.", dalsiStranka: 6 },
    null,
    null,
    null
);


// Stránka 5 - méně důležitá volba, postupující příběh
let stranka5 = new Stranka(
    5,
    "Úsvit nad Hong Kongem byl sotva patrný skrz hustou vrstvu smogu, když jsme se shromáždili v opuštěném skladu na okraji města. Vzduch byl těžký napětím a očekáváním. Každý z nás věděl, že dnešek může být naším posledním dnem na svobodě - nebo možná naším posledním dnem vůbec.\n\
    Lena rozdávala poslední kusy vybavení – miniaturní EMP zařízení, schopné vyřadit elektroniku v malém okruhu, šifrované komunikátory a nejnovější hackovací nástroje. Jin kontroloval naše kybernetické vylepšení, ujišťoval se, že všechno funguje na sto procent. Kenji, tichý jako vždy, jen kontroloval svou výzbroj s precizností chirurga.\n\
    Mei stála vedle mě, její ruka lehce spočívala na mém rameni. 'Jsi připravený?' zeptala se tiše.\n\
    Neodpověděl jsem. Odpovědi nebyly důležité. Teď byl čas na akci. Bylo to všechno, nebo nic. A já věděl, že se z tohoto dne buď vrátím jako hrdina, nebo nevrátím vůbec.",
    null,
    null,
    { dalsiStranka: 6 },
    null,
    null
);


// Stránka 6 - klíčové rozhodnutí, pokračování příběhu
let stranka6 = new Stranka(
    6,
    "První část plánu proběhla hladce. Prošli jsme opuštěnými kanály pod městem, vyhnuli jsme se automatickým hlídkám Nexus Corp a pronikli jsme až pod jejich hlavní centrálu.\n\
    'Lena, jsi na řadě,' přikázal jsem do šepotu, zatímco jsme se ukrývali za starými potrubními systémy.\n\
    Lena připojila svůj hackovací nástroj k terminálu. Byla to jen otázka sekund, než prolomila jejich první vrstvu zabezpečení. Srdce mi bušilo v hrudi, když jsme se přesunuli k výtahu, který nás měl dovést přímo do srdce budovy Nexus Corp.\n\
    Najednou se ozvalo slabé bzučení. Někdo nebo něco nás sledovalo. 'Máme problém,' zašeptala Mei.",
    { text: "Utečeme dřív, než nás objeví.", dalsiStranka: 7 },
    { text: "Musíme je neutralizovat.", dalsiStranka: 8 },
    null,
    null,
    null
);


// Stránka 7 - důsledek volby (útěk)
let stranka7 = new Stranka(
    7,
    "Bez přemýšlení jsem se otočil k odchodu. 'Musíme pryč. Teď hned!' přikázal jsem. Mei a ostatní neváhali ani chvíli a následovali mě zpět do temnoty kanálů.\n\
    Cítil jsem, jak mi srdce buší až v krku. Udělali jsme chybu? Byla tahle mise odsouzená k neúspěchu? Když jsme se konečně zastavili, ztěžka jsme oddechovali. Naše plíce se plnily toxickým vzduchem podzemních tunelů.\n\
    'Lena?' zavolal jsem. 'Dokázala jsi to? Získala jsi dostatek dat?'\n\
    Lena pomalu přikývla. 'Jo, máme to, ale jsou na stopě. Už o nás vědí.'\n\
    Můj mozek pracoval na plné obrátky. Nexus Corp věděli, že jsme tu, ale možná jsme jim utekli dost rychle. 'Dobrá, nemáme jinou možnost. Pokračujeme,' řekl jsem s odhodláním.",
    null,
    null,
    { dalsiStranka: 9 },
    null,
    null
);


// Stránka 8 - důsledek volby (neutralizace)
let stranka8 = new Stranka(
    8,
    "Rozhodl jsem se. 'Musíme je neutralizovat,' zasyčel jsem a sevřel v ruce svoje improvizované EMP zařízení.\n\
    Mei přikývla a já viděl, jak si vyndává svoji vlastní zbraň, oči plné odhodlání. 'Jdu první,' řekla.\n\
    Sledoval jsem, jak Mei opatrně kráčí k hlídačům, její pohyby byly jako tanec, dokonale koordinované. Když se dostala dost blízko, hodila EMP přímo na hlídací dron. Tiché bzučení náhle přestalo.\n\
    'Máš ho!' zvolal jsem s úlevou.\n\
    'Pokračujeme,' řekla Lena a otevřela přístup do výtahu. Znovu jsem se zhluboka nadechl. Byli jsme blíž než kdy jindy.",
    null,
    null,
    { dalsiStranka: 9 },
    null,
    null
);


// Stránka 9 - společné pokračování po různých volbách
let stranka9 = new Stranka(
    9,
    "Konečně jsme byli uvnitř. Výtahem jsme se dostali až do 50. patra, kde bylo umístěno jádro serveru Nexus Corp. Bylo to srdce celé jejich operace, místo, odkud kontrolovali nejen své systémy, ale brzy i mysl milionů lidí.\n\
    Lena začala pracovat na prolomení poslední vrstvy zabezpečení. 'Je to těžší než jsem čekala,' mumlala. 'Mají tu systém, který jsem ještě nikdy neviděla.'\n\
    Napětí stoupalo s každou vteřinou. Mei stála vedle mě, oči upřené na obrazovku, kde Lena bojovala s neznámým kódem.\n\
    'Máme společnost!' vykřikl Jin, když monitor zachytil přibližující se bezpečnostní tým Nexus Corp. 'Je jich víc, než jsme čekali!'\n\
    Rozhodnutí bylo na mě. Musíme se bránit, nebo uniknout?",
    { text: "Utečeme dřív, než nás dostanou.", dalsiStranka: 10 },
    { text: "Musíme bojovat!", dalsiStranka: 11 },
    null,
    null,
    null
);


// Stránka 10 - útěk po útoku Nexus Corp
let stranka10 = new Stranka(
    10,
    "Bylo to rozhodnutí okamžiku. 'Musíme pryč. Teď hned!' zařval jsem a vrhl se ke dveřím. Mei a ostatní neváhali ani chvíli. Vytáhli jsme své hackovací vybavení a začali mazat naši přítomnost v systému Nexus Corp.\n\
    'Lena, máme všechno?' zeptal jsem se, zatímco jsme se hnali ven.\n\
    'Jo, ale mají naše stopy. Ví o nás,' odpověděla nervózně.\n\
    Můj mozek pracoval na plné obrátky. Udělali jsme chybu? Možná jsme jim utekli dost rychle, ale ztráta dat nebyla možnost. 'Nemáme jinou volbu. Pokračujeme, máme, co potřebujeme.'",
    null,
    null,
    { dalsiStranka: 12 },
    null,
    null
);


// Stránka 11 - boj s Nexus Corp
let stranka11 = new Stranka(
    11,
    "Rozhodl jsem se bojovat. 'Musíme je zadržet,' zasyčel jsem a sevřel zbraň pevněji.\n\
    'Mei, vezmi si pravou stranu. Lena, aktivuj obrané systémy!' přikázal jsem. Všechno šlo rychle. Zásahové jednotky Nexus Corp se k nám blížily, ale my jsme byli připraveni.\n\
    'Máme to!' vykřikla Lena. 'Jsem uvnitř systému. Data se přenášejí!'\n\
    'Výborně!' odpověděl jsem, zatímco jsme se přikrčili za výstupky zdi a čekali, až přestane palba. Byl to boj o každou sekundu, ale nakonec jsme měli, co jsme potřebovali.\n\
    Náš únik byl rychlý, ale bezpečnost Nexus Corp byla stále v patách.",
    null,
    null,
    { dalsiStranka: 12 },
    null,
    null
);

// Stránka 12 - pokračování po úniku / boji (příběhová stránka)
let stranka12 = new Stranka(
    12,
    "Po našem úspěšném útěku jsme se ocitli v relativním bezpečí. Skryli jsme se v malém skladišti, které nám poskytlo útočiště. Mei byla zamyšlená, její oči byly upřené na mě, jako by se rozhodovala, zda mi něco poví nebo ne. \
    Bylo zřejmé, že mezi námi stále zůstává mnoho nevyřčeného. Nakonec promluvila: 'Ryu, musíme si promluvit o něčem důležitém...' Její hlas byl klidný, ale napjatý. Co mi chtěla říct? Byla to past nebo skutečnost? \
    Jak jsem sledoval její nervózní chování, přemýšlel jsem, zda má důvod mě varovat, nebo jestli jsem se zapletl do něčeho mnohem většího. \
    Myšlenky mi běžely hlavou. Pokud je Mei agentem Nexus Corp, jsem teď v obrovském nebezpečí. Pokud ne, znamená to, že bych mohl být jediný, kdo má šanci svrhnout celý jejich systém.",
    null,
    null,
    { dalsiStranka: 13 },
    null,
    null
);

// Stránka 13 - plynulé pokračování příběhu
let stranka13 = new Stranka(
    13,
    "Zatímco jsme odpočívali, Mei mi vyprávěla o Nexus Corp a jejich plánech. Odhalila, že jejich moc daleko přesahuje vše, co jsem si kdy dokázal představit. Nexus Corp nechtějí pouze kontrolovat data - chtějí ovládat samotné lidské myšlení. \
    Mei se mi přiznala, že na ni také vyvíjejí tlak. 'Nejsem si jistá, jak dlouho budu schopná odolávat,' zašeptala. Ta slova mi zněla v hlavě. Byla Mei obětí, nebo hrála na obě strany? \
    Nexus Corp. vždy manipulovali s lidmi, a teď se zdá, že Mei je jedním z těch, kdo mohou hrát klíčovou roli v jejich plánech. Musím zvážit, jestli je mým spojencem nebo nepřítelem. \
    Jak moc se na ni můžu spolehnout? Každý krok, který s ní podniknu, může být krokem blíž k pasti.",
    null,
    null,
    { dalsiStranka: 14 },
    null,
    null
);

// Stránka 14 - pokračování příběhu s více napětím
let stranka14 = new Stranka(
    14,
    "Naše skrýš nebyla bezpečná dlouho. Zvenčí jsme slyšeli kroky - Nexus Corp nás možná našli. Museli jsme se rozhodnout rychle. Mei se na mě podívala s vážným výrazem. 'Musíme odejít,' řekla a ukázala na nouzový východ. \
    Nevěděl jsem, jestli můžu věřit jejím instinktům, ale něco mi říkalo, že zůstat by byla chyba. Zvuk kroků za dveřmi zesílil. Byli jsme v nebezpečí. Jakmile jsem pohlédl na Mei, její tvář odrážela stres a strach. \
    Kdybych věděl, že je to past, už by se mě pokusila zradit? Nebo čeká na pravý moment, kdy mi vrazí dýku do zad? Nebyl čas váhat, ale musel jsem si uvědomit, že každé mé rozhodnutí nyní ovlivní náš další osud.",
    null,
    null,
    { dalsiStranka: 15 },
    "NEONPNK/images/HKcity.gif",
    null
);

// Stránka 15 - Rozhodovací stránka
let stranka15 = new Stranka(
    15,
    "Mei ti říká, že musíte okamžitě opustit úkryt, jinak vás Nexus Corp najdou. Ale co když je to past? Možná vás chce dostat přímo do jejich rukou. Zvuk kroků se stále přibližoval, musel jsem si rychle vybrat. \
    Byla Mei tím, kým se zdála být, nebo jsem celý čas hrál do rukou Nexus Corp?",
    { text: "Věřit Mei a opustit úkryt.", dalsiStranka: 16 },
    { text: "Nevěřit jí a zůstat se schovat.", dalsiStranka: 17 },
    null,
    null,
    null
);

// Stránka 16 - pokračování po rozhodnutí důvěřovat Mei
let stranka16 = new Stranka(
    16,
    "Rozhodl jsem se věřit Mei a vydali jsme se k nouzovému východu. Ulice Hong Kongu byly stále ponořené do tmy, kterou prořezávaly pouze neonové reklamy. Běželi jsme směrem k bezpečnému místu, které měla Mei připravené. \
    Během naší cesty mě ale stále hlodala pochybnost - co když je to všechno past? Co když mě zavede přímo do rukou Nexus Corp? Každý krok vpřed přinášel další pochyby. Něco na jejím chování mi připadalo podivné. \
    Možná jen přeháním, nebo je to instinkt, který jsem si vyvinul během let přežívání v tomto nemilosrdném světě. Nebyl jsem si jistý, jestli dělám správně, ale jinou volbu jsem teď neměl.",
    null,
    null,
    { dalsiStranka: 18 },
    null,
    null
);

// Stránka 17 - pokračování po rozhodnutí zůstat v úkrytu
let stranka17 = new Stranka(
    17,
    "Rozhodl jsem se nevěřit Mei a zůstal jsem na místě. Skrýval jsem se v temném koutě skladiště a doufal, že Nexus Corp neprohlédnou naše maskování. Mei mě pohledem prosila, abych odešel, ale já jí nevěřil. \
    Když kroky venku utichly, uvědomil jsem si, že jsme pro tentokrát bezpeční. Nebo to tak alespoň vypadalo... Zdálo se, že Mei ztrácí trpělivost. 'Udělali jsme chybu,' zašeptala tiše. Něco v jejím hlase znělo jinak. \
    Byla to lítost nebo frustrace? Přemýšlel jsem, jestli jsem ji podcenil, nebo jestli jsem byl na správné stopě.",
    null,
    null,
    { dalsiStranka: 18 },
    null,
    null
);

// Stránka 18 - společná cesta po různých rozhodnutích
let stranka18 = new Stranka(
    18,
    "Bez ohledu na to, jaké rozhodnutí jsem udělal, osud nás stále pronásledoval. Nexus Corp nikdy nepřestávali pátrat. Mei a já jsme věděli, že nemáme moc času. Museli jsme zjistit, kde se ukrývá jejich centrála. \
    Lena nám poskytla další vodítko. Cesta k pravdě začínala být stále nebezpečnější, ale nezbytná. Museli jsme se dostat k jádru jejich operací, jinak bychom byli stále jen figurky v jejich hře. \
    Když jsme opustili úkryt, věděl jsem, že už není cesty zpět. Otázkou zůstávalo, kdo z nás tuhle hru přežije.",
    null,
    null,
    { dalsiStranka: 19 },
    "NEONPNK/images/copters.gif",
    null
);
let stranka19 = new Stranka(
    19,
    "Cesta do centra Nexus Corp nebyla snadná. Procházeli jsme tajnými kanály, využívali každou příležitost k tomu, abychom zůstali nezpozorováni. Každý krok vpřed mě však stále více znepokojoval. \
    Byla Mei skutečně na mé straně? Každý její pohled ve mně vzbuzoval pochybnosti, ale zároveň jsem ji chtěl chránit. Moje mysl byla rozpolcená. Přemýšlel jsem o všech událostech, které jsme společně prošli. \
    Během cesty Mei občas překročila hranici důvěrnosti - její blízkost mi zamotala hlavu. Když jsme se jednou skrývali ve stínu, její ruka se lehce dotkla mé, a najednou se přiblížila, naše rty téměř splynuly. Cítil jsem, jak mezi námi roste napětí. \
    Bylo to upřímné nebo jen další způsob, jak mě zmanipulovat? Milostné jiskření mezi námi nabralo na intenzitě, ale já stále váhal, zda se nechávám unést, nebo jestli mě Mei skutečně cítí stejně.",
    null,
    null,
    { dalsiStranka: 20 },
    null,
    null
);

// Stránka 20 - Rozhodovací stránka: Milostné dilema
let stranka20 = new Stranka(
    20,
    "Jsi blízko centrály Nexus Corp, ale Mei se zastaví. 'Ryu,' zašeptá. Její oči, plné touhy a nejasných pocitů, se setkají s tvými. 'Mám pro tebe otázku. Jak mi můžeš věřit?' \
    Její rty se lehce chvějí a tvé srdce bije jako o závod. Cítíš k ní něco hlubšího, ale zároveň tě sužuje podezření. Můžeš se jí skutečně poddat a věřit, že je na tvé straně, nebo je všechno jen hra?",
    { text: "Říct Mei, že jí věříš, a poddat se citům.", dalsiStranka: 21 },
    { text: "Přiznat, že jí nevěříš, a distancovat se od ní.", dalsiStranka: 22 },
    null,
    null,
    null
);

// Stránka 21 - pokračování po rozhodnutí věřit Mei (milostná scéna)
let stranka21 = new Stranka(
    21,
    "Rozhodl jsem se jí věřit. Moje pochybnosti byly zatlačeny do pozadí, když jsem ji jemně chytil za ruku. Naše pohledy se střetly a tentokrát už mezi námi nebyly žádné bariéry. Políbil jsem ji. \
    Na okamžik všechno kolem nás zmizelo - nebezpečí, Nexus Corp, i svět kolem nás. Byl jsem s ní a ona se zdála být plně přítomná. Naše těla se spojila v objetí, zatímco ticho nočního města bylo přerušováno jen našimi tichými dechy. \
    Ale jakmile jsme se odtáhli, vrátily se všechny pochybnosti. Co když jsem udělal chybu? Co když mě teď Mei zradí? Ale pro tuto chvíli jsem se rozhodl věřit svým citům.",
    null,
    null,
    { dalsiStranka: 23 },
    null,
    null
);

// Stránka 22 - pokračování po rozhodnutí nevěřit Mei
let stranka22 = new Stranka(
    22,
    "Rozhodl jsem se jít sám. Nemohl jsem riskovat další zradu, a tak jsem se od ní distancoval. 'Ne, Mei,' řekl jsem pevně. 'Nemohu ti věřit.' \
    Na její tváři se zračilo překvapení a možná i něco víc - snad bolest? Ale neohlédl jsem se. Věděl jsem, že jsem učinil těžké rozhodnutí, které by mohlo zničit to, co mezi námi možná bylo. \
    Odvrátila se a já se otočil opačným směrem, vydal jsem se k centrále Nexus Corp sám. Bez ní jsem se cítil prázdný, ale v bezpečí před potenciální zradou. Možná jsem tím ztratil něco víc, než jen spojence.",
    null,
    null,
    { dalsiStranka: 23 },
    null,
    null
);

// Stránka 23 - společné pokračování po obou rozhodnutích
let stranka23 = new Stranka(
    23,
    "Přiblížili jsme se k centrále Nexus Corp, která byla obklopena těžkou ochranou a bezpečnostními opatřeními. Mé srdce bilo rychleji než kdy jindy. Před námi se tyčila budova, která kontrolovala osudy milionů lidí. \
    Ať už jsem byl sám nebo s Mei, věděl jsem, že tohle byl náš poslední krok před koncem této cesty. Ale něco ve mně se změnilo. Pokud byla Mei po mém boku, její přítomnost mi připomínala, že mezi námi stále něco zůstává. \
    Náhle jsem zaslechl šepot v temnotě. Byla to Lena - přišla nás varovat. 'Musíte si pospíšit. Nexus Corp se připravují na protiútok.' Bylo to varování, které jsme potřebovali, ale také znepokojující zpráva.",
    null,
    null,
    { dalsiStranka: 24 },
    null,
    null
);

// Stránka 24 - plynulé pokračování s emocionálním napětím
let stranka24 = new Stranka(
    24,
    "Jak jsme pokračovali, nemohl jsem se zbavit myšlenky na naše poslední momenty s Mei. Byla teď klidnější, ale něco v jejím chování mě stále znepokojovalo. Když jsme dorazili k vstupu do centrály, její telefon zabzučel. \
    Otočila se ke mně a její oči byly plné neklidu. 'Ryu, musím ti něco říct... Ne všechno, co jsem ti řekla, byla pravda,' přiznala nakonec. Srdce se mi zastavilo. 'Co tím myslíš?' zeptal jsem se ostře. \
    'Nebyl to jen Nexus Corp, kdo mě sledoval. Byla jsem zapletená do něčeho mnohem většího. A teď nemám na výběr... Musím splnit svůj úkol.' Ta slova mě zasáhla jako dýka do hrudi. Věřil jsem jí, miloval jsem ji. A teď mi přiznala zradu.",
    null,
    null,
    { dalsiStranka: 25 },
    null,
    null
);

// Stránka 25 - Rozhodovací stránka: Zrada Mei
let stranka25 = new Stranka(
    25,
    "Mei ti právě přiznala, že její úkol nebyl jen proti Nexus Corp, ale byl i proti tobě. Cítíš, jak se ti zvedá vztek a bolest. Máš teď dvě možnosti. Můžeš ji zradit zpět a nechat ji osudu, nebo jí můžeš stále věřit, že to dělala kvůli vyššímu cíli.",
    { text: "Odpustit jí a pokračovat spolu.", dalsiStranka: 26 },
    { text: "Opustit ji a bojovat sám.", dalsiStranka: 27 },
    null,
    null,
    null
);

// Stránka 26 - pokračování po rozhodnutí odpustit
let stranka26 = new Stranka(
    26,
    "I přesto, co mi řekla, jsem se rozhodl jí odpustit. Možná to byla láska, nebo jen slepá víra, ale nemohl jsem ji nechat napospas jejím démonům. 'Věřím ti,' řekl jsem tiše a chytil ji za ruku. \
    Její pohled byl plný překvapení, ale také úlevy. Společně jsme pokračovali dál k centrále Nexus Corp. Cítil jsem, že už není cesty zpět. Byli jsme v tom oba až po krk, ať už to dopadne jakkoli. \
    Uvědomil jsem si, že i když mě zradila, něco mezi námi přetrvalo. Něco silnějšího, co nás oba táhlo k sobě. Nexus Corp byl teď naším společným nepřítelem, a ať už budoucnost přinese cokoli, budeme bojovat bok po boku.",
    null,
    null,
    { dalsiStranka: 28 },
    null,
    null
);

// Stránka 27 - pokračování po rozhodnutí opustit Mei
let stranka27 = new Stranka(
    27,
    "Rozhodl jsem se, že už nemohu věřit Mei. 'Nechávám tě tady,' řekl jsem chladně. Její oči se rozšířily překvapením a možná i smutkem, ale já se otočil a odešel. Cítil jsem, jak mi v hrudi bije prázdnota. \
    Byla to těžká volba, ale věděl jsem, že je to jediný způsob, jak přežít a dokončit misi. Nexus Corp byl můj skutečný nepřítel, a Mei byla jen další překážkou na cestě. Cítil jsem její pohled, jak sleduje můj odchod. \
    Každý krok, který jsem udělal směrem ke svobodě, mě však stál víc, než jsem byl připraven připustit. Možná jsem ztratil někoho, koho jsem mohl milovat. Ale přežít v Hong Kongu 2070 znamenalo činit tvrdá rozhodnutí.",
    null,
    null,
    { dalsiStranka: 28 },
    null,
    null
);

// Stránka 28 - společné pokračování po obou rozhodnutích
let stranka28 = new Stranka(
    28,
    "Ať už jsem byl s Mei, nebo sám, cesta k jádru Nexus Corp byla stále plná nebezpečí. Podařilo se nám proklouznout přes několik kontrolních bodů a dostat se až k výtahům, které vedly do hlavního řídícího centra. \
    Vzduch kolem nás vibroval napětím, zatímco jsme sestupovali hlouběji do srdce nepřítele. Lena nás varovala, že tam dole nás čeká něco, na co nemusíme být připraveni. Ale nebylo cesty zpět. Byli jsme tak blízko, že jsem cítil, jak se třesu vzrušením i strachem. \
    Nexus Corp byli mistři manipulace, a pokud jsme je chtěli porazit, museli jsme se dostat až k jejich hlavnímu serveru. Každý krok byl teď otázkou života a smrti.",
    null,
    null,
    { dalsiStranka: 29 },
    null,
    null
);

// Stránka 29 - příběh před finálním rozhodnutím
let stranka29 = new Stranka(
    29,
    "Blížili jsme se k hlavnímu serveru Nexus Corp, když jsme náhle uslyšeli varovné sirény. Něco se pokazilo. 'Jsme v pasti,' zašeptala Mei, její hlas plný paniky. \
    Lena byla na našem komunikačním kanálu a křičela na nás, že systém uzavírá všechny vchody i východy. Bylo to naše poslední okno příležitosti. Nexus Corp věděli, že jsme tady, a už jsme neměli moc času. \
    Musel jsem rychle jednat. Měl jsem dvě možnosti - buď se pokusím rychle proniknout do systému přes slabé místo, které Lena objevila, nebo risknu přímý útok na zabezpečovací jednotky. Každé rozhodnutí teď mohlo znamenat život nebo smrt.",
    null,
    null,
    { dalsiStranka: 30 },
    null,
    null
);

// Stránka 30 - Rozhodovací stránka s možností jednoduché volby
let stranka30 = new Stranka(
    30,
    "Rozhodl jsem se pro jednoduchou, ale rychlou volbu. Musel jsem věřit Leně a jejímu plánu. Vstoupil jsem do řídícího systému a spustil hack. Sirény nadále řvaly, ale já se soustředil jen na obrazovku před sebou. \
    Nexus Corp měli složitou ochranu, ale našli jsme slabinu. Kódování se pomalu rozpadalo a systém se začal hroutit. Dokázali jsme to. Tohle byl náš triumf, ale nebyl to konec. Cítil jsem, že nás čeká mnohem víc. \
    'Tohle je jen začátek,' řekl jsem nahlas. Nexus Corp byli sraženi na kolena, ale jen dočasně. Hong Kong mě potřebuje, stejně jako tento příběh ještě není u konce. Musíme jít dál, abychom odkryli celou pravdu. \
    Příběh pokračuje v dalším gamebooku. Děkuji, že jsi byl součástí této cesty a jsi připraven pokračovat ve své vlastní verzi budoucnosti.",
    { text: "Konec - Příběh pokračuje v dalším gamebooku!", dalsiStranka: null },
    null,
    null,
    "NEONPNK/images/lambo.gif",
    null
);

// Stránka 31 - Rozhodovací stránka s rizikovou volbou
let stranka31 = new Stranka(
    31,
    "Rozhodl jsem se riskovat. Vytáhl jsem svou zbraň a zaútočil na bezpečnostní jednotky Nexus Corp. Všechno kolem mě bylo chaotické - střelba, světla, výbuchy. Měl jsem jen pár sekund na to, abych je vyřadil, nebo by mě chytili. \
    Přes všechen hluk jsem slyšel, jak Mei křičí mé jméno. Byl to zoufalý výkřik, který mě přivedl zpět do reality. Nexus Corp byli silní, ale já jsem byl rychlejší. Po několika minutách boje jsem je porazil. Ale to, co nás čeká, je ještě větší hrozba. \
    Podařilo se nám dostat se až k jádru systému, ale věděli jsme, že Nexus Corp nejsou poraženi. Byli jsme teď ve válce, která teprve začíná. 'Tohle nekončí,' řekl jsem Mei, zatímco jsme se oba snažili popadnout dech. \
    Příběh pokračuje dál a Hong Kong mě bude potřebovat víc než kdy jindy. Tohle je jen začátek. Další část tvé cesty se skrývá v dalším gamebooku. Děkuji, že jsi byl součástí této kapitoly.",
    { text: "Konec - Příběh pokračuje v dalším gamebooku!", dalsiStranka: null },
    null,
    null,
    "NEONPNK/images/lambo.gif",
    null
);






// Přidání stránek do NeonPunk2070u
NeonPunk2070.pridejStranku(stranka0);
NeonPunk2070.pridejStranku(stranka1);
NeonPunk2070.pridejStranku(stranka2);
NeonPunk2070.pridejStranku(stranka3);
NeonPunk2070.pridejStranku(stranka4);
NeonPunk2070.pridejStranku(stranka5);
NeonPunk2070.pridejStranku(stranka6);
NeonPunk2070.pridejStranku(stranka7);
NeonPunk2070.pridejStranku(stranka8);
NeonPunk2070.pridejStranku(stranka9);
NeonPunk2070.pridejStranku(stranka10);
NeonPunk2070.pridejStranku(stranka12);
NeonPunk2070.pridejStranku(stranka13);
NeonPunk2070.pridejStranku(stranka14);
NeonPunk2070.pridejStranku(stranka15);
NeonPunk2070.pridejStranku(stranka16);
NeonPunk2070.pridejStranku(stranka17);
NeonPunk2070.pridejStranku(stranka18);
NeonPunk2070.pridejStranku(stranka19);
NeonPunk2070.pridejStranku(stranka20);
NeonPunk2070.pridejStranku(stranka21);
NeonPunk2070.pridejStranku(stranka22);
NeonPunk2070.pridejStranku(stranka23);
NeonPunk2070.pridejStranku(stranka24);
NeonPunk2070.pridejStranku(stranka25);
NeonPunk2070.pridejStranku(stranka26);
NeonPunk2070.pridejStranku(stranka27);
NeonPunk2070.pridejStranku(stranka28);
NeonPunk2070.pridejStranku(stranka29);
NeonPunk2070.pridejStranku(stranka30);
NeonPunk2070.pridejStranku(stranka31);





// Začátek příběhu
NeonPunk2070.zacniPribeh();


// NeonPunk2070_main.js



// Kontrola, zda byly přidány nějaké stránky
if (NeonPunk2070.stranky.length === 0) {
    console.error("Žádné stránky nebyly přidány do NeonPunk2070u!");
}

// Inicializace hráče
let hrac = new Hrac("Ryu", 100, 10);

// Inicializace rendereru
let renderer = new Renderer(NeonPunk2070, hrac);
renderer.init();
