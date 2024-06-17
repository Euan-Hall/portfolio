import './App.css'
import AboutPage from './AboutPage'
import ProjectPage from './ProjectPage'
import HomePage from './HomePage'
import PhotosPage from './PhotosPage'
import Navb from './components/nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Navb/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/photos" element={<PhotosPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
