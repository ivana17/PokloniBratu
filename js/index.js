function refreshList(){
  var listaOglasa = JSON.parse(localStorage.getItem("oglasi"));

  if (listaOglasa !== undefined){
    listaOglasa.forEach(oglas => {
      var id = oglas.id;
      var naziv = oglas.naziv;
      var opis = oglas.opis;
      var srcslika = oglas.slika;
      var rezervian = oglas.rezervian;
      var mesto = oglas.mesto;

     
      var red = document.getElementById("dodavanje");
      red.innerHTML = red.innerHTML + `<div class="lg-3 col-lg-3 sm-3 col-sm-6">
      <div class="card" style="width: 20rem">
        <img  src="` + srcslika + `"  class="card-img-top"  alt="..."/>
        <div class="card-body">
          <h5 class="card-title">` + naziv +
          `</h5>
          <p class="card-text">
            <i class="fa fa-map-marker" aria-hidden="true"></i>` +  mesto +
          `</p>` + 
          `<a  class="btn" onclick="preusmeri(` + id + `)"> Detalji</a>
        </div>
      </div>
    </div>`;
  });  
  }

    
}

