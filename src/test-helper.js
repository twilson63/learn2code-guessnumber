export default function (window, document, Component) {
  // add safe code here
  // validate window.MouseEvent and window.Event
  // validate document.createElement 
  // validate Component
  //
  var el = document.createElement('div')
  var $ = el.querySelector.bind(el)
  var c = new Component({ target: el })

  function text (selector) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        var target = $(selector)
        resolve(target ? target.textContent : '')
      }, 0)
    })
  }

  function click (selector) {
    var target = $(selector)
    if (target) {
      target.dispatchEvent(new window.MouseEvent('click'))
    }
  }

  function input (selector, value) {
    var target = $(selector)
    if (target) {
      target.value = value
      target.dispatchEvent(new window.Event('input'))
    }
  }
  
  return { text, click, input }
}

