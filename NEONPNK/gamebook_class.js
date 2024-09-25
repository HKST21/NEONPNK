class Hrac {
    constructor (jmeno, zivoty, sila) {
        this.jmeno = jmeno;
        this.zivoty = zivoty;
        this.sila = sila;
        this.inventar = [];
        this.rozhodnuti = [];
    }

    zautoc() {
        const faktor = Math.random() * (2 - 0.5) + 0.5;
        return Math.floor(this.sila * faktor);
    }

    uberZivoty(pocet) {
        this.zivoty -= pocet;
        if (this.zivoty < 0) this.zivoty = 0;
    }
    
    pridejRozhodnuti(cisloStranky) {
        this.rozhodnuti.push(cisloStranky);
    }

    pridejPredmet(predmet) {
        this.inventar.push(predmet);
    }

    odeberPredmet(predmet) {
        const indexPredmetu = this.inventar.indexOf(predmet);
        if (indexPredmetu > -1) {
            this.inventar.splice(indexPredmetu, 1);
        }
    }

    zkusStesti() {
        const nahoda = Math.random();
        if (nahoda < 0.5) {
            return "neuspech";
        } else {
            return "uspech";
        }
    }
}

class Gamebook {
    constructor (nazev) {
        this.nazev = nazev;
        this.stranky = [];
        this.aktualniStranka = null;
    }

    pridejStranku(stranka) {
        this.stranky.push(stranka);
    }

    zacniPribeh() {
        if (this.stranky.length > 0) {
            this.aktualniStranka = this.stranky[0];
            return this.aktualniStranka;
        }
        return null;
    }

    prejdiNaStranku (cisloStranky) {
        const stranka = this.stranky.find(s => s.cislo === cisloStranky);

        if (stranka) {
            this.aktualniStranka = stranka;
            return stranka;
        }
        return null;
    }

    getAktualniStranku() {
        return this.aktualniStranka;
    }

    vypisAktualniStranku() {
        const aktualniStranka = this.getAktualniStranku();
        if (aktualniStranka) {
            console.log(aktualniStranka.getFormattedText());
        } else {
            console.log("Žádná aktuální stránka.");
        }
    }
}

class Stranka {
    constructor(cislo, text, moznostJednoducha, moznostRiziko, moznostCistDale, obrazek, akce) {
        this.cislo = cislo;
        this.text = text;
        this.moznosti = [
            moznostJednoducha && { text: moznostJednoducha.text, dalsiStranka: moznostJednoducha.dalsiStranka },
            moznostRiziko && { text: moznostRiziko.text, dalsiStranka: moznostRiziko.dalsiStranka },
            moznostCistDale && { text: "Číst dále", dalsiStranka: moznostCistDale.dalsiStranka },
            
        ].filter(Boolean);
        this.obrazek = obrazek;
        this.akce = akce;
    }

    getFormattedText() {
        let vysledek = this.text + "\n\nMožnosti:\n";
        this.moznosti.forEach((moznost, index) => {
            vysledek += `${index + 1}. ${moznost.text}\n`;
        });
        return vysledek;
    }
}