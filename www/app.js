/* Zayed Prep app logic. Everything runs in the browser; progress is saved in localStorage on the device. */
(function () {
  "use strict";
  const KEY = "zayed-prep-v1";
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const LBL = { 1: "Low", 2: "Low–medium", 3: "Medium", 4: "High", 5: "Very high" };

  /* ---------- state ---------- */
  const defaults = () => ({ done: {}, log: "", name: "", target: "2027-08", updated: 0 });
  let state = defaults();
  try { const raw = localStorage.getItem(KEY); if (raw) state = Object.assign(defaults(), JSON.parse(raw)); } catch (e) {}
  function save() { state.updated = Date.now(); try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { toast("Couldn't save. Storage may be full or blocked."); } }

  /* ---------- ids ---------- */
  SECTIONS.forEach(s => { let n = 0; s.groups.forEach((g, gi) => { g.items = g.items.map((t, ii) => ({ text: t, id: s.id + "." + gi + "." + ii, num: ++n })); }); });
  const items = s => s.groups.flatMap(g => g.items);
  const count = list => [list.filter(i => state.done[i.id]).length, list.length];
  const allItems = () => SECTIONS.flatMap(items);

  /* ---------- helpers ---------- */
  const view = document.getElementById("view");
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  let toastT;
  function toast(msg) { const t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 1800); }
  function targetIdx() { const [y, m] = (state.target || "2027-08").split("-").map(Number); return y * 12 + (m - 1); }
  const idxLabel = i => MONTHS[((i % 12) + 12) % 12] + " " + Math.floor(i / 12);
  const nowIdx = () => { const d = new Date(); return d.getFullYear() * 12 + d.getMonth(); };
  const bar = (d, t, cls) => `<div class="bar ${cls || ""}"><i style="width:${t ? Math.round(d / t * 100) : 0}%"></i></div>`;

  function updateOverall() {
    const [d, t] = count(allItems()); const p = Math.round(d / t * 100);
    document.getElementById("ovBar").style.width = p + "%";
    document.getElementById("ovPct").textContent = p + "%";
  }

  /* ---------- views ---------- */
  function home() {
    const [d, t] = count(allItems()); const p = Math.round(d / t * 100);
    const C = 2 * Math.PI * 40;
    const tgt = targetIdx(), off = nowIdx() - tgt;
    const tgtDate = new Date(Math.floor(tgt / 12), tgt % 12, 1);
    const days = Math.ceil((tgtDate - new Date()) / 86400000);
    let cur = PHASES.findIndex(ph => off >= ph.from && off <= ph.to);
    if (cur < 0 && off < PHASES[0].from) cur = 0;
    const ph = cur >= 0 ? PHASES[cur] : null;
    const hello = state.name ? `Hi ${esc(state.name)}, ` : "";
    const msg = p === 0 ? "Pick any section below and tick your first item." : p < 30 ? "Good start. Keep a daily streak going." : p < 70 ? "Solid progress. Don't skip mocks." : "Nearly there. Revise and do mocks.";

    view.innerHTML = `<div class="stack">
      <section class="hero">
        <svg class="ring" viewBox="0 0 100 100" role="img" aria-label="${p}% complete">
          <circle class="bg" cx="50" cy="50" r="40"/><circle class="fg" cx="50" cy="50" r="40" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - p / 100)}" transform="rotate(-90 50 50)"/>
          <text x="50" y="57" text-anchor="middle">${p}%</text></svg>
        <div><h1>${hello}${d} of ${t} done</h1><p>${msg}</p>
          <div class="countdown">${days > 0 ? days + " days to placements (" + idxLabel(tgt) + ")" : "Placement season: " + idxLabel(tgt)}</div></div>
      </section>

      ${ph ? `<section><div class="eyebrow">Focus now · ${idxLabel(tgt + ph.from)}${ph.to !== ph.from ? " – " + idxLabel(tgt + ph.to) : ""}</div>
        <div class="phase-now"><h2>${esc(ph.title)}</h2><ul>${ph.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>
        <p class="small" style="margin:8px 0 0">Wrong dates? Set your placement month in <a href="#log">Log → Settings</a>.</p></section>` : ""}

      <section><h2 style="margin-bottom:10px">Sections</h2><div class="seclist">
        ${SECTIONS.map(s => { const [a, b] = count(items(s)); return `<a class="secitem ${a === b ? "full" : ""}" href="#s/${s.id}">
          <span class="nm">${esc(s.name)}</span><span class="ct">${a}/${b}</span><span class="sh">${esc(s.short)}</span>${bar(a, b, a === b ? "green" : "")}</a>`; }).join("")}
      </div></section>

      <section><h2 style="margin-bottom:10px">Daily routine</h2><div class="routine">
        <div><b>45 min · Aptitude</b>One topic, 20 timed questions.</div>
        <div><b>60–90 min · Coding</b>One Coding 100 program + one DSA problem.</div>
        <div><b>30 min · Core CS</b>One subtopic, then its cheat sheet.</div>
        <div><b>15 min · Speaking</b>Talk through what you learned, in English.</div>
        <div><b>Weekends · Build</b>Project work, one mock test, weekly log.</div>
      </div></section>

      <details class="weights"><summary>What companies look for</summary><div class="tablebox"><table>
        <thead><tr><th>Area</th><th>Service (TCS, Infosys…)</th><th>Product / GCC</th></tr></thead><tbody>
        ${WEIGHT.map(([a, s, p]) => `<tr><td>${esc(a)}</td><td>${lv(s)}</td><td>${lv(p)}</td></tr>`).join("")}</tbody></table></div></details>

      <details class="weights"><summary>Full roadmap</summary><div class="tablebox"><table><tbody>
        ${PHASES.map((x, i) => `<tr><td style="white-space:nowrap"><b>${idxLabel(tgt + x.from)}${x.to !== x.from ? " – " + idxLabel(tgt + x.to) : ""}</b>${i === cur ? ' <span class="free" style="color:var(--gold);background:var(--gold-soft)">now</span>' : ""}</td><td><b>${esc(x.title)}</b><br><span class="small">${x.items.map(esc).join(" · ")}</span></td></tr>`).join("")}
      </tbody></table></div></details>
    </div>`;
  }
  const lv = v => `<span class="lvl">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= v ? "on" : ""}"></i>`).join("")}</span>${LBL[v]}`;

  let filter = "all";
  function section(id) {
    const s = SECTIONS.find(x => x.id === id); if (!s) return home();
    const [d, t] = count(items(s));
    view.innerHTML = `<a class="back" href="#home">‹ All sections</a>
      <div class="sechead"><div><h1>${esc(s.name)}</h1><span class="small" id="secCount">${d} of ${t} done</span></div>
        <div class="chips">${[["all", "All"], ["todo", "To do"], ["done", "Done"]].map(([k, l]) => `<button class="chip" data-f="${k}" aria-pressed="${filter === k}">${l}</button>`).join("")}</div></div>
      <p class="lead">${esc(s.intro)}</p>
      <div class="tips"><h3>Tips</h3><ul>${s.tips.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <div class="grid" id="grid"></div>
      <h2 style="margin:26px 0 10px">Free resources</h2>
      <ul class="reslist">${resItems(s.resources)}</ul>`;
    view.querySelectorAll(".chip").forEach(c => c.onclick = () => { filter = c.dataset.f; section(id); });
    const grid = document.getElementById("grid");
    let shown = 0;
    s.groups.forEach(g => {
      let list = g.items;
      if (filter === "todo") list = list.filter(i => !state.done[i.id]);
      if (filter === "done") list = list.filter(i => state.done[i.id]);
      if (!list.length) return;
      shown++;
      const [gd, gt] = count(g.items);
      const card = document.createElement("div"); card.className = "card";
      card.innerHTML = `<div class="ch"><h3>${esc(g.name)}</h3><span class="cnt ${gd === gt ? "full" : ""}">${gd}/${gt}</span></div>${g.note ? `<p class="note">${esc(g.note)}</p>` : ""}<ul class="items"></ul>`;
      const ul = card.querySelector("ul"), cnt = card.querySelector(".cnt");
      list.forEach(it => {
        const li = document.createElement("li"), cid = "cb-" + it.id.replace(/\./g, "-");
        li.innerHTML = `<label for="${cid}"><input type="checkbox" id="${cid}" ${state.done[it.id] ? "checked" : ""}>${s.numbered ? `<span class="num">${it.num}</span>` : ""}<span class="t">${esc(it.text)}</span></label>`;
        li.querySelector("input").addEventListener("change", e => {
          if (e.target.checked) state.done[it.id] = Date.now(); else delete state.done[it.id];
          save(); updateOverall();
          const [a, b] = count(g.items); cnt.textContent = a + "/" + b; cnt.classList.toggle("full", a === b);
          const [x, y] = count(items(s)); document.getElementById("secCount").textContent = x + " of " + y + " done";
          if (x === y && e.target.checked) toast(s.name + " complete!");
        });
        ul.append(li);
      });
      grid.append(card);
    });
    if (!shown) grid.innerHTML = `<p class="empty">${filter === "done" ? "Nothing ticked yet in this section." : "Everything here is done."}</p>`;
  }
  const resItems = list => list.map(([n, u, d]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener"><b>${esc(n)}<span class="free">free</span></b><span>${esc(d)}</span></a></li>`).join("");

  let sheet = "dbms", query = "";
  function cheats() {
    view.innerHTML = `<h1>Cheat sheets</h1><p class="lead">One-line answers for quick revision before tests and interviews.</p>
      <div class="chips" id="sheets">${CHEATS.map(c => `<button class="chip" data-s="${c.id}" aria-pressed="${!query && sheet === c.id}">${esc(c.name)}</button>`).join("")}</div>
      <input class="search" id="q" type="search" placeholder="Search all cheat sheets (e.g. deadlock, RAG, ACID)" value="${esc(query)}" aria-label="Search cheat sheets">
      <dl class="cheat" id="cheatList"></dl>`;
    const list = document.getElementById("cheatList");
    function draw() {
      const q = query.trim().toLowerCase();
      let rows = q ? CHEATS.flatMap(c => c.rows.map(r => [r[0], r[1], c.name])).filter(r => (r[0] + " " + r[1]).toLowerCase().includes(q))
                   : CHEATS.find(c => c.id === sheet).rows.map(r => [r[0], r[1]]);
      list.innerHTML = rows.length ? rows.map(r => `<div><dt>${esc(r[0])}${r[2] ? `<span class="sheet">${esc(r[2])}</span>` : ""}</dt><dd>${esc(r[1])}</dd></div>`).join("")
                                   : `<div><dd class="empty">No matches for “${esc(query)}”.</dd></div>`;
      view.querySelectorAll("#sheets .chip").forEach(c => c.setAttribute("aria-pressed", !q && c.dataset.s === sheet));
    }
    view.querySelectorAll("#sheets .chip").forEach(c => c.onclick = () => { sheet = c.dataset.s; query = ""; document.getElementById("q").value = ""; draw(); });
    document.getElementById("q").addEventListener("input", e => { query = e.target.value; draw(); });
    draw();
  }

  function resources() {
    view.innerHTML = `<h1>Free resources</h1><p class="lead">Every link here is free to use. Pick one per topic and finish it before trying another.</p>
      <div class="stack">${SECTIONS.map(s => `<section><h2 style="margin-bottom:8px">${esc(s.name)}</h2><ul class="reslist">${resItems(s.resources)}</ul></section>`).join("")}</div>`;
  }

  function log() {
    view.innerHTML = `<h1>Log & settings</h1><p class="lead">Your notes and progress stay on this device only. Nothing is uploaded anywhere.</p>
      <div class="stack">
        <section class="card"><h2 style="margin-bottom:6px">Weekly log</h2>
          <p class="small" style="margin:0 0 8px">Every Sunday: what got done, what's stuck, next week's 3 goals.</p>
          <textarea class="box" id="logText" placeholder="Week 1&#10;Done: reverse number, palindrome, prime; percentages&#10;Stuck: diamond pattern&#10;Next week: finish number section, start profit & loss"></textarea></section>

        <section class="card"><h2 style="margin-bottom:10px">Settings</h2>
          <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
            <label class="small">Your name (optional)<br><input id="nameIn" class="search" style="margin:4px 0 0" type="text" maxlength="30" placeholder="e.g. Rahul"></label>
            <label class="small">Placement season starts<br><input id="targetIn" class="search" style="margin:4px 0 0" type="month"></label>
          </div>
          <p class="small" style="margin:6px 0 0">The roadmap and countdown use this month. Most colleges start drives at the beginning of 7th semester.</p></section>

        <section class="card"><h2 style="margin-bottom:6px">Back up & move devices</h2>
          <p class="small" style="margin:0 0 8px">Uninstalling the app or clearing browser data erases progress. Save a backup file, or copy the code into your notes.</p>
          <div class="btnrow" style="margin-top:0"><button class="btn primary" id="dlBtn">Save backup file</button>
            <label class="btn" for="fileIn">Restore from file</label><input class="fileinput" type="file" id="fileIn" accept=".json,application/json"></div>
          <textarea class="box code" id="codeBox" style="margin-top:12px" placeholder="Or paste a backup code here"></textarea>
          <div class="btnrow"><button class="btn" id="copyBtn">Copy backup code</button><button class="btn" id="restoreBtn">Restore from code</button><button class="btn danger" id="resetBtn">Reset all progress</button></div></section>

        <div class="about"><img src="icons/logo.svg" alt="">Zayed Prep · free for every student · works offline</div>
      </div>`;
    const ta = document.getElementById("logText"); ta.value = state.log || "";
    let lt; ta.addEventListener("input", () => { state.log = ta.value; clearTimeout(lt); lt = setTimeout(() => { save(); toast("Log saved"); }, 600); });
    const nm = document.getElementById("nameIn"); nm.value = state.name || "";
    nm.addEventListener("change", () => { state.name = nm.value.trim(); save(); toast("Name saved"); });
    const tg = document.getElementById("targetIn"); tg.value = state.target;
    tg.addEventListener("change", () => { if (/^\d{4}-\d{2}$/.test(tg.value)) { state.target = tg.value; save(); toast("Placement month set to " + idxLabel(targetIdx())); } });

    const box = document.getElementById("codeBox");
    const payload = () => JSON.stringify({ app: "zayed-prep", v: 1, done: state.done, log: state.log, name: state.name, target: state.target });
    function apply(obj) {
      if (!obj || typeof obj.done !== "object") throw new Error("bad");
      state = Object.assign(defaults(), { done: obj.done, log: obj.log || "", name: obj.name || "", target: obj.target || state.target });
      save(); updateOverall(); log(); toast("Progress restored");
    }
    document.getElementById("copyBtn").onclick = () => {
      const code = btoa(unescape(encodeURIComponent(payload()))); box.value = code;
      const fallback = () => { box.focus(); box.select(); toast("Code selected. Copy it now."); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(() => toast("Backup code copied"), fallback); else fallback();
    };
    document.getElementById("restoreBtn").onclick = () => {
      try { apply(JSON.parse(decodeURIComponent(escape(atob(box.value.trim()))))); } catch (e) { toast("That code didn't work. Paste the full code."); }
    };
    document.getElementById("dlBtn").onclick = () => {
      try {
        const blob = new Blob([payload()], { type: "application/json" }), a = document.createElement("a");
        a.href = URL.createObjectURL(blob); a.download = "zayed-prep-backup-" + new Date().toISOString().slice(0, 10) + ".json";
        document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
        toast("Backup file saved");
      } catch (e) { toast("Couldn't save a file here. Use Copy backup code instead."); }
    };
    document.getElementById("fileIn").addEventListener("change", e => {
      const f = e.target.files[0]; if (!f) return; const r = new FileReader();
      r.onload = () => { try { apply(JSON.parse(r.result)); } catch (er) { toast("That file isn't a Zayed Prep backup."); } };
      r.readAsText(f);
    });
    let armed = false;
    document.getElementById("resetBtn").onclick = e => {
      if (!armed) { armed = true; e.target.textContent = "Tap again to erase everything"; setTimeout(() => { armed = false; e.target.textContent = "Reset all progress"; }, 3000); return; }
      state = defaults(); save(); updateOverall(); log(); toast("All progress cleared");
    };
  }

  /* ---------- router ---------- */
  function route() {
    const h = location.hash.slice(1) || "home";
    let nav = "home";
    if (h.startsWith("s/")) section(h.slice(2));
    else if (h === "cheats") { cheats(); nav = "cheats"; }
    else if (h === "resources") { resources(); nav = "resources"; }
    else if (h === "log") { log(); nav = "log"; }
    else home();
    document.querySelectorAll("[data-nav]").forEach(a => { if (a.dataset.nav === nav) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    updateOverall();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", () => { if (!location.hash.startsWith("#s/")) filter = "all"; route(); });
  route();

  /* ---------- offline (web only; the Android app already bundles everything) ---------- */
  if ("serviceWorker" in navigator && !window.Capacitor && location.protocol === "https:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
