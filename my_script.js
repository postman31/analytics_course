var link = window.document.getElementById('link')
link.textContent = 'Modified text'
var listener = function (event) {
  event.preventDefault()
  var output = window.document.getElementById('link')
  output.textContent = 'I was clicked'
}
link.addEventListener('click', listener)
