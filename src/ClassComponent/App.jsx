import React, { Component } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default class App extends Component {
  constructor()
  {
    super()
    this.state={
      language:"hi",
      search:""
    }
    this.changeLanguage=this.changeLanguage.bind(this)
    this.changeSearch=this.changeSearch.bind(this)

  }
  changeLanguage(input)
  {
    this.setState({language:input})
  }
  changeSearch(input)
  {
    this.setState({search:input})
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}/>
          <Routes>
            <Route path="/" element={<Home search={this.state.search} language={this.state.language} q="All"/>}></Route>
            <Route path="/crime" element={<Home search={this.state.search} language={this.state.language} q="Crime"/>}></Route>
            <Route path="/politics" element={<Home search={this.state.search} language={this.state.language} q="Politics"/>}></Route>
            <Route path="/science" element={<Home search={this.state.search} language={this.state.language} q="Science"/>}></Route>
            <Route path="/technology" element={<Home search={this.state.search} language={this.state.language} q="Technology"/>}></Route>
            <Route path="/entertainment" element={<Home search={this.state.search} language={this.state.language} q="Entertainment"/>}></Route>
            <Route path="/sports" element={<Home search={this.state.search} language={this.state.language} q="Sports"/>}></Route>
            <Route path="/cricket" element={<Home search={this.state.search} language={this.state.language} q="Cricket"/>}></Route>
            <Route path="/ipl" element={<Home search={this.state.search} language={this.state.language} q="Ipl"/>}></Route>
            <Route path="/ecnomics" element={<Home search={this.state.search} language={this.state.language} q="Ecnomics"/>}></Route>
            <Route path="/international" element={<Home search={this.state.search} language={this.state.language} q="International"/>}></Route>
            <Route path="/india" element={<Home search={this.state.search} language={this.state.language} q="India"/>}></Route>
            <Route path="/jokes" element={<Home search={this.state.search} language={this.state.language} q="Jokes"/>}></Route>
            <Route path="/*" element={<Home search={this.state.search} language={this.state.language} q="All"/>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    )

  }
}
