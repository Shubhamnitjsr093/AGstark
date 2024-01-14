import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setjokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((Response)=>{
      setjokes(Response.data);
    }).catch((e)=>{
       console.log(e);
    })
  })
  return (
    <>
    <h3>All Jokes</h3>
    
        <div>jokes:{jokes.length}</div>
        {
              
           jokes.map((joke,index)=>(
            <div key ={joke.id}>
               <p>{joke.title}</p>
            </div>
           ))
        }
            

    </>
  )
}

export default App
