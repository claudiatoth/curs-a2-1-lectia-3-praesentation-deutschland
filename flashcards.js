// ============================================
// FLASHCARDS - Annettes Klasse präsentiert Deutschland (A2.1 · Lecția 3)
// 32 carduri: 8 Bundesländer cu capitale + 8 verbe Gruppenarbeit + 8 jed-/lokal/Nominalisierung + 8 Wendungen
// Audio: WAV-uri Hedda pre-generate în audio/letters/
// ============================================

const flashcardsData = [
    // ========== 8 Bundesländer + Hauptstädte (regiunile-cheie) ==========
    { de: "Bayern — München", ro: "Bavaria — capitala München (im Süden)", audio: "audio/letters/01-bayern.wav" },
    { de: "Baden-Württemberg — Stuttgart", ro: "capitala Stuttgart (im Süden)", audio: "audio/letters/02-baden-wuerttemberg.wav" },
    { de: "Berlin — Berlin", ro: "Bundesland + capitala Germaniei (Stadtstaat, im Osten)", audio: "audio/letters/03-berlin.wav" },
    { de: "Brandenburg — Potsdam", ro: "capitala Potsdam (im Osten — aici stă Andreea)", audio: "audio/letters/04-brandenburg.wav" },
    { de: "Hessen — Wiesbaden", ro: "capitala Wiesbaden (in der Mitte)", audio: "audio/letters/05-hessen.wav" },
    { de: "Nordrhein-Westfalen — Düsseldorf", ro: "capitala Düsseldorf — NU Köln (im Westen)", audio: "audio/letters/06-nrw.wav" },
    { de: "Schleswig-Holstein — Kiel", ro: "capitala Kiel (im Norden)", audio: "audio/letters/07-schleswig-holstein.wav" },
    { de: "die 16 Bundesländer", ro: "cele 16 state federale ale Germaniei", audio: "audio/letters/08-16-bundeslaender.wav" },

    // ========== 8 verbe Gruppenarbeit ==========
    { de: "vorstellen (trennbar)", ro: "a prezenta — ich stelle vor / habe vorgestellt", audio: "audio/letters/09-vorstellen.wav" },
    { de: "vorschlagen (TARE, trennbar)", ro: "a propune — ich schlage vor / habe vorgeschlagen", audio: "audio/letters/10-vorschlagen.wav" },
    { de: "übernehmen (TARE, untrennbar)", ro: "a prelua — ich übernehme / habe übernommen", audio: "audio/letters/11-uebernehmen.wav" },
    { de: "sich kümmern (um + Akk)", ro: "a se ocupa de — ich kümmere mich um / habe mich gekümmert", audio: "audio/letters/12-sich-kuemmern.wav" },
    { de: "gestalten", ro: "a concepe / a face (afișul) — ich gestalte / habe gestaltet", audio: "audio/letters/13-gestalten.wav" },
    { de: "verteilen", ro: "a împărți / a distribui sarcinile — ich verteile / habe verteilt", audio: "audio/letters/14-verteilen.wav" },
    { de: "eintragen (trennbar, TARE)", ro: "a înscrie / a nota — ich trage ein / habe eingetragen", audio: "audio/letters/15-eintragen.wav" },
    { de: "zusammenfassen (trennbar)", ro: "a rezuma — ich fasse zusammen / habe zusammengefasst", audio: "audio/letters/16-zusammenfassen.wav" },

    // ========== 8 jed- / lokale Adverbien / Nominalisierung ==========
    { de: "jeder (Nom. masc)", ro: "fiecare — Jeder Teilnehmer kommt", audio: "audio/letters/17-jeder.wav" },
    { de: "jede (Nom./Akk. fem)", ro: "fiecare — Jede Frau spricht", audio: "audio/letters/18-jede.wav" },
    { de: "jedes (Nom./Akk. neutru)", ro: "fiecare — Jedes Kind lernt", audio: "audio/letters/19-jedes.wav" },
    { de: "jeden (Akk. masc)", ro: "fiecare — jeden Tag = în fiecare zi", audio: "audio/letters/20-jeden.wav" },
    { de: "jedem (Dat. masc/neutru)", ro: "fiecărui — wir helfen jedem Schüler", audio: "audio/letters/21-jedem.wav" },
    { de: "im Süden", ro: "în sud (im = in + dem)", audio: "audio/letters/22-im-sueden.wav" },
    { de: "in der Mitte", ro: "în mijloc / centru (die Mitte = feminin → in der)", audio: "audio/letters/23-in-der-mitte.wav" },
    { de: "das Lernen", ro: "învățatul (Nominalisierung — MEREU das + literă mare)", audio: "audio/letters/24-das-lernen.wav" },

    // ========== 8 Wendungen Gruppenarbeit + Hilfe ==========
    { de: "Soll ich dir helfen?", ro: "Să te ajut? (Hilfe anbieten — recap sollen)", audio: "audio/letters/25-soll-ich-helfen.wav" },
    { de: "Brauchst du Hilfe?", ro: "Ai nevoie de ajutor?", audio: "audio/letters/26-brauchst-du-hilfe.wav" },
    { de: "Können wir einen Kompromiss finden?", ro: "Putem găsi un compromis?", audio: "audio/letters/27-kompromiss.wav" },
    { de: "Ich habe eine andere Idee.", ro: "Mai am o altă idee.", audio: "audio/letters/28-andere-idee.wav" },
    { de: "Wer kümmert sich um die Karte?", ro: "Cine se ocupă de hartă?", audio: "audio/letters/29-wer-kuemmert.wav" },
    { de: "Ich würde gerne recherchieren.", ro: "Aș vrea să cercetez. (forma politicoasă würde)", audio: "audio/letters/30-wuerde-gerne.wav" },
    { de: "das Plakat / die Karte", ro: "afișul / harta — instrumentele prezentării", audio: "audio/letters/31-plakat-karte.wav" },
    { de: "die Gruppenarbeit", ro: "lucrul în grup", audio: "audio/letters/32-gruppenarbeit.wav" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri pentru Lecția 3 A2.1.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție (voce Hedda).
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const currentCard = flashcardsData[currentCardIndex];
    de.textContent = currentCard.de;
    ro.textContent = currentCard.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

let flashcardAudioEl = null;
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (flashcardAudioEl) { flashcardAudioEl.pause(); flashcardAudioEl.currentTime = 0; }
    flashcardAudioEl = new Audio(card.audio);
    flashcardAudioEl.play().catch(err => {
        console.warn('Audio nu poate fi redat:', err);
        // Fallback la Browser TTS
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(card.de);
            u.lang = 'de-DE';
            u.rate = 0.85;
            window.speechSynthesis.speak(u);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    buildFlashcards();
});
