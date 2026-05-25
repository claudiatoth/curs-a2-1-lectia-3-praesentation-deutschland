// ============================================
// EXERCIȚII - Annettes Klasse präsentiert Deutschland (A2.1 · Lecția 3)
// Claudia Toth · 5 exerciții cu rezolvări complete
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

// ============================================
// EX 1: Verbinde — Propoziții din dialog (Gruppenarbeit)
// ============================================
const ex1Data = [
    { id: 'a', sentence: '1. Die Präsentation findet…', translation: 'Prezentarea are loc…', correct: 'c', accept: ['c'], hint: 'a) ...in ihren Kalender ein.  b) ...er kann nicht gut malen.  c) ...Anfang Juli statt.  d) ...Informationen zu den Bundesländern.  e) ...ein Plakat gestalten.  f) ...Bundesländer vorstellen.  g) ...die Aufgaben.  h) ...seiner Deutschlandkarte.', explanation: 'findet … statt = are loc / se desfășoară (trennbar verb stattfinden)' },
    { id: 'b', sentence: '2. Carolina trägt das Datum…', translation: 'Carolina notează data…', correct: 'a', accept: ['a'], hint: 'a) ...in ihren Kalender ein.  b) ...er kann nicht gut malen.  c) ...Anfang Juli statt.  d) ...Informationen zu den Bundesländern.  e) ...ein Plakat gestalten.  f) ...Bundesländer vorstellen.  g) ...die Aufgaben.  h) ...seiner Deutschlandkarte.', explanation: 'einträgt … ein = notează / înscrie (trennbar verb eintragen)' },
    { id: 'c', sentence: '3. Die Teilnehmer verteilen…', translation: 'Participanții împart…', correct: 'g', accept: ['g'], hint: 'a) ...in ihren Kalender ein.  b) ...er kann nicht gut malen.  c) ...Anfang Juli statt.  d) ...Informationen zu den Bundesländern.  e) ...ein Plakat gestalten.  f) ...Bundesländer vorstellen.  g) ...die Aufgaben.  h) ...seiner Deutschlandkarte.', explanation: 'verteilen die Aufgaben = împart sarcinile' },
    { id: 'd', sentence: '4. Jede Person soll vier…', translation: 'Fiecare persoană ar trebui să prezinte patru…', correct: 'f', accept: ['f'], hint: 'a) ...in ihren Kalender ein.  b) ...er kann nicht gut malen.  c) ...Anfang Juli statt.  d) ...Informationen zu den Bundesländern.  e) ...ein Plakat gestalten.  f) ...Bundesländer vorstellen.  g) ...die Aufgaben.  h) ...seiner Deutschlandkarte.', explanation: 'vier Bundesländer vorstellen = să prezinte patru Bundesländer (jed- + singular!)' },
    { id: 'e', sentence: '5. Die Teilnehmer wollen…', translation: 'Participanții vor să…', correct: 'e', accept: ['e'], hint: 'a) ...in ihren Kalender ein.  b) ...er kann nicht gut malen.  c) ...Anfang Juli statt.  d) ...Informationen zu den Bundesländern.  e) ...ein Plakat gestalten.  f) ...Bundesländer vorstellen.  g) ...die Aufgaben.  h) ...seiner Deutschlandkarte.', explanation: 'ein Plakat gestalten = să facă un afiș (regula Klammer cu wollen modal)' },
    { id: 'f', sentence: '6. Andreea fragt Acar nach…', translation: 'Andreea îl întreabă pe Acar de…', correct: 'h', accept: ['h'], hint: 'a) ...in ihren Kalender ein.  b) ...er kann nicht gut malen.  c) ...Anfang Juli statt.  d) ...Informationen zu den Bundesländern.  e) ...ein Plakat gestalten.  f) ...Bundesländer vorstellen.  g) ...die Aufgaben.  h) ...seiner Deutschlandkarte.', explanation: 'nach seiner Deutschlandkarte = harta lui (Dativ — fragen nach + Dat)' },
    { id: 'g', sentence: '7. Die Teilnehmer suchen…', translation: 'Participanții caută…', correct: 'd', accept: ['d'], hint: 'a) ...in ihren Kalender ein.  b) ...er kann nicht gut malen.  c) ...Anfang Juli statt.  d) ...Informationen zu den Bundesländern.  e) ...ein Plakat gestalten.  f) ...Bundesländer vorstellen.  g) ...die Aufgaben.  h) ...seiner Deutschlandkarte.', explanation: 'Informationen zu den Bundesländern = informații despre Bundesländer (Dativ după zu)' },
    { id: 'h', sentence: '8. Florian sagt,…', translation: 'Florian spune că…', correct: 'b', accept: ['b'], hint: 'a) ...in ihren Kalender ein.  b) ...er kann nicht gut malen.  c) ...Anfang Juli statt.  d) ...Informationen zu den Bundesländern.  e) ...ein Plakat gestalten.  f) ...Bundesländer vorstellen.  g) ...die Aufgaben.  h) ...seiner Deutschlandkarte.', explanation: 'er kann nicht gut malen = nu se pricepe la desen (modal können)' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Combină începuturile (1-8) cu finalurile potrivite (a-h).</strong><br>
        <em>Scrie litera răspunsului corect. Variante:</em><br>
        <span style="display: block; padding: 8px 12px; background: #f0fdf4; border-left: 3px solid #10b981; margin: 8px 0; font-family: 'Courier New', monospace; font-size: 0.92rem; line-height: 1.7;">
        a) ...in ihren Kalender ein.<br>
        b) ...er kann nicht gut malen.<br>
        c) ...Anfang Juli statt.<br>
        d) ...Informationen zu den Bundesländern.<br>
        e) ...ein Plakat gestalten.<br>
        f) ...Bundesländer vorstellen.<br>
        g) ...die Aufgaben.<br>
        h) ...seiner Deutschlandkarte.
        </span>
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#6b7280">💬 ${it.translation}</small>
                <input type="text" id="ex1-${it.id}" placeholder="o literă (a-h)" maxlength="2" style="text-transform: lowercase;">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const input = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}) — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}) — ${it.explanation}`;
        }
    });
    return { correct, total: ex1Data.length };
}

// ============================================
// EX 2: Wo liegt das Bundesland? (lokale Adverbien — MIX im vs in)
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Bayern liegt ____ Süden von Deutschland.', translation: 'Bavaria se află în sudul Germaniei.', correct: 'im', accept: ['im'], explanation: 'im = in + dem (Dativ masc). der Süden → im Süden.' },
    { id: 'b', sentence: 'Bayern liegt ____ Deutschland.', translation: 'Bavaria se află în Germania.', correct: 'in', accept: ['in'], explanation: 'Țară fără articol → in (NU im). Deutschland nu primește articol.' },
    { id: 'c', sentence: 'Berlin liegt ____ Osten von Deutschland.', translation: 'Berlin se află în estul Germaniei.', correct: 'im', accept: ['im'], explanation: 'im Osten (der Osten = masc → im).' },
    { id: 'd', sentence: 'Hessen liegt ____ Mitte von Deutschland.', translation: 'Hessen se află în mijlocul Germaniei.', correct: 'in der', accept: ['in der'], explanation: 'die Mitte (feminin) → in der Mitte (in + Dativ feminin = in der). NU „im Mitte"!' },
    { id: 'e', sentence: 'Andreea wohnt ____ Brandenburg.', translation: 'Andreea locuiește în Brandenburg.', correct: 'in', accept: ['in'], explanation: 'Bundesland fără articol → in Brandenburg (NU im Brandenburg).' },
    { id: 'f', sentence: 'Schleswig-Holstein liegt ____ Norden.', translation: 'Schleswig-Holstein se află în nord.', correct: 'im', accept: ['im'], explanation: 'im Norden (der Norden — masc).' },
    { id: 'g', sentence: 'Mihai arbeitet ____ Potsdam.', translation: 'Mihai lucrează în Potsdam.', correct: 'in', accept: ['in'], explanation: 'Oraș fără articol → in Potsdam (NU im Potsdam).' },
    { id: 'h', sentence: 'Nordrhein-Westfalen liegt ____ Westen.', translation: 'Nordrhein-Westfalen se află în vest.', correct: 'im', accept: ['im'], explanation: 'im Westen (der Westen — masc).' },
    { id: 'i', sentence: 'Carolina macht Fotos ____ Berlin.', translation: 'Carolina face poze în Berlin.', correct: 'in', accept: ['in'], explanation: 'Berlin = oraș fără articol → in (NU im).' },
    { id: 'j', sentence: 'Thüringen liegt ____ Mitte von Deutschland.', translation: 'Thüringen se află în mijlocul Germaniei.', correct: 'in der', accept: ['in der'], explanation: 'die Mitte → in der Mitte (același tipar ca Hessen).' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Completează cu „im", „in" sau „in der".</strong><br>
        <em>Regula cheie:</em><br>
        🧭 <strong>im</strong> + Norden / Süden / Osten / Westen (in + der → im)<br>
        🇩🇪 <strong>in</strong> + țară / oraș / Bundesland (FĂRĂ articol: in Deutschland, in Bayern, in Berlin)<br>
        ⚖️ <strong>in der</strong> + Mitte (die Mitte = feminin → in der)
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#6b7280">💬 ${it.translation}</small>
                <input type="text" id="ex2-${it.id}" placeholder="im / in / in der">
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const input = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex2Data.length };
}

// ============================================
// EX 3: Ergänze mit jed- (jeder / jede / jedes / jeden / jedem / jeder)
// ============================================
const ex3Data = [
    { id: 'a', sentence: '____ Teilnehmer bekommt vier Bundesländer. (masc Nom)', translation: 'Fiecare participant primește patru Bundesländer.', correct: 'Jeder', accept: ['jeder'], explanation: 'der Teilnehmer (masc) Nominativ → jeder.' },
    { id: 'b', sentence: '____ Frau in der Klasse spricht Deutsch. (fem Nom)', translation: 'Fiecare femeie din clasă vorbește germană.', correct: 'Jede', accept: ['jede'], explanation: 'die Frau (fem) Nominativ → jede.' },
    { id: 'c', sentence: '____ Kind lernt schnell. (neutru Nom)', translation: 'Fiecare copil învață repede.', correct: 'Jedes', accept: ['jedes'], explanation: 'das Kind (neutru) Nominativ → jedes.' },
    { id: 'd', sentence: 'Wir lernen ____ Tag Deutsch. (masc Akk)', translation: 'Învățăm în fiecare zi germană.', correct: 'jeden', accept: ['jeden'], explanation: 'der Tag (masc) Akkusativ → jeden (complement de timp).' },
    { id: 'e', sentence: 'Andreea liest ____ Buch zweimal. (neutru Akk)', translation: 'Andreea citește fiecare carte de două ori.', correct: 'jedes', accept: ['jedes'], explanation: 'das Buch (neutru) Akkusativ → jedes (formă identică cu Nom).' },
    { id: 'f', sentence: 'Wir geben ____ Bundesland ein Plakat. (neutru Dat)', translation: 'Dăm fiecărui Bundesland un afiș.', correct: 'jedem', accept: ['jedem'], explanation: 'das Bundesland (neutru) Dativ → jedem.' },
    { id: 'g', sentence: 'Andreea redet mit ____ Person freundlich. (fem Dat)', translation: 'Andreea vorbește prietenos cu fiecare persoană.', correct: 'jeder', accept: ['jeder'], explanation: 'die Person (fem) Dativ → jeder (după prepoziția „mit" + Dat).' },
    { id: 'h', sentence: 'Annette hilft ____ Schüler. (masc Dat)', translation: 'Annette îl ajută pe fiecare elev.', correct: 'jedem', accept: ['jedem'], explanation: 'der Schüler (masc) Dativ → jedem (helfen + Dat).' },
    { id: 'i', sentence: '____ Mal lernen wir etwas Neues. (neutru Akk — expresie fixă)', translation: 'De fiecare dată învățăm ceva nou.', correct: 'Jedes', accept: ['jedes'], explanation: 'das Mal (neutru) → expresia „jedes Mal" = de fiecare dată.' },
    { id: 'j', sentence: 'Carolina fotografiert ____ Ort in Deutschland. (masc Akk)', translation: 'Carolina fotografiază fiecare loc din Germania.', correct: 'jeden', accept: ['jeden'], explanation: 'der Ort (masc) Akkusativ → jeden.' }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Completează cu forma corectă a lui „jed-" (Nominativ / Akkusativ / Dativ).</strong><br>
        <em>Reamintire terminații:</em><br>
        🔵 Nom: <strong>jeder</strong> (masc) · <strong>jede</strong> (fem) · <strong>jedes</strong> (neutru)<br>
        🟠 Akk: <strong>jeden</strong> (masc) · <strong>jede</strong> (fem) · <strong>jedes</strong> (neutru)<br>
        🟢 Dat: <strong>jedem</strong> (masc/neutru) · <strong>jeder</strong> (fem)
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#6b7280">💬 ${it.translation}</small>
                <input type="text" id="ex3-${it.id}" placeholder="formă jed-">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const input = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex3Data.length };
}

// ============================================
// EX 4: Nominalisierung — verbe transformate în substantive
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'lernen → ____ (învățatul)', translation: 'Substantivul derivat din verbul „a învăța".', correct: 'das Lernen', accept: ['das lernen'], explanation: 'lernen → das Lernen. Mereu „das" + literă mare la prima literă a infinitivului.' },
    { id: 'b', sentence: 'lesen → ____ (cititul)', translation: 'Substantivul derivat din verbul „a citi".', correct: 'das Lesen', accept: ['das lesen'], explanation: 'lesen → das Lesen.' },
    { id: 'c', sentence: 'schreiben → ____ (scrisul)', translation: 'Substantivul derivat din verbul „a scrie".', correct: 'das Schreiben', accept: ['das schreiben'], explanation: 'schreiben → das Schreiben.' },
    { id: 'd', sentence: 'sprechen → ____ (vorbitul)', translation: 'Substantivul derivat din verbul „a vorbi".', correct: 'das Sprechen', accept: ['das sprechen'], explanation: 'sprechen → das Sprechen.' },
    { id: 'e', sentence: 'essen → ____ (mâncatul / mâncarea)', translation: 'Substantivul derivat din verbul „a mânca".', correct: 'das Essen', accept: ['das essen'], explanation: 'essen → das Essen. Atenție: das Essen = și „mâncare" (sens concret).' },
    { id: 'f', sentence: 'arbeiten → ____ (muncitul)', translation: 'Substantivul derivat din verbul „a munci".', correct: 'das Arbeiten', accept: ['das arbeiten'], explanation: 'arbeiten → das Arbeiten.' },
    { id: 'g', sentence: 'recherchieren → ____ (cercetatul)', translation: 'Substantivul derivat din verbul „a cerceta / documenta".', correct: 'das Recherchieren', accept: ['das recherchieren'], explanation: 'recherchieren → das Recherchieren. Verb în -ieren, dar regula nominalizării e identică.' },
    { id: 'h', sentence: 'präsentieren → ____ (prezentatul)', translation: 'Substantivul derivat din verbul „a prezenta".', correct: 'das Präsentieren', accept: ['das praesentieren', 'das präsentieren'], explanation: 'präsentieren → das Präsentieren.' }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Transformă verbul la infinitiv într-un substantiv (Nominalisierung).</strong><br>
        <em>Formula:</em> infinitivul → <strong>das</strong> + Infinitiv (cu LITERĂ MARE). Genul e MEREU neutru. Scrie complet: „das Lernen".
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#6b7280">💬 ${it.translation}</small>
                <input type="text" id="ex4-${it.id}" placeholder="das + Infinitiv">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const input = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex4Data.length };
}

// ============================================
// EX 5: Bringe in die richtige Reihenfolge — trennbare Verben + Bundesländer
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Andreea / einträgt / das Datum / in den Kalender', translation: 'Andreea notează data în calendar.', correct: 'Andreea trägt das Datum in den Kalender ein.', accept: ['andreea trägt das datum in den kalender ein.', 'andreea trägt das datum in den kalender ein', 'andreea traegt das datum in den kalender ein.', 'andreea traegt das datum in den kalender ein'], explanation: 'eintragen = trennbar → trägt … ein. Topica: subiect + verb conjugat + complemente + prefix la SFÂRȘIT.' },
    { id: 'b', sentence: 'Wir / aufteilen / die Aufgaben', translation: 'Împărțim sarcinile.', correct: 'Wir teilen die Aufgaben auf.', accept: ['wir teilen die aufgaben auf.', 'wir teilen die aufgaben auf'], explanation: 'aufteilen → teilen … auf. Aceeași regulă de Klammer.' },
    { id: 'c', sentence: 'Florian / vorschlagen / eine andere Idee', translation: 'Florian propune o altă idee.', correct: 'Florian schlägt eine andere Idee vor.', accept: ['florian schlägt eine andere idee vor.', 'florian schlägt eine andere idee vor', 'florian schlaegt eine andere idee vor.', 'florian schlaegt eine andere idee vor'], explanation: 'vorschlagen (TARE!) → schlägt … vor. Atenție la vocală: er schlägt (e → ä).' },
    { id: 'd', sentence: 'Carolina / vorstellen / das Bundesland Bayern', translation: 'Carolina prezintă Bundesland-ul Bayern.', correct: 'Carolina stellt das Bundesland Bayern vor.', accept: ['carolina stellt das bundesland bayern vor.', 'carolina stellt das bundesland bayern vor'], explanation: 'vorstellen → stellt … vor. Prefix vor- la sfârșit.' },
    { id: 'e', sentence: 'Mihai / zusammenfassen / die Aufteilung', translation: 'Mihai rezumă împărțirea.', correct: 'Mihai fasst die Aufteilung zusammen.', accept: ['mihai fasst die aufteilung zusammen.', 'mihai fasst die aufteilung zusammen'], explanation: 'zusammenfassen → fasst … zusammen. Prefix lung „zusammen" la sfârșit.' }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Pune cuvintele în ordinea corectă (trennbare Verben + Klammer).</strong><br>
        <em>Reamintire:</em> la verbele separabile, prefixul SE DESPRINDE și merge la SFÂRȘITUL propoziției. Topica: <strong>Subiect + verb conjugat + complemente + prefix la sfârșit</strong>.
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#6b7280">💬 ${it.translation}</small>
                <input type="text" id="ex5-${it.id}" placeholder="Propoziție corectă...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const input = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex5Data.length };
}

document.addEventListener('DOMContentLoaded', function () {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});
