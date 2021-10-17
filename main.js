let points = document.getElementsByClassName("score");

for (el of points) {
  points = parseInt(el.innerText);

  if (points > 100 && points < 200) {
    el.style["color"] = "orange";
  }

  if (points > 200) {
    el.style["color"] = "red";
    el.innerText = `${el.innerText} 🔥`;
    // get the closest parent tr element of the point span, then find it's child td and change it's css to make the text bold
    $(el).closest("tr").prev().find("td").css("font-weight", "bold");
  }
}

window.addEventListener("load", myMain, false);
