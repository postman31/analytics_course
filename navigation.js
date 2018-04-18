document.querySelectorAll('.row')
document.querySelectorAll('.row .accord-panel')
document.querySelectorAll('.row .accord-panel:first-child')

document.querySelectorAll('.row .accord-panel:first-child .price').forEach(function(el) {
console.log(el.textContent)
})



var nodeList = document.querySelectorAll('.row .accord-panel:first-child .price')

var someFunction = function () {
  //....
}

forEach(someFunction)  ==

someFunction(nodeList[0])
someFunction(nodeList[1])
someFunction(nodeList[2])
someFunction(nodeList[3])
someFunction(nodeList[4])
someFunction(nodeList[5])
someFunction(nodeList[6])
someFunction(nodeList[7])


someFunction()
someFunction

document.querySelectorAll('.row .accord-panel:first-child .price').forEach(function(el) {
 console.log(el.textContent)
})

document.querySelectorAll('.row .accord-panel:first-child .carousel-item a')
.forEach(function(el) {
  el.addEventListener('click', function(event){
    event.preventDefault()
    console.log(event.target)
  })
})

document.querySelectorAll('.row .accord-panel:first-child .carousel-item')
.forEach(function(el) {
  var price = el.querySelectorAll('.price')[0].textContent
  var name = el.querySelectorAll('.name')[0].textContent
  el.addEventListener('click', function(event){
    event.preventDefault()
    var label = name + ' ' + price
    console.log(name + ' ' + price + ' was clicked')
    //ga('send', 'event', 'eventCategory', 'eventAction', 'eventLabel')
    ga('send', 'event', 'product click', 'now buying', label)
  })
})


document.querySelector('.backorder').addEventListener('click', function(event) {
  var name = document.querySelector('h1[itemprop=name]').textContent
  // name
})


forEach(function(el, index))
