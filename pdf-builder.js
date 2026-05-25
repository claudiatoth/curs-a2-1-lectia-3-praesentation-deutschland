// PDF BUILDER — Annettes Klasse präsentiert Deutschland (A2.1 · Lecția 3)
(function () {
    if (typeof document === 'undefined') return;
    // Apelez direct — scriptul e ultimul în pdf.html, după ce toate datele JS sunt încărcate
    // și #pdf-content e deja parsed în DOM.
    try { buildPDF(); } catch (e) {
        const r = document.getElementById('pdf-content');
        if (r) r.innerHTML = '<pre style="color:red">ERROR: ' + e.message + '\n' + e.stack + '</pre>';
    }

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildCast() + buildTheory() + buildExercises() + buildFlashcards() + buildVerbs();
    }

    function buildCast() {
        return `<div class="cast-banner">
            <h4>👋 Cast „Annettes Deutschkurs"</h4>
            <div class="cast-grid">
                <div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Profesoara · Berlin</div></div>
                <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea 🇷🇴</div><div class="detail">Studentă · Brandenburg</div></div>
                <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Bucătar · Potsdam</div></div>
                <div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Doctor · Berlin</div></div>
                <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><div class="name">Carolina</div><div class="detail">Fotografă · Berlin</div></div>
                <div class="cast-card"><img src="images/acar.png" alt="Acar"><div class="name">Acar</div><div class="detail">Maistru · Oranienburg</div></div>
            </div>
        </div>`;
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#dbeafe[^"]*"[^>]*>/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fffbeb[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fef3c7[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        return `<h1 class="chapter">📘 1. Teorie — Cele 16 Bundesländer + lokale Adverbien + jed- + Nominalisierung</h1>` + t;
    }

    function fillInBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            const filled = it.sentence.replace(/_{2,}/g, `<strong style="color:#047857">${it.correct}</strong>`);
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${filled}</div>${it.translation ? `<div class="ex-explanation">🇷🇴 ${it.translation}</div>` : ''}${it.explanation ? `<div class="ex-explanation"><em>${it.explanation}</em></div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function matchingBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${it.sentence} → <strong style="color:#047857">${it.correct})</strong></div>${it.translation ? `<div class="ex-explanation">🇷🇴 ${it.translation}</div>` : ''}${it.explanation ? `<div class="ex-explanation"><em>${it.explanation}</em></div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function reorderBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q"><em style="color:#6b7280;">${it.sentence}</em></div><div class="ex-q" style="margin-top:4px;"><strong style="color:#047857;">→ ${it.correct}</strong></div>${it.translation ? `<div class="ex-explanation">🇷🇴 ${it.translation}</div>` : ''}${it.explanation ? `<div class="ex-explanation"><em>${it.explanation}</em></div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function nominalisierungBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>
            <table><thead><tr><th style="width:30%">Verb (infinitiv)</th><th style="width:30%">Substantiv (das)</th><th>Traducere RO</th></tr></thead><tbody>`;
        data.forEach(it => {
            // it.sentence: "lernen → ____ (învățatul)"
            const verb = it.sentence.split('→')[0].trim();
            h += `<tr><td class="verb">${verb}</td><td class="verb">${it.correct}</td><td class="ro-text">${it.translation || ''}</td></tr>`;
        });
        h += `</tbody></table></div>`;
        return h;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 2. Exerciții — cu rezolvări complete</h1>`;
        if (typeof ex1Data !== 'undefined') {
            html += matchingBlock('Übung 1 — Verbinde: propoziții din dialog (Gruppenarbeit)', 'Combină începuturile (1-8) cu finalurile potrivite (a-h). Răspunsurile sunt literele corespunzătoare.', ex1Data);
        }
        if (typeof ex2Data !== 'undefined') {
            html += fillInBlock('Übung 2 — Wo liegt das Bundesland? (lokale Adverbien)', 'im + Norden/Süden/Osten/Westen (in + dem) · in + țară/oraș/Bundesland (FĂRĂ articol) · in der Mitte (die Mitte = fem).', ex2Data);
        }
        if (typeof ex3Data !== 'undefined') {
            html += fillInBlock('Übung 3 — Ergänze mit jed- (jeder / jede / jedes pe cazuri)', 'Nom: jeder (masc) · jede (fem) · jedes (neutru). Akk: jeden (masc) · jede (fem) · jedes (neutru). Dat: jedem (masc/neutru) · jeder (fem). Verbul rămâne la SINGULAR după jed-.', ex3Data);
        }
        if (typeof ex4Data !== 'undefined') {
            html += nominalisierungBlock('Übung 4 — Nominalisierung (verbe → substantive)', 'Formula: infinitivul → das + Infinitiv (cu LITERĂ MARE). Genul e MEREU neutru.', ex4Data);
        }
        if (typeof ex5Data !== 'undefined') {
            html += reorderBlock('Übung 5 — Bringe in die richtige Reihenfolge (trennbare Verben)', 'La verbele separabile prefixul SE DESPRINDE și merge la SFÂRȘITUL propoziției (regula Klammer): Subiect + verb conjugat + complemente + prefix.', ex5Data);
        }
        return html;
    }

    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 3. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> ale lecției.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }

    function buildVerbs() {
        let html = `<h1 class="chapter new-section">🔁 4. Verbele lecției — Präsens · Präteritum · Perfekt</h1>
            <div class="andreea-note">
                <div class="andreea-note-content">
                    <div class="speaker">📌 Andreea îți spune:</div>
                    <div>Instrument de CĂUTARE. Verbele TARI sunt verificate pe PONS. Atenție la: vorschlagen (TARE — du schlägst), übernehmen (UNTRENNBAR — fără ge-), sich kümmern (reflexiv + um Akk).</div>
                </div>
            </div>`;
        if (typeof verbsData !== 'undefined') {
            verbsData.forEach((v, idx) => {
                let badgeClass = 'weak', badgeLabel = 'REGULAT';
                if (v.typ && v.typ.indexOf('tare') === 0) { badgeClass = 'strong'; badgeLabel = 'TARE (neregulat)'; }
                else if (v.typ && v.typ.indexOf('aux') === 0) { badgeClass = 'aux'; badgeLabel = 'AUXILIAR (neregulat)'; }
                const auxClass = v.aux === 'sein' ? 'sein' : 'haben';
                html += `<div class="verb-card">
                    <div class="vh"><span class="name">${idx + 1}. ${v.inf}</span><span class="ro">— ${v.ro}</span>
                        <span class="badge ${badgeClass}">${badgeLabel}</span>
                        <span class="badge ${auxClass}">Perfekt + ${v.aux}</span></div>
                    <h5>Präsens (prezent)</h5>
                    <table><thead><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr></thead><tbody>`;
                v.praes.forEach(row => { html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`; });
                html += `</tbody></table>`;
                if (v.praet) {
                    html += `<h5>Präteritum (imperfect)</h5><table><thead><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr></thead><tbody>`;
                    v.praet.forEach(row => { html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`; });
                    html += `</tbody></table>`;
                }
                if (v.perf && v.part) {
                    const perfRow = v.perf[2] || v.perf[0];
                    const subj = v.impersonal ? 'es' : 'er';
                    html += `<h5>Perfekt (pe scurt)</h5><div class="perfekt-box">
                        <div class="de">Auxiliar <strong>${v.aux}</strong> + participiul <strong>${v.part}</strong></div>
                        <div class="de" style="margin-top:3px">Exemplu: ${perfRow[0] || subj} <strong>${perfRow[1]}</strong></div>
                        <div class="ro">${perfRow[2]}</div></div>`;
                }
                if (v.note) html += `<div class="note"><strong>⚠️ </strong>${v.note}</div>`;
                html += `</div>`;
            });
        }
        return html;
    }
})();
