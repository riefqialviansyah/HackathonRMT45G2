if (document.title !== "Highscores") {
  const list = [
    {
      id: 1,
      image: "IMAGES/kembangdesa.jpg",
      pertanyaan: "Kembang, kembang apa yang ngga mungkin dicium?",
      pilihanJawaban: ["kembang desa", "kembang 7 rupa", "kembang api"],
      jawabanBenar: "kembang api",
    },
    {
      id: 2,
      image: "IMAGES/anjing.jpg",
      pertanyaan: "Gimana cara biar anjing tidak kencing di jok depan?",
      pilihanJawaban: [
        "ngga usah ikut pergi",
        "dipakein popok",
        "pindahin ke jok depan",
      ],
      jawabanBenar: "pindahin ke jok depan",
    },
    {
      id: 3,
      image: "IMAGES/jet.jpeg",
      pertanyaan:
        "Ketika kapal tenggelam atau pesawat jatuh, munculnya dimana?",
      pilihanJawaban: [
        "di dasar laut dan di daratan",
        "jawaban atas dan bawah salah",
        "di berita atau koran",
      ],
      jawabanSalah2: "jawaban atas dan bawah salah",
      jawabanBenar: "di berita atau koran",
    },
    {
      id: 4,
      image: "IMAGES/kapasbesi.jpeg",
      pertanyaan: "Lebih berat mana, 100Kg kapas atau 1ooKg besi?",
      pilihanJawaban: ["besi lah bro", "kapas sih kayaknya", "sama-sama berat"],
      jawabanBenar: "sama-sama berat",
    },
    {
      id: 5,
      image: "IMAGES/revalina.jpg",
      pertanyaan: "sayur apa yang pintar nyanyi?",
      pilihanJawaban: ["karakter bawang putih", "kol-aborasi", "Kolplay"],
      jawabanBenar: "Kolplay",
    },
  ];

  // New
  const optionA = document.getElementById("optionA");
  const optionB = document.getElementById("optionB");
  const optionC = document.getElementById("optionC");
  const gambarBox = document.getElementById("gambarBox");
  const pertanyaanBox = document.getElementById("pertanyaanBox");

  let counterPertanyaan = 0;
  let counterSoal = 0;
  let score = 0;

  /*
    {
      id: 5,
      image: "",
      pertanyaan: "sayur apa yang pintar nyanyi?",
      pilihanJawaban: ["karakter bawang putih", "kol-aborasi", "Kolplay"],
      jawabanBenar: "Kolplay",
    }
  */

  function gantiSoal() {
    let perSoal = list[counterPertanyaan];
    let { image, pertanyaan, pilihanJawaban } = perSoal;

    gambarBox.setAttribute("src", image);
    optionA.innerHTML = pilihanJawaban[0];
    optionB.innerHTML = pilihanJawaban[1];
    optionC.innerHTML = pilihanJawaban[2];
    pertanyaanBox.innerHTML = pertanyaan;

    if (counterPertanyaan == list.length - 1) {
      counterPertanyaan = 0;
    } else {
      counterPertanyaan++;
    }
    counterSoal++;
  }

  function cekJawaban(soal, userJawaban, list) {
    for (let i = 0; i < list.length; i++) {
      let perSoal = list[i];
      // console.log(perSoal.jawabanBenar,userJawaban,'<<<<<')
      if (perSoal.pertanyaan == soal) {
        if (perSoal.jawabanBenar == userJawaban) {
          score += 10;
        }
      }
    }
  }

  let jawabanBox = document.getElementById("jawabanBox");
  jawabanBox.addEventListener("click", function (el) {
    if (
      el.target.id == "optionA" ||
      el.target.id == "optionB" ||
      el.target.id == "optionC"
    ) {
      let jawaban = "";
      let soal = pertanyaanBox.innerHTML;
      if (el.target.id == "optionA") {
        jawaban = optionA.innerHTML;
      } else if (el.target.id == "optionB") {
        jawaban = optionB.innerHTML;
      } else if (el.target.id == "optionC") {
        jawaban = optionC.innerHTML;
      }
      console.log(soal, jawaban);
      cekJawaban(soal, jawaban, list);
      console.log(score, counterSoal, "<<<<");
      if (counterSoal == 5) {
        let tidakIsiNama = true;
        while (tidakIsiNama) {
          nama = prompt("Masukkan nama: ");
          if (nama) {
            tidakIsiNama = false;
          }
        }

        let scoreSebelum = localStorage.getItem("last-score");

        if (scoreSebelum === null) {
          localStorage.setItem("nama", `${nama}`);
          localStorage.setItem("last-score", `${score}`);
        } else {
          localStorage.setItem("namaPenantang", `${nama}`);
          localStorage.setItem("scorePenantang", `${score}`);
        }

        window.location.href = "index3.html";
      }
      gantiSoal();
    }
  });

  function pertama() {
    let perSoal = list[counterPertanyaan];
    let { image, pertanyaan, pilihanJawaban } = perSoal;

    optionA.innerHTML = pilihanJawaban[0];
    optionB.innerHTML = pilihanJawaban[1];
    optionC.innerHTML = pilihanJawaban[2];
    gambarBox.setAttribute("src", image);
    pertanyaanBox.innerHTML = pertanyaan;
    gantiSoal();
  }
  pertama();
} else {
  let scorePenantang = localStorage.getItem("scorePenantang");
  let namaPenantang = localStorage.getItem("namaPenantang");
  let lastScore = localStorage.getItem("last-score");
  let namaLastScore = localStorage.getItem("nama");

  console.log(scorePenantang === null);
  console.log(
    Number(scorePenantang) > Number(lastScore),
    Number(scorePenantang),
    Number(lastScore)
  );

  if (scorePenantang !== null) {
    if (Number(scorePenantang) > Number(lastScore)) {
      document.getElementById("scorePlayer1").innerHTML = scorePenantang;
      document.getElementById("player1Score").innerHTML = namaPenantang;
      localStorage.setItem("nama", `${namaPenantang}`);
      localStorage.setItem("last-score", `${scorePenantang}`);
    } else {
      document.getElementById("scorePlayer1").innerHTML = lastScore;
      document.getElementById("player1Score").innerHTML = namaLastScore;
    }
  } else {
    document.getElementById("scorePlayer1").innerHTML = lastScore;
    document.getElementById("player1Score").innerHTML = namaLastScore;
  }

  const mainLagi = document.getElementById("playAgainButton");
  mainLagi.addEventListener("click", function () {
    window.location.href = "index2.html";
  });
  
  const playAndReset = document.getElementById("playAndReset")
  playAndReset.addEventListener("click", function(){
    localStorage.removeItem("nama")
    localStorage.removeItem("last-score")
    let scorePenantang = localStorage.getItem("scorePenantang")
    if(scorePenantang !== null){
      localStorage.removeItem("scorePenantang")
      localStorage.removeItem("namaPenantang")
    }
    window.location.href = "index2.html";
  })

  const kritikSaran = document.getElementById("kritikSaran");
  kritikSaran.addEventListener("click", function () {
    window.location.href = "index2.html";
  });
}
