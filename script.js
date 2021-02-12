let number = 0

document.getElementById('button').addEventListener('click', calculateArea)

function calculateArea() {
  var width = document.getElementById("width").value
  var height = document.getElementById("height").value
  var area = width * height
  document.getElementById("area").value = area

}
