document.getElementById('button').addEventListener('click', calculateArea)

function calculateArea () {
  width = document.getElementById("width").value
  height = document.getElementById("height").value
  area = width * height
  document.getElementById('area').value = area
}
