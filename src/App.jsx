import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import InputComponent from './components/InputComponent';
import CommonComponent from './components/CommonComponent';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <InputComponent/>
     {/* <CommonComponent/> */}
    </>
  )
}

export default App
