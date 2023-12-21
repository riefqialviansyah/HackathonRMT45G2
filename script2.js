const formKritik = document.getElementById("formKritik");
const tombolSubmit = document.querySelector(".submit-button");
const balikMenu = document.getElementById("balikMenu");
const inputName = document.getElementById("inputName");
const inputKritik = document.getElementById("inputKritik");

function tampilkanKritik(data) {
  const labelBaru = document.createElement("label");
  const paragrafBaru = document.createElement("p");
  console.log(data);
    const divBaru = document.createElement("div")
    // divBaru.style.display = "flex"
    divBaru.style.justifyContent = "space-between"
    divBaru.style.backgroundColor = "aqua"
    divBaru.style.borderRadius = "10px"
    divBaru.style.margin = "10px"
    divBaru.style.padding = "5px"

  const tampilkanKritik = document.getElementById("tampilkanKritik");

  //   tampilkanKritik.innerHTML = ''
  //   for (let i = 0; i < data.length; i++) {
  //   }
  //   let perData = data[i];
  // console.log(perData);

  labelBaru.innerHTML = `Nama : ${data.Nama}`;
  paragrafBaru.innerHTML = `Kritik : ${data.Kritik}`;

  divBaru.appendChild(labelBaru);
  divBaru.appendChild(paragrafBaru);
//   tampilkanKritik.appendChild(labelBaru);
  tampilkanKritik.appendChild(divBaru);
}

function renderHasilKritik() {
  let kritikArray = localStorage.getItem("kritik");

  if (kritikArray !== null) {
    kritikArray = JSON.parse(kritikArray);

    for (let i = 0; i < kritikArray.length; i++) {
      tampilkanKritik(kritikArray[i]);
    }

    // tampilkanKritik(kritikArray)
    console.log(kritikArray);
  }
}

renderHasilKritik();

tombolSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const inputNameValue = inputName.value;
  const inputKritikValue = inputKritik.value;

  if (inputNameValue === "" || inputKritikValue === "") {
    alert("Data kamu belum lengkap");
  } else {
    let kritikSebelum = localStorage.getItem("kritik");
    if (kritikSebelum === null) {
      //   localStorage.setItem("namaKritik", `${inputNameValue}`);
      //   localStorage.setItem("descKritik", `${inputKritikValue}`);

      let tmp = {
        Nama: inputNameValue,
        Kritik: inputKritikValue,
      };

      //   const array = [inputNameValue, inputKritikValue];
      //   localStorage.setItem("testForm", JSON.stringify(array));

      let arrayKritik = [];
      arrayKritik.push(tmp);

      localStorage.setItem("kritik", JSON.stringify(arrayKritik));
      //   tampilkanKritik(arrayKritik);

      //   const tampilkanKritik = document.getElementById("tampilkanKritik");
      //   tampilkanKritik.innerHTML = "<p>Kritik</p>";
      //   for (let i = 0; i < arrayKritik.length; i++) {
      // }
      tampilkanKritik(arrayKritik[arrayKritik.length - 1]);
    } else {
      // const inputNameValue = inputName.value;
      // const inputKritikValue = inputKritik.value;

      let arrayKritik = JSON.parse(kritikSebelum);
      let tmp = {
        Nama: inputNameValue,
        Kritik: inputKritikValue,
      };
      arrayKritik.push(tmp);
      localStorage.setItem("kritik", JSON.stringify(arrayKritik));
      //   tampilkanKritik(arrayKritik);

      //   const tampilkanKritik = document.getElementById("tampilkanKritik");
      //   tampilkanKritik.innerHTML = "<p>Kritik</p>";
      //   for (let i = 0; i < arrayKritik.length; i++) {
      // }
      tampilkanKritik(arrayKritik[arrayKritik.length - 1]);
    }

    formKritik.reset();

    alert("Kritik Dan Saranmu telah masuk");
  }

  console.log(
    inputNameValue,
    typeof inputNameValue,
    typeof inputKritikValue,
    "<<<<NAMA",
    inputKritikValue,
    "<<< VALUE"
  );
});

balikMenu.addEventListener("click", () => {
  window.location.href = "index.html";
});

function balikKeMenu() {
  window.location.href = "index.html";
}
