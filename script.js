document.getElementById('button').addEventListener('click', calculateArea)
let number = 0
let width = number
let height = number

function calculateArea () {
  width = document.getElementById('width').value
  height = document.getElementById('height').value
  area = width * height
  document.getElementById('area').value = area
}
