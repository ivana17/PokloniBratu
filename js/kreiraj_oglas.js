document.getElementById("publish-button").addEventListener("click", () => {
  let name = document.getElementById("publish-name").value;
  let desc = document.getElementById("publish-desc").value;
  let place = document.getElementById("publish-place").value;

  if (name !== "" && desc !== "" && place !== "") {
    if (localStorage["oglasi"] === undefined) {
      localStorage["oglasi"] = JSON.stringify([]);
    }
    let logged_in_user = localStorage["logged_in_user"];
    let oglasi = JSON.parse(localStorage["oglasi"]);
    let ID = 0;
    if (localStorage["lastID"] === undefined) {
      localStorage["lastID"] = 0;
    } else {
      ID = parseInt(localStorage["lastID"]) + 1;
      localStorage["lastID"] = ID;
    }
    oglasi.push({
      id: ID,
      naziv: name,
      opis: desc,
      slika: "../images/cvet.jpg",
      autor: logged_in_user,
      rezervisan: 0,
      mesto: place,
    });
    localStorage["oglasi"] = JSON.stringify(oglasi);

    let logged_in_user_obj = JSON.parse(localStorage[logged_in_user]);
    logged_in_user_obj.oglasi.push(ID);
    localStorage[logged_in_user] = JSON.stringify(logged_in_user_obj);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Upešno ste dodali oglas!",
      showConfirmButton: false,
      timer: 2500,
    });

    location.reload();
  }
});

function provera() {
  if (localStorage["logged_in_user"] === "") {
    document.getElementById("not-logged-text").style.display = "inline-block";
    document.getElementById("publish-form").style.display = "none";
  } else {
    document.getElementById("publish-form").style.display = "inline-block";
    document.getElementById("not-logged-text").style.display = "none";
  }
}
