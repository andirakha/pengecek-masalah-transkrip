/* ======================================================================
   KONFIGURASI — EDIT BAGIAN INI SESUAI KEBUTUHANMU
   ====================================================================== */

// Daftar matkul yang SEHARUSNYA ada di transkrip (kurikulum resmi).
// Diisi contoh dari transkrip ini — ganti/lengkapi sesuai kurikulum asli prodi.
const REFERENSI_MATKUL = [
  { kode: "INF622101", nama: "ALGORITMA DAN PEMROGRAMAN" },
  { kode: "INF622103", nama: "BAHASA PEMROGRAMAN I" },
  { kode: "INF622109", nama: "SISTEM DIGITAL" },
  { kode: "INF622105", nama: "DASAR DASAR PEMROGRAMAN" },
  { kode: "INF622107", nama: "MATEMATIKA DISKRIT" },
  { kode: "INF622112", nama: "KOMUNIKASI DATA" },
  { kode: "INF622104", nama: "ALJABAR LINIER" },
  { kode: "INF622110", nama: "PROBABILITAS DAN STATISTIKA" },
  { kode: "INF622108", nama: "BAHASA PEMROGRAMAN II" },
  { kode: "INF622114", nama: "PENGANTAR TEKNOLOGI INTERNET" },
  { kode: "INF622102", nama: "ARSITEKTUR DAN ORGANISASI KOMPUTER" },
  { kode: "INF622106", nama: "STRUKTUR DATA" },
  { kode: "INF622203", nama: "SISTEM OPERASI" },
  { kode: "INF622207", nama: "SISTEM BASIS DATA" },
  { kode: "INF622201", nama: "DESAIN DAN ANALISIS ALGORITMA" },
  { kode: "INF622213", nama: "PEMROGRAMAN WEB" },
  { kode: "INF622209", nama: "INTERNET OF THINGS" },
  { kode: "INF622206", nama: "KEAMANAN SISTEM KOMPUTER" },
  { kode: "INF622205", nama: "JARINGAN KOMPUTER" },
  { kode: "INF622210", nama: "KECERDASAN ARTIFICIAL LANJUTAN" },
  { kode: "INF622211", nama: "PENGANTAR KECERDASAN ARTIFICIAL" },
  { kode: "INF622212", nama: "INTERAKSI MANUSIA & KOMPUTER" },
  { kode: "INF622204", nama: "REKAYASA PERANGKAT LUNAK" },
  { kode: "INF622202", nama: "PEMROGRAMAN BERORIENTASI OBJEK" },
  { kode: "INF622216", nama: "DATA MINING" },
  { kode: "INF622214", nama: "GRAFIKA KOMPUTER DAN VISUALISASI" },
  { kode: "INF622208", nama: "SISTEM TERDISTRIBUSI" },
  { kode: "INF622301", nama: "PEMROGRAMAN SISTEM MOBILE" },
  { kode: "INF622303", nama: "KEAMANAN JARINGAN" },
  { kode: "INF622307", nama: "KOMPUTER DAN MASYARAKAT" },
  { kode: "INF622305", nama: "CLOUD COMPUTING" },
  { kode: "UNI622303", nama: "KEWARGANEGARAAN" },
  { kode: "UNI622302", nama: "STUDI KEBANTENAN" },
  { kode: "INF622306", nama: "KRIPTOGRAFI" },
  { kode: "INF622302", nama: "PENGOLAHAN CITRA" },
  { kode: "INF622304", nama: "PEMBELAJARAN MESIN" },
  { kode: "INF622308", nama: "RISET TEKNOLOGI INFORMASI" },
  { kode: "INF622401", nama: "SISTEM MULTIMEDIA" },
  { kode: "INF622405", nama: "SEMINAR PROPOSAL" },
  { kode: "INF622403", nama: "KERJA PRAKTEK" },
  { kode: "INF622407", nama: "TECHNOPRENEURSHIP" },
  { kode: "INF622408", nama: "METODE PENELITIAN" },
  { kode: "INF622402", nama: "ETIKA PROFESI" },
  { kode: "TEK622101", nama: "KALKULUS" },
  { kode: "UNI622401", nama: "ENGLISH FOR ACADEMIC PURPOSE" },
  { kode: "UNI622403", nama: "TEKNOLOGI DAN TRANSFORMASI DIGITAL" },
  { kode: "UNI622304", nama: "KULIAH KERJA MAHASISWA" },
  { kode: "UNI622101", nama: "AGAMA" },
  { kode: "UNI622102", nama: "MODERASI BERAGAMA" },
  { kode: "UNI622301", nama: "PENDIDIKAN PANCASILA" },
  { kode: "UNI622405", nama: "KETAHANAN PANGAN" },
  { kode: "INF622406", nama: "TUGAS AKHIR" },
  { kode: "UNI622305", nama: "BAHASA INDONESIA" }
];

// Alias: matkul dengan 2 nama berbeda tapi matkul yang sama.
// Format: "NAMA DI TRANSKRIP (huruf besar)": "NAMA BAKU YANG DIPAKAI UNTUK PERBANDINGAN"
// Contoh (ganti sesuai matkul aslimu):
const ALIAS_MATKUL = {
  // "KECERDASAN BUATAN": "KECERDASAN ARTIFICIAL",
  // "REKAYASA PERANGKAT LUNAK LANJUT": "REKAYASA PERANGKAT LUNAK",
};

// Huruf mutu yang dianggap "bermasalah" (D atau di bawahnya)
const NILAI_BERMASALAH = ["D+", "D", "D-", "E", "K"];

// Daftar matkul peminatan (total 12) — GANTI sesuai daftar peminatan resmi prodi.
// Contoh diisi placeholder dari matkul semester 4-6 di transkrip ini.
const MATKUL_PEMINATAN = [
    { kode: "INF622417", nama: "MANAGEMEN PROYEK IT" },
    { kode: "INF622411", nama: "BUSSINESS INTELLEGENCE" },
    { kode: "INF621316", nama: "COMPUTER FORENSIC" },
    { kode: "INF621317", nama: "KEAMANAN JARINGAN LANJUT" },
    { kode: "INF621310", nama: "SISTEM BASIS DATA LANJUT" },
    { kode: "INF621312", nama: "JARINGAN KOMPUTER LANJUT" },
    { kode: "INF621313", nama: "E-COMMERCE" },
    { kode: "INF621311", nama: "MANAJEMEN RESIKO" },
    { kode: "INF621314", nama: "DATA WAREHOUSING" },
    { kode: "INF621315", nama: "DATA RECOVERY" },
    { kode: "INF622413", nama: "TELEMATIKA" },
    { kode: "INF622415", nama: "TROUBLESHOOTING AND MAINTENANCE" },
];

// Minimal jumlah matkul peminatan yang harus sudah diambil agar dianggap aman
const MIN_PEMINATAN_DIAMBIL = 5;

/* ======================================================================
   LOGIKA APLIKASI — biasanya tidak perlu diubah
   ====================================================================== */

pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

function normalize(str) {
  return (str || "")
    .toUpperCase()
    .replace(/\*+/g, "")
    .replace(/[^A-Z0-9&/ ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function canonicalName(nama) {
  const n = normalize(nama);
  // cek alias dengan key yang juga dinormalisasi
  for (const key in ALIAS_MATKUL) {
    if (normalize(key) === n) return normalize(ALIAS_MATKUL[key]);
  }
  return n;
}

async function extractTextFromPdf(file) {
  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
  let fullText = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map(it => it.str).join(" ");
    fullText += " " + pageText;
  }
  const targetId = "197504092006041004";
  const index = fullText.indexOf(targetId);
  if (index !== -1) {
    fullText = fullText.substring(0, index + targetId.length);
  }
  return fullText;
}

function parseTranskrip(text) {
  // pola satu entri matkul: NO  NAMA MATKUL  KODEMK  SKS  HM  AM  KM
  const re = /(\d{1,3})\s+([A-Z0-9&/'".,()+\-* ]{3,90}?)\s+([A-Z]{3}\d{6})\s+(\d{1,2})\s+([A-E][+\-]?)\s+(\d+(?:[.,]\d+)?)\s+(\d+(?:[.,]\d+)?)/g;
  const cleaned = text.toUpperCase().replace(/\s+/g, " ").replace(/SEMESTER\s+\d+/g, " ");
  const seen = new Set();
  const entries = [];
  let m;
  while ((m = re.exec(cleaned)) !== null) {
    const [, no, namaRaw, kode, sks, hm, amRaw, kmRaw] = m;
    const key = no + "|" + kode;
    if (seen.has(key)) continue; // buang duplikasi hasil ekstraksi (bukan duplikasi matkul asli)
    seen.add(key);
    entries.push({
      no: parseInt(no, 10),
      nama: namaRaw.replace(/\s+/g, " ").trim(),
      kode,
      sks: parseInt(sks, 10),
      hm: hm.trim(),
      am: parseFloat(amRaw.replace(",", ".")),
      km: parseFloat(kmRaw.replace(",", "."))
    });
  }
  return entries;
}

function analisis(entries) {
  // --- duplikat berdasarkan kode ---
  const byKode = {};
  entries.forEach(e => {
    (byKode[e.kode] = byKode[e.kode] || []).push(e);
  });

  const duplikatRows = [];
  const dupKodeSet = new Set();
  Object.entries(byKode).forEach(([kode, list]) => {
    if (list.length > 1) {
      dupKodeSet.add(kode);
      list.forEach(e => duplikatRows.push({ ...e, alasan: "Kode matkul sama muncul " + list.length + "x" }));
    }
  });

  // --- duplikat berdasarkan nama (setelah alias), kode berbeda ---
  const representatif = Object.values(byKode).map(list => list[0]);
  const byName = {};
  representatif.forEach(e => {
    const cname = canonicalName(e.nama);
    (byName[cname] = byName[cname] || []).push(e);
  });
  Object.values(byName).forEach(list => {
    if (list.length > 1) {
      list.forEach(rep => {
        byKode[rep.kode].forEach(e => {
          if (!dupKodeSet.has(e.kode)) {
            duplikatRows.push({ ...e, alasan: "Nama matkul sama (alias) dengan kode berbeda" });
            dupKodeSet.add(e.kode);
          }
        });
      });
    }
  });

  // --- matkul tidak muncul ---
  const missingRows = [];
  REFERENSI_MATKUL.forEach(ref => {
    const refCanon = canonicalName(ref.nama);
    const found = entries.some(e => e.kode === ref.kode || canonicalName(e.nama) === refCanon);
    if (!found) missingRows.push(ref);
  });

  // --- nilai bermasalah ---
  const uniqueEntries = representatif.slice().sort((a, b) => a.no - b.no);
  const lowGradeRows = uniqueEntries.filter(e => NILAI_BERMASALAH.includes(e.hm));

  // --- status matkul peminatan ---
  const peminatanRows = MATKUL_PEMINATAN.map(p => {
    const pCanon = canonicalName(p.nama);
    const match = entries.find(e => e.kode === p.kode || canonicalName(e.nama) === pCanon);
    return { kode: p.kode, nama: p.nama, diambil: !!match, hm: match ? match.hm : "-" };
  });
  const jumlahDiambil = peminatanRows.filter(p => p.diambil).length;
  const peminatan = {
    total: MATKUL_PEMINATAN.length,
    diambil: jumlahDiambil,
    minimal: MIN_PEMINATAN_DIAMBIL,
    aman: jumlahDiambil >= MIN_PEMINATAN_DIAMBIL,
    rows: peminatanRows
  };

  return { duplikatRows, missingRows, lowGradeRows, uniqueEntries, peminatan };
}

/* ---------------- UI wiring ---------------- */

const fileInput = document.getElementById("fileInput");
const dropzone = document.getElementById("dropzone");
const filenameEl = document.getElementById("filename");
const statusEl = document.getElementById("status");
const resultPanel = document.getElementById("resultPanel");
const summaryGrid = document.getElementById("summaryGrid");
const tblDuplikat = document.getElementById("tblDuplikat");
const tblMissing = document.getElementById("tblMissing");
const tblLow = document.getElementById("tblLow");
const tblPeminatan = document.getElementById("tblPeminatan");
const downloadBtn = document.getElementById("downloadBtn");
const downloadStatus = document.getElementById("downloadStatus");

let lastAnalysis = null;

["dragover", "dragenter"].forEach(evt =>
  dropzone.addEventListener(evt, e => { e.preventDefault(); dropzone.classList.add("drag"); })
);
["dragleave", "drop"].forEach(evt =>
  dropzone.addEventListener(evt, e => { e.preventDefault(); dropzone.classList.remove("drag"); })
);
dropzone.addEventListener("drop", e => {
  const file = e.dataTransfer.files[0];
  if (file) handleFile(file);
});
fileInput.addEventListener("change", () => {
  if (fileInput.files[0]) handleFile(fileInput.files[0]);
});

async function handleFile(file) {
  if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
    setStatus("File harus berformat PDF.", "err");
    return;
  }
  filenameEl.textContent = "File: " + file.name;
  setStatus("Membaca PDF...", "");
  resultPanel.style.display = "none";
  try {
    const text = await extractTextFromPdf(file);
    setStatus("Mengekstrak daftar matkul...", "");
    const entries = parseTranskrip(text);
    if (entries.length === 0) {
      setStatus("Tidak ada baris matkul yang berhasil terbaca. Format PDF mungkin berbeda dari yang didukung.", "err");
      return;
    }
    const result = analisis(entries);
    lastAnalysis = result;
    renderResult(result);
    setStatus("Berhasil membaca " + entries.length + " baris matkul.", "ok");
  } catch (err) {
    console.error(err);
    setStatus("Gagal memproses PDF: " + err.message, "err");
  }
}

function setStatus(msg, kind) {
  statusEl.textContent = msg;
  statusEl.className = "status" + (kind ? " " + kind : "");
}

function renderResult(result) {
  resultPanel.style.display = "block";

  summaryGrid.innerHTML = `
    <div class="metric">
      <div class="n">${result.uniqueEntries.length}</div>
      <div class="l">Matkul Terbaca</div>
    </div>
    <div class="metric ${result.duplikatRows.length ? "warn" : ""}">
      <div class="n">${result.duplikatRows.length}</div>
      <div class="l">Baris Duplikat</div>
    </div>
    <div class="metric ${result.missingRows.length ? "danger" : ""}">
      <div class="n">${result.missingRows.length}</div>
      <div class="l">Matkul Tidak Muncul</div>
    </div>
    <div class="metric ${result.lowGradeRows.length ? "warn" : ""}">
      <div class="n">${result.lowGradeRows.length}</div>
      <div class="l">Nilai &le; C</div>
    </div>
    <div class="metric ${result.peminatan.aman ? "" : "danger"}">
      <div class="n">${result.peminatan.diambil}/${result.peminatan.total}</div>
      <div class="l">Matkul Peminatan</div>
    </div>
  `;

  tblDuplikat.innerHTML = result.duplikatRows.length
    ? buildTable(
        ["No", "Nama Matkul", "Kode MK", "Nilai", "Keterangan"],
        result.duplikatRows.map(r => [r.no, r.nama, r.kode, r.hm, `<span class="badge dup">${r.alasan}</span>`])
      )
    : `<div class="empty-note">Tidak ditemukan matkul duplikat.</div>`;

  tblMissing.innerHTML = result.missingRows.length
    ? buildTable(
        ["Kode MK", "Nama Matkul (Referensi)"],
        result.missingRows.map(r => [r.kode, r.nama, ])
      )
    : `<div class="empty-note">Semua matkul referensi ditemukan di transkrip.</div>`;

  tblLow.innerHTML = result.lowGradeRows.length
    ? buildTable(
        ["No", "Nama Matkul", "Kode MK", "SKS", "Huruf Mutu"],
        result.lowGradeRows.map(r => [r.no, r.nama, r.kode, r.sks, `<span class="badge low">${r.hm}</span>`])
      )
    : `<div class="empty-note">Tidak ada matkul dengan nilai D atau di bawahnya.</div>`;

  const p = result.peminatan;
  const peminatanNoteEl = document.getElementById("peminatanNote");
  peminatanNoteEl.innerHTML = p.aman
    ? `<span class="badge taken">AMAN</span>&nbsp; Sudah mengambil ${p.diambil} dari ${p.total} matkul peminatan (minimal ${p.minimal}).`
    : `<span class="badge nottaken">BELUM AMAN</span>&nbsp; Baru mengambil ${p.diambil} dari ${p.total} matkul peminatan, minimal harus ${p.minimal}.`;

  tblPeminatan.innerHTML = buildTable(
    ["Kode MK", "Nama Matkul Peminatan", "Nilai", "Status"],
    p.rows.map(r => [
      r.kode,
      r.nama,
      r.hm,
      r.diambil ? `<span class="badge taken">Sudah Diambil</span>` : `<span class="badge nottaken">Belum Diambil</span>`
    ])
  );

  downloadStatus.textContent = "";
}

function buildTable(headers, rows) {
  return `<table><thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead>
    <tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}

downloadBtn.addEventListener("click", () => {
  if (!lastAnalysis) return;
  const wb = XLSX.utils.book_new();

  const dupSheet = XLSX.utils.json_to_sheet(
    lastAnalysis.duplikatRows.map(r => ({
      No: r.no, "Nama Matkul": r.nama, "Kode MK": r.kode, SKS: r.sks, "Huruf Mutu": r.hm, Keterangan: r.alasan
    }))
  );
  XLSX.utils.book_append_sheet(wb, dupSheet, "Duplikat");

  const missSheet = XLSX.utils.json_to_sheet(
    lastAnalysis.missingRows.map(r => ({ "Kode MK": r.kode, "Nama Matkul": r.nama }))
  );
  XLSX.utils.book_append_sheet(wb, missSheet, "Tidak Muncul");

  const lowSheet = XLSX.utils.json_to_sheet(
    lastAnalysis.lowGradeRows.map(r => ({
      No: r.no, "Nama Matkul": r.nama, "Kode MK": r.kode, SKS: r.sks, "Huruf Mutu": r.hm
    }))
  );
  XLSX.utils.book_append_sheet(wb, lowSheet, "Nilai Rendah");

  const p = lastAnalysis.peminatan;
  const peminatanSheet = XLSX.utils.json_to_sheet([
    ...p.rows.map(r => ({
      "Kode MK": r.kode, "Nama Matkul": r.nama, "Huruf Mutu": r.hm,
      Status: r.diambil ? "Sudah Diambil" : "Belum Diambil"
    })),
    {},
    { "Kode MK": "RINGKASAN", "Nama Matkul": `Diambil ${p.diambil} dari ${p.total} (minimal ${p.minimal})`, "Huruf Mutu": "", Status: p.aman ? "AMAN" : "BELUM AMAN" }
  ]);
  XLSX.utils.book_append_sheet(wb, peminatanSheet, "Peminatan");

  XLSX.writeFile(wb, "rekap-masalah-transkrip.xlsx");
  downloadStatus.textContent = "File terunduh.";
});
