class Renderer {
    constructor(gamebook, hrac) {
        this.gamebook = gamebook;
        this.hrac = hrac;
        this.textContainer = document.getElementById('text-container');
        this.optionsContainer = document.getElementById('options-container');
        this.imageContainer = document.getElementById('image-container');
        this.statsContainer = document.getElementById('stats-container');

        this.updateStats();
    }

    updateUI() {
        const aktualniStranka = this.gamebook.getAktualniStranku();

        if (!aktualniStranka) {
            console.error('Žádná aktuální stránka není nastavena.');
            return;
        }

        this.hrac.pridejRozhodnuti(aktualniStranka.cislo);

        if (aktualniStranka.akce) {
            aktualniStranka.akce(this.hrac);
            this.updateStats();
        }

        if (this.hrac.zivoty <= 0) {
            this.textContainer.innerHTML = '<p>Prohrál jsi. Nemáš už žádné životy.</p>';
            this.optionsContainer.innerHTML = '';
            return;
        }

        this.textContainer.innerHTML = aktualniStranka.text;

        this.imageContainer.innerHTML = '';
        if (aktualniStranka.obrazek) {
            const img = document.createElement('img');
            img.src = aktualniStranka.obrazek;
            img.alt = "Obrázek ke scéně";
            img.className = 'scene-image';
            this.imageContainer.appendChild(img);
        }
        
        this.optionsContainer.innerHTML = '';
        aktualniStranka.moznosti.forEach((moznost, index) => {
            const button = document.createElement('button');
            button.textContent = moznost.text;
            if (moznost.jeStesti) {
                button.onclick = () => {
                    const vysledek = this.hrac.zkusStesti();
                    if (vysledek === "uspech") {
                        this.gamebook.prejdiNaStranku(moznost.uspech);
                    } else {
                        this.gamebook.prejdiNaStranku(moznost.neuspech);
                    }
                    this.updateUI();
                };
            } else {
                button.onclick = () => {
                    this.gamebook.prejdiNaStranku(moznost.dalsiStranka);
                    this.updateUI();
                };
            }
            this.optionsContainer.appendChild(button);
        });
    }

    updateStats() {
        this.statsContainer.textContent = `Životy: ${this.hrac.zivoty}`;
    }

    init() {
        if (!this.gamebook.getAktualniStranku()) {
            const prvniStranka = this.gamebook.zacniPribeh();
            if (!prvniStranka) {
                console.error('Gamebook neobsahuje žádné stránky.');
                return;
            }
        }
        this.updateUI();
    }
}