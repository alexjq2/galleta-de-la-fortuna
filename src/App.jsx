
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
  const [ran, setRan] = useState(0)
  const ranBack = () => {
    if (ran < images.length - 1) {
      setRan(ran + 1)
    } else {
      setRan(0)
    }
    }
  
  const random = () => {
  const aleatory = Math.floor(Math.random() * phrase.length - 1) + 1;
  setIndex(aleatory) 
    }
    const handleButtonClick = () => {
      ranBack();
      random();
    };
  
  document.body.style = `background-image: url(${images[ran]})`

  return (
    <article className='container'>
      <h1>GALLETAS DE LA FORTUNA</h1>
      <FortuneCookie data={phrase [index]}/>
      <div className='btn_phrase'>
        <button onClick={handleButtonClick}>
          <img src="/cookie.png" alt="img-cookie" />
        </button>
      </div>
    </article>
  )
}

export default App
