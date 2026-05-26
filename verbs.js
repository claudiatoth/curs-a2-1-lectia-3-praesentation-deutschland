// ============================================
// VERB-KONJUGATION - Annettes Klasse präsentiert Deutschland (A2.1 · Lecția 3)
// 5 verbe PONS-verified: vorstellen · vorschlagen · übernehmen · sich kümmern · gestalten
// 2 verbe REGULATE (verde) + 2 TARI/NEREGULATE (roșu) + 1 REGULAT REFLEXIV (verde)
// REGULĂ: NU ghilimele interne care rup template literal! Folosim CAPS pentru emfază.
// ============================================

const verbsData = [
    {
        inf: 'vorstellen', ro: 'a prezenta (ceva / pe cineva)', typ: 'regulat / trennbar', aux: 'haben', part: 'vorgestellt',
        praes: [
            ['ich','stelle vor','prezint'],['du','stellst vor','prezinți'],['er/sie/es','stellt vor','prezintă'],
            ['wir','stellen vor','prezentăm'],['ihr','stellt vor','prezentați'],['sie/Sie','stellen vor','prezintă / prezentați']
        ],
        praet: [
            ['ich','stellte vor','prezentam'],['du','stelltest vor','prezentai'],['er/sie/es','stellte vor','prezenta'],
            ['wir','stellten vor','prezentam (noi)'],['ihr','stelltet vor','prezentați'],['sie/Sie','stellten vor','prezentau']
        ],
        perf: [
            ['ich','habe vorgestellt','am prezentat'],['du','hast vorgestellt','ai prezentat'],['er/sie/es','hat vorgestellt','a prezentat'],
            ['wir','haben vorgestellt','am prezentat'],['ihr','habt vorgestellt','ați prezentat'],['sie/Sie','haben vorgestellt','au prezentat']
        ],
        note: 'Verb SEPARABIL (vor- se desprinde și merge la sfârșit): „Andreea STELLT das Bundesland VOR." Cu pronume reflexiv „sich vorstellen" înseamnă „a se prezenta" (Ich stelle mich vor = Mă prezint).'
    },
    {
        inf: 'vorschlagen', ro: 'a propune', typ: 'tare (neregulat) / trennbar', aux: 'haben', part: 'vorgeschlagen',
        praes: [
            ['ich','schlage vor','propun'],['du','schlägst vor','propui (ATENȚIE: e → ä)'],['er/sie/es','schlägt vor','propune (e → ä)'],
            ['wir','schlagen vor','propunem'],['ihr','schlagt vor','propuneți'],['sie/Sie','schlagen vor','propun / propuneți']
        ],
        praet: [
            ['ich','schlug vor','propuneam'],['du','schlugst vor','propuneai'],['er/sie/es','schlug vor','propunea'],
            ['wir','schlugen vor','propuneam (noi)'],['ihr','schlugt vor','propuneați'],['sie/Sie','schlugen vor','propuneau']
        ],
        perf: [
            ['ich','habe vorgeschlagen','am propus'],['du','hast vorgeschlagen','ai propus'],['er/sie/es','hat vorgeschlagen','a propus'],
            ['wir','haben vorgeschlagen','am propus'],['ihr','habt vorgeschlagen','ați propus'],['sie/Sie','haben vorgeschlagen','au propus']
        ],
        note: '🚨 Verb TARE (neregulat) + SEPARABIL. La Präsens du/er: e → ä (du schlägst vor, er schlägt vor). Präteritum: schlug. Partizip II: vorgeschlagen (ge- se INSEREAZĂ între prefix și radical). „Andreea SCHLÄGT eine andere Idee VOR."'
    },
    {
        inf: 'übernehmen', ro: 'a prelua (sarcina, rolul)', typ: 'tare (neregulat) / untrennbar', aux: 'haben', part: 'übernommen',
        praes: [
            ['ich','übernehme','preiau'],['du','übernimmst','preiei (ATENȚIE: e → i)'],['er/sie/es','übernimmt','preia (e → i)'],
            ['wir','übernehmen','preluăm'],['ihr','übernehmt','preluați'],['sie/Sie','übernehmen','preiau / preluați']
        ],
        praet: [
            ['ich','übernahm','preluam'],['du','übernahmst','preluai'],['er/sie/es','übernahm','prelua'],
            ['wir','übernahmen','preluam (noi)'],['ihr','übernahmt','preluați'],['sie/Sie','übernahmen','preluau']
        ],
        perf: [
            ['ich','habe übernommen','am preluat'],['du','hast übernommen','ai preluat'],['er/sie/es','hat übernommen','a preluat'],
            ['wir','haben übernommen','am preluat'],['ihr','habt übernommen','ați preluat'],['sie/Sie','haben übernommen','au preluat']
        ],
        note: '🚨 Verb TARE (neregulat) + UNTRENNBAR (prefixul „über" rămâne LIPIT — nu se desprinde). Partizip II: übernommen FĂRĂ ge- (regula verbelor neseparabile). La Präsens du/er: e → i (du übernimmst, er übernimmt). „Florian ÜBERNIMMT die Aufgaben von Andreea."'
    },
    {
        inf: 'sich kümmern (um + Akk)', ro: 'a se ocupa (de ceva)', typ: 'regulat / reflexiv', aux: 'haben', part: 'gekümmert',
        praes: [
            ['ich','kümmere mich','mă ocup'],['du','kümmerst dich','te ocupi'],['er/sie/es','kümmert sich','se ocupă'],
            ['wir','kümmern uns','ne ocupăm'],['ihr','kümmert euch','vă ocupați'],['sie/Sie','kümmern sich','se ocupă / vă ocupați']
        ],
        praet: [
            ['ich','kümmerte mich','mă ocupam'],['du','kümmertest dich','te ocupai'],['er/sie/es','kümmerte sich','se ocupa'],
            ['wir','kümmerten uns','ne ocupam'],['ihr','kümmertet euch','vă ocupați'],['sie/Sie','kümmerten sich','se ocupau']
        ],
        perf: [
            ['ich','habe mich gekümmert','m-am ocupat'],['du','hast dich gekümmert','te-ai ocupat'],['er/sie/es','hat sich gekümmert','s-a ocupat'],
            ['wir','haben uns gekümmert','ne-am ocupat'],['ihr','habt euch gekümmert','v-ați ocupat'],['sie/Sie','haben sich gekümmert','s-au ocupat']
        ],
        note: 'Verb REGULAT + REFLEXIV (cere pronume reflexiv la Akuzativ: mich/dich/sich/uns/euch/sich). Se construiește cu prepoziția „um" + Akkusativ: „Andreea kümmert sich UM die Karte" (Andreea se ocupă DE hartă). Topica: pronumele reflexiv stă imediat după verbul conjugat.'
    },
    {
        inf: 'gestalten', ro: 'a concepe / a face (un afiș, o pagină)', typ: 'regulat', aux: 'haben', part: 'gestaltet',
        praes: [
            ['ich','gestalte','concep / fac'],['du','gestaltest','concepi (cu -est, pentru radical -t)'],['er/sie/es','gestaltet','concepe (cu -et)'],
            ['wir','gestalten','concepem'],['ihr','gestaltet','concepeți'],['sie/Sie','gestalten','concep / concepeți']
        ],
        praet: [
            ['ich','gestaltete','concepeam'],['du','gestaltetest','concepeai'],['er/sie/es','gestaltete','concepea'],
            ['wir','gestalteten','concepeam (noi)'],['ihr','gestaltetet','concepeați'],['sie/Sie','gestalteten','concepeau']
        ],
        perf: [
            ['ich','habe gestaltet','am conceput'],['du','hast gestaltet','ai conceput'],['er/sie/es','hat gestaltet','a conceput'],
            ['wir','haben gestaltet','am conceput'],['ihr','habt gestaltet','ați conceput'],['sie/Sie','haben gestaltet','au conceput']
        ],
        note: 'Verb REGULAT. Stem-ul „gestalt" se termină în -t → la du, er/sie/es, ihr inserăm -e- pentru eufonie (du gestalt-est, er gestalt-et, ihr gestalt-et). Partizip II: gestaltet (NU „gegestaltet" — pentru că verbul deja începe cu „ge", nu se dublează). Folosit pentru: ein Plakat gestalten, eine Webseite gestalten, einen Abend gestalten.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> er <strong>' + v.perf[2][1] + '</strong> · <em style="color:#6b7280;">' + v.perf[2][2] + '</em><br>' +
        '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe-cheie ale lecției</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Instrument de <strong>referință</strong>.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Cele 5 verbe ale lecției 3 sunt toate centrate pe GRUPPENARBEIT. Atenție la 3 capcane: 1) vorschlagen e TARE — du schlägst (cu Umlaut). 2) übernehmen e UNTRENNBAR — prefixul „über" rămâne lipit (NU separe!). 3) sich kümmern cere pronume reflexiv (mich/dich/sich...) + prepoziția „um". Toate sunt PONS-verified. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
