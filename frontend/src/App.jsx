import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppPage from '../pages/Apppage'
import NotePage from '../pages/notePage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppPage/>}/>
          <Route path='/note' element={<NotePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
