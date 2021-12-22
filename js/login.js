function logrfr() {
  if (localStorage["logged_in_user"] !== "") {
    document.getElementById("login-button").style.display = "none";
    document.querySelector(".logged-in-user").innerHTML =
      localStorage["logged_in_user"];
    // document.getElementById("logout-button").style.display = "inline-block";
    document.getElementById("user-menu").style.display = "inline-block";
  } else {
    document.getElementById("login-button").style.display = "inline-block";
    document.querySelector(".logged-in-user").innerHTML = "";
    // document.getElementById("logout-button").style.display = "inline-block";
    document.getElementById("user-menu").style.display = "none";
  }
}

// Register
document.getElementById("login-button").addEventListener("click", () => {
  document.getElementById("login-modal").style.display = "block";
});

document.getElementById("register-button").addEventListener("click", () => {
  document.getElementById("login-modal").style.display = "none";
  document.getElementById("signup-modal").style.display = "block";
});

document.getElementById("signup-modal-close").addEventListener("click", () => {
  document.getElementById("signup-modal").style.display = "none";
});

document.getElementById("login-modal-close").addEventListener("click", () => {
  document.getElementById("login-modal").style.display = "none";
});

document.getElementById("user-menu").addEventListener("click", () => {
  document.getElementById("myPopup").classList.toggle("show");
});

document.getElementById("login-done-button").addEventListener("click", () => {
  let name = document.getElementById("login-name").value;
  let passw = document.getElementById("login-psw").value;
  if (name !== "" && passw !== "") {
    if (localStorage[name] === undefined) {
      alert("Korisnicko ime " + name + " ne postoji.");
    } else {
      let info = JSON.parse(localStorage[name]);
      if (info.lozinka !== passw) {
        alert("Pogresna lozinka. Pokusajte ponovo.");
      } else {
        localStorage["logged_in_user"] = name;
        location.reload();
      }
    }
  }
});

document.getElementById("signup-done-button").addEventListener("click", () => {
  let username = document.getElementById("signup-name").value;
  let passw = document.getElementById("signup-psw").value;
  let name = document.getElementById("signup-fname").value;
  let surname = document.getElementById("signup-sname").value;
  let number = document.getElementById("signup-num").value;

  if (name !== "" && passw !== "") {
    if (localStorage[name] === undefined) {
      localStorage["logged_in_user"] = username;
      localStorage[username] = JSON.stringify({
        lozinka: passw,
        ime: name,
        prezime: surname,
        broj: number,
        oglasi: [],
      });
      location.reload();
    } else {
      alert("Korisnicko ime " + name + " vec postoji");
    }
  }
});

document.getElementById("edit-profile").addEventListener("click", () => {
  alert("izmeni-podatke stranica");
});

document.getElementById("logout-button").addEventListener("click", () => {
  localStorage["logged_in_user"] = "";
  location.reload();
});
