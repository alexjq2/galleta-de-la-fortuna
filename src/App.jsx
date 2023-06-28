
import './App.css'
import FortuneCookie from './components/CardCookie'
import phrase from './data/phrases.json'
import {useState} from 'react'

function App() {
  const images = [
    'fondo1.jpg',
    'fondo2.jpg',
    'fondo3.jpg',
    'fondo4.jpg'
  ]
  const [index, setIndex] = useState(0)
  const random = () => {
  const aleatory = Math.floor(Math.random() * phrase.length - 1) + 1;
  setIndex(aleatory) 
    }
  document.body.style = `background-image: url(${images[3 - (index % 3)]})`

  return (
    <article className='container'>
      <FortuneCookie data={phrase [index]}/>
      <div className='btn_phrase'>
        <button onClick={random}>Otro</button>
      </div>
    </article>
  )
}

export default App
