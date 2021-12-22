// function oglas4() {
//   if (localStorage["rezervacije"] === undefined) {
//     localStorage["rezervacije"] = JSON.stringify([]);
//   }
//   let rezervacije = JSON.parse(localStorage["rezervacije"]);
//   rezervacije.push({
//     ID: 4,
//     rezervisao: localStorage["logged_in_user"],
//   });
//   localStorage["rezervacije"] = JSON.stringify(rezervacije);
//   document.getElementById("oglas4-button").disabled = true;
// }

function oglas1() {
  let user_obj = JSON.parse(localStorage["drasko1"]);
  user_obj.rez.push({
    ID: 1,
    rezervisao: localStorage["logged_in_user"],
  });
  localStorage["drasko1"] = JSON.stringify(user_obj);
  document.getElementById("oglas1-button").disabled = true;
  // rez dugme
  document.getElementById("rez1").style.visibility = true;
}

// function onRef4() {
//   let rezervacije = JSON.parse(localStorage["rezervacije"]);
//   rezervacije.forEach((element) => {
//     if (element.ID === 4) {
//       document.getElementById("oglas4-button").disabled = true;
//     }
//   });
// }

function onRef1() {
  let user_obj = JSON.parse(localStorage["drasko1"]);
  user_obj.rez.forEach((element) => {
    if (element.ID === 1) {
      document.getElementById("oglas1-button").disabled = true;
      // rez dugme
      document.getElementById("rez1").style.visibility = true;
    }
  });
}
