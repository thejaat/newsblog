import React, { useState} from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function App() {
 let[language,setLanguage]=useState("hi")
 let[search,setSearch]=useState("")
  function changeLanguage(input)
  {
    setLanguage(input)
  }
  function changeSearch(input)
  {
    setSearch(input)
  }
    return (
      <>
        <BrowserRouter>
          <NavBar changeLanguage={changeLanguage} changeSearch={changeSearch}/>
          <Routes>
            <Route path="/" element={<Home search={search} language={language} q="All"/>}></Route>
            <Route path="/crime" element={<Home search={search} language={language} q="Crime"/>}></Route>
            <Route path="/politics" element={<Home search={search} language={language} q="Politics"/>}></Route>
            <Route path="/science" element={<Home search={search} language={language} q="Science"/>}></Route>
            <Route path="/technology" element={<Home search={search} language={language} q="Technology"/>}></Route>
            <Route path="/entertainment" element={<Home search={search} language={language} q="Entertainment"/>}></Route>
            <Route path="/sports" element={<Home search={search} language={language} q="Sports"/>}></Route>
            <Route path="/cricket" element={<Home search={search} language={language} q="Cricket"/>}></Route>
            <Route path="/ipl" element={<Home search={search} language={language} q="Ipl"/>}></Route>
            <Route path="/ecnomics" element={<Home search={search} language={language} q="Ecnomics"/>}></Route>
            <Route path="/international" element={<Home search={search} language={language} q="International"/>}></Route>
            <Route path="/india" element={<Home search={search} language={language} q="India"/>}></Route>
            <Route path="/jokes" element={<Home search={search} language={language} q="Jokes"/>}></Route>
            <Route path="/*" element={<Home search={search} language={language} q="All"/>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    )

  }

