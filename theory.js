// ============================================
// TEORIE - Annettes Klasse präsentiert Deutschland (A2.1 · Lecția 3)
// Claudia Toth · A treia lecție A2 oficială
// Sursă DF: INT212 + INT213 + INT214 · sintetizat + adaptat la castul Annettes Deutschkurs
// ============================================

const theoryHTML = `
    <!-- 0: Intro Präsentation -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🎉 1. Annette anunță tema prezentării</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-praesentation-thema.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Salut! În Lecția 3 ne băgăm într-un proiect frumos: o <strong>Präsentation</strong> despre Germania. Annette ne dă tema, iar noi 4 — eu, Mihai, Florian și Carolina — formăm o echipă. Trebuie să prezentăm cele 16 Bundesländer! Pe parcurs învățăm cum să spunem <strong>unde</strong> se află ceva în Germania (im Norden / im Süden), cum se folosește <strong>jeder/jede/jedes</strong> (fiecare) și cum transformăm verbele în substantive (das Lernen). Hai să începem! 🦋"</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>Ce vom face în Lecția 3</h4>
                <p>În clasa noastră de A2, Annette ne dă o sarcină mare: <strong>o prezentare de 20 de minute despre Deutschland</strong>. Avem 3 săptămâni la dispoziție și formăm grupuri de maximum 5 persoane.</p>
                <ul>
                    <li>🇩🇪 Învățăm cele <strong>16 Bundesländer</strong> + capitalele lor</li>
                    <li>🧭 Folosim <strong>lokale Adverbien</strong>: im Norden / im Süden / im Osten / im Westen / in der Mitte</li>
                    <li>🆕 Pronumele NOU <strong>jed-</strong> (jeder / jede / jedes — fiecare) cu declinare pe cazuri</li>
                    <li>📝 <strong>Nominalisierung</strong> — transformăm verbele în substantive (lernen → das Lernen)</li>
                    <li>💬 Wendungen pentru <strong>Gruppenarbeit</strong> + cum oferim/cerem ajutor</li>
                </ul>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #1e3a8a;">Annette:</strong> Liebe Klasse, in drei Wochen <u>sollt</u> ihr eine Präsentation halten. Das Thema <u>soll</u> etwas mit Deutschland zu tun haben. Bildet bitte Gruppen — maximal fünf Teilnehmer pro Gruppe.</p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Dragă clasă, în trei săptămâni trebuie să țineți o prezentare. Tema trebuie să aibă legătură cu Germania. Vă rog formați grupuri — maximum cinci participanți pe grup. (recap sollen din L1)</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #065f46;">Andreea:</strong> Ich habe eine Idee. Wir können etwas über Deutschlands <u>Geografie</u> präsentieren — die <u>Bundesländer</u>, ihre Hauptstädte und ein paar Details.</p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Am o idee. Putem prezenta ceva despre geografia Germaniei — Bundesländer-ele, capitalele lor și câteva detalii.</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #065f46;">Mihai:</strong> Die Idee finde ich gut! Das ist bestimmt ein spannendes Thema.</p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Ideea îmi place! Sigur e o temă interesantă.</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #065f46;">Florian:</strong> Hmm, ich weiß nicht. Aber gut — finden wir einen Kompromiss.</p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Mmm, nu știu. Dar bine — găsim un compromis. (vocabular A2: Kompromiss finden)</p>
            </div>
        </div>
    </div>

    <!-- 1: Die 16 Bundeslander + Hauptstadte -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🇩🇪 2. Die 16 Bundesländer + capitalele lor</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-bundeslaender-16.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Germania = 16 state federale (Bundesländer)</h4>
                <p>Germania e o <strong>federație</strong>: 16 Bundesländer, fiecare cu capitala lui și parlament propriu. <strong>Berlin</strong> e capitala țării (și totodată Bundesland separat). 3 dintre Bundesländer sunt <strong>orașe-stat</strong> (Stadtstaaten): Berlin, Hamburg, Bremen.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Region</th><th>Bundesland</th><th>Hauptstadt</th></tr></thead>
                <tbody>
                    <tr><td><strong>im Norden</strong></td><td class="verb">Schleswig-Holstein</td><td>Kiel</td></tr>
                    <tr><td><strong>im Norden</strong></td><td class="verb">Hamburg</td><td>Hamburg (Stadtstaat)</td></tr>
                    <tr><td><strong>im Norden</strong></td><td class="verb">Mecklenburg-Vorpommern</td><td>Schwerin</td></tr>
                    <tr><td><strong>im Norden</strong></td><td class="verb">Niedersachsen</td><td>Hannover</td></tr>
                    <tr><td><strong>im Norden</strong></td><td class="verb">Bremen</td><td>Bremen (Stadtstaat)</td></tr>
                    <tr><td><strong>im Osten</strong></td><td class="verb">Berlin</td><td>Berlin (Stadtstaat + Hauptstadt)</td></tr>
                    <tr><td><strong>im Osten</strong></td><td class="verb">Brandenburg</td><td>Potsdam</td></tr>
                    <tr><td><strong>im Osten</strong></td><td class="verb">Sachsen-Anhalt</td><td>Magdeburg</td></tr>
                    <tr><td><strong>im Osten</strong></td><td class="verb">Sachsen</td><td>Dresden</td></tr>
                    <tr><td><strong>im Osten</strong></td><td class="verb">Thüringen</td><td>Erfurt</td></tr>
                    <tr><td><strong>im Westen</strong></td><td class="verb">Nordrhein-Westfalen</td><td>Düsseldorf</td></tr>
                    <tr><td><strong>im Westen</strong></td><td class="verb">Rheinland-Pfalz</td><td>Mainz</td></tr>
                    <tr><td><strong>im Westen</strong></td><td class="verb">Saarland</td><td>Saarbrücken</td></tr>
                    <tr><td><strong>in der Mitte</strong></td><td class="verb">Hessen</td><td>Wiesbaden</td></tr>
                    <tr><td><strong>im Süden</strong></td><td class="verb">Baden-Württemberg</td><td>Stuttgart</td></tr>
                    <tr><td><strong>im Süden</strong></td><td class="verb">Bayern</td><td>München</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>🚨 Capcane pentru români</h4>
                <ul>
                    <li><strong>Bundesländer fără articol:</strong> spunem „Ich wohne <em>in</em> Bayern" (NU „im Bayern"). Excepție: cele cu „die" — <strong>die Schweiz</strong>, <strong>die Türkei</strong> (țări, nu Bundesländer).</li>
                    <li><strong>Niedersachsen ≠ Sachsen:</strong> sunt DOUĂ Bundesländer diferite. Niedersachsen e în nord (Hannover), Sachsen e în est (Dresden).</li>
                    <li><strong>Düsseldorf ≠ Köln:</strong> capitala Nordrhein-Westfalen e Düsseldorf, NU Köln (Köln e doar oraș mare).</li>
                    <li><strong>Berlin de două ori:</strong> e și Bundesland, și capitala Germaniei.</li>
                </ul>
            </div>

            <div class="example-box">
                <p class="de"><strong>Bayern</strong> liegt im Süden von Deutschland. Die Hauptstadt von Bayern ist <strong>München</strong>.</p>
                <p class="ro">Bavaria se află în sudul Germaniei. Capitala Bavariei este München.</p>
            </div>

            <div class="example-box">
                <p class="de"><strong>Hessen</strong> liegt in der Mitte von Deutschland. Die Hauptstadt heißt <strong>Wiesbaden</strong>.</p>
                <p class="ro">Hessen se află în mijlocul Germaniei. Capitala se numește Wiesbaden.</p>
            </div>
        </div>
    </div>

    <!-- 2: Lokale Adverbien -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🧭 3. Lokale Adverbien — unde se află ceva?</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-lokale-adverbien.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Cele 4 puncte cardinale + Mitte</h4>
                <p>Pentru a indica <strong>unde</strong> se află ceva într-o zonă (țară, oraș, regiune), folosim prepoziția <strong>in</strong> + Dativ + adverbul cardinal. Formele contrase „im" (= in dem) se folosesc pentru toate punctele cardinale, iar pentru „Mitte" (feminin) folosim „in der Mitte".</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Direcția</th><th>Forma cu prepoziție</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td><strong>der Norden</strong></td><td class="verb">im Norden</td><td class="ro-text">în nord</td></tr>
                    <tr><td><strong>der Süden</strong></td><td class="verb">im Süden</td><td class="ro-text">în sud</td></tr>
                    <tr><td><strong>der Osten</strong></td><td class="verb">im Osten</td><td class="ro-text">în est</td></tr>
                    <tr><td><strong>der Westen</strong></td><td class="verb">im Westen</td><td class="ro-text">în vest</td></tr>
                    <tr><td><strong>die Mitte</strong></td><td class="verb">in der Mitte</td><td class="ro-text">în mijloc / centru</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>🚨 Diferența im vs. in (FUNDAMENTAL!)</h4>
                <p><strong>im</strong> = in + dem (Dativ masculin/neutru). Folosit pentru direcții (Norden, Süden, Osten, Westen — toate sunt masculine: <em>der</em> Norden).</p>
                <p style="margin-top: 6px;"><strong>in</strong> (fără articol) = pentru țări, orașe și Bundesländer fără articol.</p>
                <ul style="margin-top: 6px;">
                    <li>✅ Bayern liegt <strong>im</strong> Süden. (im = in + der Süden)</li>
                    <li>✅ Bayern liegt <strong>in</strong> Deutschland. (Deutschland = țară, fără articol)</li>
                    <li>✅ Berlin liegt <strong>im</strong> Osten von Deutschland.</li>
                    <li>❌ Bayern liegt <strong>in</strong> Süden. (lipsește articolul „dem")</li>
                    <li>❌ Bayern liegt <strong>im</strong> Deutschland. (Deutschland NU primește articol)</li>
                </ul>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Alte lokale Adverbien utile</h4>
                <table class="theory-table" style="margin-top: 6px;">
                    <thead><tr><th>DE</th><th>RO</th><th>Exemplu</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">hier</td><td class="ro-text">aici</td><td>Ich wohne hier.<br><span class="ro-translation">Locuiesc aici.</span></td></tr>
                        <tr><td class="verb">dort / da</td><td class="ro-text">acolo</td><td>Dort liegt das Buch.<br><span class="ro-translation">Acolo se află cartea.</span></td></tr>
                        <tr><td class="verb">links</td><td class="ro-text">la stânga</td><td>Die Bank ist links.<br><span class="ro-translation">Banca e la stânga.</span></td></tr>
                        <tr><td class="verb">rechts</td><td class="ro-text">la dreapta</td><td>Die Apotheke ist rechts.<br><span class="ro-translation">Farmacia e la dreapta.</span></td></tr>
                        <tr><td class="verb">oben</td><td class="ro-text">sus</td><td>Mein Zimmer ist oben.<br><span class="ro-translation">Camera mea e sus.</span></td></tr>
                        <tr><td class="verb">unten</td><td class="ro-text">jos</td><td>Die Garage ist unten.<br><span class="ro-translation">Garajul e jos.</span></td></tr>
                        <tr><td class="verb">draußen</td><td class="ro-text">afară</td><td>Es ist kalt draußen.<br><span class="ro-translation">E frig afară.</span></td></tr>
                        <tr><td class="verb">drinnen</td><td class="ro-text">înăuntru</td><td>Drinnen ist es warm.<br><span class="ro-translation">Înăuntru e cald.</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div class="example-box">
                <p class="de"><strong>Schleswig-Holstein</strong> liegt im Norden, <strong>Bayern</strong> liegt im Süden — und <strong>Hessen</strong> liegt in der Mitte.</p>
                <p class="ro">Schleswig-Holstein se află în nord, Bavaria în sud — iar Hessen în mijloc.</p>
            </div>
        </div>
    </div>

    <!-- 3: jed- Indefinitpronomen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🆕 4. Indefinitpronomen jed- (jeder / jede / jedes — fiecare)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-jed-pronomen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Ce înseamnă jed-?</h4>
                <p><strong>jed-</strong> = „fiecare" (în limba germană) — se referă la UNUL DIN MAI MULȚI, individual. Are 3 forme la singular (masculin / feminin / neutru) și se DECLINĂ după caz. La plural folosim <strong>alle</strong> (toți / toate) — nu jed-.</p>
                <p style="margin-top: 8px;">Atenție: după jed-, restul propoziției la <strong>singular</strong> — chiar dacă în română am traduce „fiecare studenți" (greșit) — în germană e mereu „jeder Student" (un student).</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Cazul</th><th>Masculin (der)</th><th>Feminin (die)</th><th>Neutru (das)</th></tr></thead>
                <tbody>
                    <tr><td><strong>Nominativ</strong></td><td class="verb">jeder Mann</td><td class="verb">jede Frau</td><td class="verb">jedes Kind</td></tr>
                    <tr><td><strong>Akkusativ</strong></td><td class="verb">jeden Mann</td><td class="verb">jede Frau</td><td class="verb">jedes Kind</td></tr>
                    <tr><td><strong>Dativ</strong></td><td class="verb">jedem Mann</td><td class="verb">jeder Frau</td><td class="verb">jedem Kind</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Trucul memoriei: jed- urmează articolele der/die/das</h4>
                <p>Terminațiile lui jed- sunt IDENTICE cu articolele hotărâte:</p>
                <ul style="margin-top: 6px;">
                    <li><strong>jed-er</strong> = de<strong>r</strong> (Nom. masculin)</li>
                    <li><strong>jed-en</strong> = de<strong>n</strong> (Akk. masculin)</li>
                    <li><strong>jed-em</strong> = de<strong>m</strong> (Dat. masculin/neutru)</li>
                    <li><strong>jed-er</strong> = de<strong>r</strong> (Dat. feminin)</li>
                    <li><strong>jed-e</strong> = di<strong>e</strong> (feminin)</li>
                    <li><strong>jed-es</strong> = da<strong>s</strong> (neutru)</li>
                </ul>
                <p style="margin-top: 8px;">Dacă știi articolele, știi automat și jed-.</p>
            </div>

            <div class="example-box">
                <p class="de"><strong>Jeder Teilnehmer</strong> bekommt vier Bundesländer.</p>
                <p class="ro">Fiecare participant primește patru Bundesländer. (Nom. masculin — jeder)</p>
            </div>

            <div class="example-box">
                <p class="de">Wir lernen <strong>jeden Tag</strong> Deutsch.</p>
                <p class="ro">Învățăm în fiecare zi germana. (Akk. masculin — jeden, complement de timp)</p>
            </div>

            <div class="example-box">
                <p class="de">Andreea redet mit <strong>jeder Person</strong> in der Klasse.</p>
                <p class="ro">Andreea vorbește cu fiecare persoană din clasă. (Dat. feminin — jeder, după prepoziția „mit")</p>
            </div>

            <div class="example-box">
                <p class="de">Wir geben <strong>jedem Bundesland</strong> ein Plakat.</p>
                <p class="ro">Dăm fiecărui Bundesland un afiș. (Dat. neutru — jedem, complement de dativ)</p>
            </div>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>🚨 Capcane jed-</h4>
                <ul>
                    <li><strong>Verb la singular DUPĂ jed-:</strong> „Jeder Mann <strong>geht</strong>" (NU „gehen"). Chiar dacă e ideea de „toți bărbații", forma e singulară.</li>
                    <li><strong>jed- ≠ alle.</strong> jed- = individual, unul câte unul (each). alle = toți, colectiv (all). „Jeder Student lernt" vs „Alle Studenten lernen".</li>
                    <li><strong>jedes Mal</strong> = de fiecare dată (expresie fixă, Akk. neutru).</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 4: Nominalisierung -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>📝 5. Nominalisierung — verbe → substantive</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-nominalisierung.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Ce e Nominalisierung?</h4>
                <p>În germană putem transforma orice <strong>verb la infinitiv</strong> într-un <strong>substantiv</strong>. Substantivul rezultat e mereu <strong>neutru</strong> (das) și se scrie cu <strong>literă mare</strong> (Großschreibung).</p>
                <p style="margin-top: 8px;"><strong>Formula:</strong> infinitivul verbului → das + Infinitiv (cu majusculă).</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Verb (infinitiv)</th><th>Substantiv (das)</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">lernen</td><td class="verb">das Lernen</td><td class="ro-text">învățatul</td></tr>
                    <tr><td class="verb">lesen</td><td class="verb">das Lesen</td><td class="ro-text">cititul</td></tr>
                    <tr><td class="verb">schreiben</td><td class="verb">das Schreiben</td><td class="ro-text">scrisul</td></tr>
                    <tr><td class="verb">sprechen</td><td class="verb">das Sprechen</td><td class="ro-text">vorbitul</td></tr>
                    <tr><td class="verb">essen</td><td class="verb">das Essen</td><td class="ro-text">mâncatul / mâncarea</td></tr>
                    <tr><td class="verb">trinken</td><td class="verb">das Trinken</td><td class="ro-text">băutul</td></tr>
                    <tr><td class="verb">recherchieren</td><td class="verb">das Recherchieren</td><td class="ro-text">cercetatul / documentarea</td></tr>
                    <tr><td class="verb">präsentieren</td><td class="verb">das Präsentieren</td><td class="ro-text">prezentatul</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Când folosim Nominalisierung?</h4>
                <ul>
                    <li><strong>Ca subiect general:</strong> „<em>Das Lernen</em> macht Spaß." (Învățatul e plăcut.)</li>
                    <li><strong>După prepoziții:</strong> „<em>Beim Lernen</em> brauche ich Ruhe." (La învățat am nevoie de liniște.)</li>
                    <li><strong>Cu adjectiv:</strong> „<em>Das viele Lernen</em> ist anstrengend." (Învățatul mult e obositor.)</li>
                </ul>
            </div>

            <div class="example-box">
                <p class="de"><strong>Das Recherchieren</strong> über die Bundesländer macht Spaß.</p>
                <p class="ro">Documentarea despre Bundesländer este plăcută.</p>
            </div>

            <div class="example-box">
                <p class="de">Andreea konzentriert sich beim <strong>Lernen</strong> sehr gut.</p>
                <p class="ro">Andreea se concentrează foarte bine la învățat. (după prepoziția „bei" — beim = bei + dem)</p>
            </div>

            <div class="example-box">
                <p class="de"><strong>Das Präsentieren</strong> auf Deutsch ist eine gute Übung.</p>
                <p class="ro">Prezentatul în germană este un bun exercițiu.</p>
            </div>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>🚨 Capcane Nominalisierung</h4>
                <ul>
                    <li><strong>MEREU das.</strong> Nu se spune „der Lernen" sau „die Lernen" — toate sunt neutre, fără excepție.</li>
                    <li><strong>MEREU literă mare.</strong> În germană substantivele se scriu cu literă mare („das Lernen", NU „das lernen").</li>
                    <li><strong>Pierdem informația „eu / tu":</strong> Nominalisierung-ul e ABSTRACT, fără subiect personal. Dacă vrei să specifici cine, folosești o subordonată sau infinitiv cu zu (vine la A2.2).</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 5: Wendungen Gruppenarbeit -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>💬 6. Wendungen — Gruppenarbeit + Hilfe anbieten</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-6')" id="btn-audio-6">▶</button>
                    <audio id="audio-6" preload="none"><source src="audio/06-wendungen-gruppe.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„La A2 nu mai e suficient să spunem doar <em>'ich mache'</em>. Trebuie să știm să negociem într-un grup, să oferim ajutor, să exprimăm dezacord politicos. Iată cele 4 categorii de Wendungen pe care le folosesc EU. 🦋"</div>
                </div>
            </div>

            <h4 style="color: #065f46; margin-top: 16px;">📋 Aufgaben verteilen (împărțim sarcinile)</h4>
            <table class="theory-table">
                <thead><tr><th>Wendung (DE)</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Wer möchte das Plakat gestalten?</td><td class="ro-text">Cine ar vrea să facă afișul?</td></tr>
                    <tr><td class="verb">Wer kümmert sich um die Karte?</td><td class="ro-text">Cine se ocupă de hartă?</td></tr>
                    <tr><td class="verb">Ich kann den Süden übernehmen.</td><td class="ro-text">Eu pot să preiau sudul.</td></tr>
                    <tr><td class="verb">Ich würde gerne etwas zur Geografie recherchieren.</td><td class="ro-text">Aș vrea să cercetez ceva despre geografie.</td></tr>
                </tbody>
            </table>

            <h4 style="color: #065f46; margin-top: 16px;">🤝 Kompromisse machen (găsim compromisuri)</h4>
            <table class="theory-table">
                <thead><tr><th>Wendung (DE)</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Vielleicht können wir einen Kompromiss finden.</td><td class="ro-text">Poate găsim un compromis.</td></tr>
                    <tr><td class="verb">Vielleicht können wir die Idee noch ein bisschen ändern.</td><td class="ro-text">Poate putem schimba ideea puțin.</td></tr>
                    <tr><td class="verb">Ich habe noch eine andere Idee.</td><td class="ro-text">Mai am o altă idee.</td></tr>
                    <tr><td class="verb">Das sehe ich ähnlich / anders.</td><td class="ro-text">Văd la fel / altfel.</td></tr>
                </tbody>
            </table>

            <h4 style="color: #065f46; margin-top: 16px;">🆘 Hilfe anbieten (oferim ajutor)</h4>
            <table class="theory-table">
                <thead><tr><th>Wendung (DE)</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Soll ich dir helfen?</td><td class="ro-text">Să te ajut? (sollen — recap L1)</td></tr>
                    <tr><td class="verb">Ich kann dir gerne helfen.</td><td class="ro-text">Pot să te ajut cu plăcere.</td></tr>
                    <tr><td class="verb">Brauchst du vielleicht Hilfe?</td><td class="ro-text">Ai cumva nevoie de ajutor?</td></tr>
                    <tr><td class="verb">Soll ich einen Teil von deinen Aufgaben übernehmen?</td><td class="ro-text">Să preiau o parte din sarcinile tale?</td></tr>
                </tbody>
            </table>

            <h4 style="color: #065f46; margin-top: 16px;">🙏 Um Hilfe bitten (cerem ajutor)</h4>
            <table class="theory-table">
                <thead><tr><th>Wendung (DE)</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Kannst du mir helfen?</td><td class="ro-text">Mă poți ajuta?</td></tr>
                    <tr><td class="verb">Könnt ihr mir kurz helfen?</td><td class="ro-text">Mă puteți ajuta puțin? (formă plural)</td></tr>
                    <tr><td class="verb">Hast du kurz Zeit?</td><td class="ro-text">Ai puțin timp?</td></tr>
                    <tr><td class="verb">Ich verstehe die Aufgabe leider nicht.</td><td class="ro-text">Din păcate nu înțeleg sarcina.</td></tr>
                </tbody>
            </table>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin: 16px 0;">
                <p><strong style="color: #065f46;">Carolina:</strong> <u>Soll ich</u> dir bei der Recherche helfen, Andreea?</p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Să te ajut la cercetare, Andreea? (Hilfe anbieten cu sollen)</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #065f46;">Andreea:</strong> Das ist lieb von dir, danke! Aber ich <u>schaffe</u> das schon. Ich habe meine Aufgaben an Florian <u>verteilt</u>.</p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">E drăguț din partea ta, mersi! Dar mă descurc. Am împărțit sarcinile cu Florian. (schaffen = a reuși / a face, verteilen = a împărți)</p>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('theory-container');
    if (container) {
        container.innerHTML = theoryHTML;
    }
});
