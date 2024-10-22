import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import AlertComponent from './components/AlertComponent/AlertComponent';
import ButtonComponent from './components/Button/ButtonComponent ';
import TabsComponent from './components/TabsComponent/TabsComponent';
import TableComponent from './components/TableComponent/TableComponent';
import ToastComponent from './components/ToastComponent/ToastComponent';
import ProgressBarComponent from './components/ProgressBarComponent/ProgressBarComponent';
import PaginationComponent from './components/PaginationComponent/PaginationComponent';
import SpinnerComponent from './components/SpinnerComponent/SpinnerComponent';
import ModalComponent from './components/ModalComponent/ModalComponent';
import CardComponent from './components/CardComponent/CardComponent';
import BadgeComponent from './components/BadgeComponent/BadgeComponent';
import DropdownComponent from './components/DropdownComponent/DropdownComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
// import InputComponent from './components/InputComponent/InputComponent';
// import RadioComponent from './components/RadioComponent/RadioComponent';
// import CheckboxComponent from './components/CheckboxComponent/CheckboxComponent';
// import SelectComponent from './components/SelectComponent/SelectCoponent';
// import RangeComponent from './components/RangeComponent/RangeComponent';
// import TextareaComponent from './components/TextareaComponent/TextareaComponent';
// import AccordionComponent from './components/component/AccordionComponent';


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
     {/* <AccordionComponent/> */}
     {/* <AlertComponent/> */}
     {/* <ButtonComponent /> */}
     {/* <TabsComponent/> */}
     {/* <TableComponent/> */}
     {/* <ToastComponent/> */}
     {/* <ProgressBarComponent/> */}
     {/* <PaginationComponent/> */}
     {/* <SpinnerComponent/> */}
     {/* <ModalComponent/> */}
     {/* <CardComponent/> */}
     {/* <BadgeComponent/> */}
     {/* <DropdownComponent/> */}
     <NavbarComponent/>
    </>
  )
}

export default App
