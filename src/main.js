import App from './App.html'
import test from './test'

const app = new App({ target: document.body })

export default app 

/** boiler plate to run test harness */
const el = document.createElement('div')
const btn = document.createElement('button')
btn.textContent = 'run test'
btn.addEventListener('click', function() {
  test()
})
el.appendChild(btn)
document.body.appendChild(el)