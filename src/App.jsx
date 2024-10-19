import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
// import InputComponent from './components/InputComponent/InputComponent';
// import RadioComponent from './components/RadioComponent/RadioComponent';
// import CheckboxComponent from './components/CheckboxComponent/CheckboxComponent';
// import SelectComponent from './components/SelectComponent/SelectCoponent';
// import RangeComponent from './components/RangeComponent/RangeComponent';
import TextareaComponent from './components/TextareaComponent/TextareaComponent';
import AccordionComponent from './components/component/AccordionComponent';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <InputComponent/> */}
     {/* <CommonComponent/> */}
     {/* <RadioComponent/> */}
     {/* <CheckboxComponent/> */}
     {/* <SelectComponent/> */}
     {/* <RangeComponent/> */}
     {/* <TextareaComponent/> */}
     <AccordionComponent/>
    </>
  )
}

export default App
