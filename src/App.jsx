import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import InputComponent from './components/InputComponent/InputComponent';
import RadioComponent from './components/RadioComponent/RadioComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <InputComponent/> */}
     {/* <CommonComponent/> */}
     <RadioComponent/>
    </>
  )
}

export default App
