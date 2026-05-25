// ============================================
// TEST FINAL - Annettes Klasse präsentiert Deutschland (A2.1 · Lecția 3)
// Claudia Toth · 15 întrebări mixte (Bundesländer + lokale + jed- + Nominalisierung + Wendungen + Traducere)
// ============================================

const finalTestData = [
    // Bundesländer (3)
    { type: 'multiple', category: '🇩🇪 Bundesländer', question: 'Care este capitala Bavariei (Bayern)?', options: ['Stuttgart', 'München', 'Berlin', 'Hamburg'], correct: 'München', explanation: 'München = capitala Bavariei. Stuttgart = capitala Baden-Württemberg.' },
    { type: 'multiple', category: '🇩🇪 Bundesländer', question: 'Care este capitala Bundesland-ului Nordrhein-Westfalen?', options: ['Köln', 'Düsseldorf', 'Hannover', 'Dresden'], correct: 'Düsseldorf', explanation: '🚨 Düsseldorf, NU Köln! Köln e oraș mare în NRW, dar capitala administrativă e Düsseldorf.' },
    { type: 'multiple', category: '🇩🇪 Bundesländer', question: 'Câte Bundesländer are Germania în total?', options: ['12', '14', '16', '18'], correct: '16', explanation: 'Germania = 16 Bundesländer. 3 dintre ele sunt orașe-stat (Stadtstaaten): Berlin, Hamburg, Bremen.' },

    // Lokale Adverbien (3)
    { type: 'luckentext', category: '🧭 Lokale Adverbien', question: 'Completează:', sentence: 'Bayern liegt <strong>______</strong> Süden von Deutschland.', translation: 'Bavaria se află în sudul Germaniei.', accept: ['im'], correct: 'im', explanation: 'im = in + dem (Dativ masculin). der Süden → im Süden.' },
    { type: 'luckentext', category: '🧭 Lokale Adverbien', question: 'Completează:', sentence: 'Mihai wohnt <strong>______</strong> Potsdam.', translation: 'Mihai locuiește în Potsdam.', accept: ['in'], correct: 'in', explanation: '🚨 Oraș fără articol → „in" (NU „im"). „im" se folosește DOAR pentru direcții (im Norden/Süden/Osten/Westen).' },
    { type: 'luckentext', category: '🧭 Lokale Adverbien', question: 'Completează:', sentence: 'Hessen liegt <strong>______</strong> Mitte von Deutschland.', translation: 'Hessen se află în mijlocul Germaniei.', accept: ['in der'], correct: 'in der', explanation: 'die Mitte (FEMININ) → in der Mitte (in + Dativ feminin = in der). NU „im Mitte" (greșit — Mitte e feminin, nu masculin/neutru).' },

    // Indefinitpronomen jed- (3)
    { type: 'luckentext', category: '🆕 jed-', question: 'Completează:', sentence: '<strong>______</strong> Teilnehmer bekommt vier Bundesländer.', translation: 'Fiecare participant primește patru Bundesländer.', accept: ['jeder'], correct: 'Jeder', explanation: 'der Teilnehmer (masc) Nominativ → jeder. Verb la SINGULAR după jed- (bekommt, NU bekommen).' },
    { type: 'luckentext', category: '🆕 jed-', question: 'Completează (Akk masc):', sentence: 'Wir lernen <strong>______</strong> Tag Deutsch.', translation: 'Învățăm în fiecare zi germană.', accept: ['jeden'], correct: 'jeden', explanation: 'der Tag (masc) Akkusativ → jeden. „jeden Tag" = expresie fixă pentru „în fiecare zi" (complement de timp).' },
    { type: 'luckentext', category: '🆕 jed-', question: 'Completează (Dat fem):', sentence: 'Annette spricht mit <strong>______</strong> Person freundlich.', translation: 'Annette vorbește prietenos cu fiecare persoană.', accept: ['jeder'], correct: 'jeder', explanation: 'die Person (fem) Dativ → jeder. Prepoziția „mit" cere Dativ.' },

    // Nominalisierung (2)
    { type: 'translate', category: '📝 Nominalisierung', question: 'Transformă în substantiv (Nominalisierung):', ro: 'lernen → ?', accept: ['das lernen'], correct: 'das Lernen', explanation: 'lernen → das Lernen. Regula: das + Infinitiv (cu LITERĂ MARE). Genul e MEREU neutru.' },
    { type: 'translate', category: '📝 Nominalisierung', question: 'Transformă în substantiv (Nominalisierung):', ro: 'recherchieren → ?', accept: ['das recherchieren'], correct: 'das Recherchieren', explanation: 'recherchieren → das Recherchieren. Chiar și verbele în -ieren urmează aceeași regulă: das + Infinitiv.' },

    // Verbe + Wendungen (2)
    { type: 'multiple', category: '💬 Verbe / Wendungen', question: 'Care e Partizip II al verbului „übernehmen"?', options: ['übernommt', 'überngenommen', 'übernommen', 'geübernommen'], correct: 'übernommen', explanation: '🚨 übernommen — verb TARE + UNTRENNBAR. FĂRĂ ge- (regula verbelor neseparabile). Tema schimbată: nehm → nomm.' },
    { type: 'multiple', category: '💬 Verbe / Wendungen', question: 'Cum spui în germană „Să te ajut?" (oferta politicoasă)?', options: ['Helfe ich dir?', 'Soll ich dir helfen?', 'Muss ich dir helfen?', 'Will ich dir helfen?'], correct: 'Soll ich dir helfen?', explanation: 'Soll ich + infinitiv = ofertă politicoasă (recap sollen din L1). „Muss ich" sună forțat / negativ.' },

    // Traducere RO → DE (2)
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți în germană:', ro: 'Berlin se află în est.', accept: ['berlin liegt im osten.', 'berlin liegt im osten'], correct: 'Berlin liegt im Osten.', explanation: 'im Osten (der Osten = masc → im). „liegen" = a se afla (poziție).' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți în germană:', ro: 'Cine se ocupă de hartă?', accept: ['wer kümmert sich um die karte?', 'wer kümmert sich um die karte', 'wer kuemmert sich um die karte?', 'wer kuemmert sich um die karte'], correct: 'Wer kümmert sich um die Karte?', explanation: 'sich kümmern (um + Akk) — reflexiv cu prepoziție. „wer" → pers. III sg. → kümmert sich. „die Karte" la Akk = die Karte (fem identic).' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function normalizeTestAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> mixte din Lecția 3 A2.1.</p>
            <ul class="test-info-list">
                <li>🇩🇪 Bundesländer (3) · 🧭 Lokale Adverbien (3) · 🆕 jed- (3) · 📝 Nominalisierung (2) · 💬 Verbe/Wendungen (2) · 🇷🇴 Traducere (2)</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 10-15 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar"><div class="test-progress-fill" id="progress-fill"></div></div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let questionHTML = '';
    if (q.type === 'luckentext') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    } else if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'translate') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div><input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană..."></div>`;
    }
    container.innerHTML = questionHTML;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const userNorm = normalizeTestAnswer(userAnswer);
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === userNorm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (percentage >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (percentage >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (percentage >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (percentage >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color: #6b7280;">${m.q.explanation}</small></div>`;
        });
        mistakesHTML += '</div>';
    }
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    wizard.style.display = 'none';
    results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top: 8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsHTML}
        ${mistakesHTML}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function () { buildFinalTest(); });
