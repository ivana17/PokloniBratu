function izlistaj() {
  // var ubaci = [
  //     {
  //         id: 0,
  //         naziv: "olovka",
  //         opis:"bla bla",
  //         slika:"../images/olovka.jpg",
  //         autor: "ale",
  //         mesto: "Beograd"
  //     },
  //     {
  //         id: 1,
  //         naziv: "ranac",
  //         opis:"Ranac majmuncic se poklanja jer moje dete nece da ga nosi",
  //         slika:"../images/ranac.jpeg",
  //         autor: "ale",
  //         mesto: "Beograd"
  //     }
  // ]
  // localStorage.setItem("oglasi", JSON.stringify(ubaci));

  //proveri da li je korisnik ulogovan
  var korime = localStorage.getItem("logged_in_user");
  if (korime == "") {
    // izbaci login formu
    document.getElementById("prazno").innerText =
      "Niste ulogovani. Molim Vas ulogujte se.";
    // $("#naslov").hide();
    return;
  }

  var listaOglasa = JSON.parse(localStorage.getItem("oglasi"));

  var korisnik = JSON.parse(localStorage.getItem(korime));

  var cnt = 0;

  korisnik.oglasi.forEach((id) => {
    listaOglasa.forEach((oglas) => {
      if (id == oglas.id) {
        cnt++;
        $("#prazno").hide();

        var naziv = oglas.naziv;
        var opis = oglas.opis;
        var srcslika = oglas.slika;
        var rezervian = oglas.rezervian;
        var mesto = oglas.mesto;

        var red = document.getElementById("dodavanje");
        red.innerHTML =
          red.innerHTML +
          `<div class="lg-3 col-lg-3 sm-3 col-sm-6">
                <div class="card" style="width: 20rem">
                  <img  src="` +
          srcslika +
          `"  class="card-img-top"  alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">` +
          naziv +
          `</h5>
                    <p class="card-text">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>` +
          mesto +
          `</p>` +
          `<a  class="btn" onclick="preusmeri(` +
          id +
          `)"> Detalji</a>
                    &nbsp;
                    <a  class="btn" onclick="rez()" id="rez1" > Pokloni</a>
                  </div>
                </div>
              </div>`;
      }
    });
  });
}

function rez() {
  Swal.fire({
    title:
      "Da li ste sigurni da zelite da poklonite ovaj predmet i uklonite oglas",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Da",
    denyButtonText: "Ne",
    cancelButtonTex: "Odustani",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Poklonjeno!", "", "success");
      document.getElementById("rez1").style.background = "red";
      document.getElementById("rez1").innerText = "Poklonjeno";
    } else if (result.isDenied) {
      Swal.fire("Niste poklonili", "", "info");
    }
  });
}
