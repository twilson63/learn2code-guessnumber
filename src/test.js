/* global tape */
const test = tape
import App from './App.html'
import helper from './test-helper'


export default function () {
  const { text, input, click } = helper(window, document, App)
  
  test('testing...', async t => {
    const label = await text('label')
    
    t.equal(label, 'Enter a guess:')
    
    input('#guessField', 50)
    click('.guessSubmit')
    
    var guesses = await text('p.guesses')
    
    t.equal(guesses, 'Previous guesses: 50 ')
    
    var lowOrHi = await text('p.lowOrHi')
    
    if (lowOrHi === 'Last guess was too low!') {
      input('#guessField', 75)
      click('.guessSubmit')
      guesses = await text('p.guesses')
      t.equal(guesses, 'Previous guesses: 50 75 ')
    } else {
      input('#guessField', 25)
      click('.guessSubmit')
      guesses = await text('p.guesses')
      t.equal(guesses, 'Previous guesses: 50 25 ')
    }
    var result = await text('p.lastResult')

    t.end()
  })
}
