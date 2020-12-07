function imageChange() {
  let image = document.getElementById("image");
  image.src = "imgs/meteorite_identification.png";
  setTimeout(imageChange2, 5000);
}

function imageChange2() {
  let image = document.getElementById("image");
  image.src = "imgs/scantron.png";
  setTimeout(imageChange, 5000);
}

setTimeout(imageChange, 5000);