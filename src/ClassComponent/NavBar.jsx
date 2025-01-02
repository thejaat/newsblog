import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  constructor()
  {
    super()
    
      this.state={search:""}
    
  }
  postSearch(e)
  {
    e.preventDefault();
    this.props.changeSearch(this.state.search)
    this.setState({search:""});
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary background sticky-top">
  <div className="container-fluid">
    < NavLink className="navbar-brand text-light " to="/" onClick={()=>this.props.changeSearch("")}>NewsApp</NavLink>
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="material-symbols-outlined">
menu
</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item"><NavLink className="nav-link text-light" to="/all" onClick={()=>this.props.changeSearch("")}>All</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" to="/politics" onClick={()=>this.props.changeSearch("")}>politics</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" to="/crime" onClick={()=>this.props.changeSearch("")}>Crime</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" to="/science" onClick={()=>this.props.changeSearch("")}>Science</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" to="/technology" onClick={()=>this.props.changeSearch("")}>Technology</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" to="/entertainment" onClick={()=>this.props.changeSearch("")}>Entertainment</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link text-light" to="/sports" onClick={()=>this.props.changeSearch("")}>Sports</NavLink></li>
       
        <li className="nav-item dropdown">
          <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </a>
          <ul className="dropdown-menu">
          <li><NavLink className="dropdown-item " to="/cricket" onClick={()=>this.props.changeSearch("")}>Cricket</NavLink></li>
          <li><NavLink className="dropdown-item " to="/ipl" onClick={()=>this.props.changeSearch("")}>IPL</NavLink></li>
          <li><NavLink className="dropdown-item " to="/ecnomics" onClick={()=>this.props.changeSearch("")}>Ecnomics</NavLink></li>
          <li><NavLink className="dropdown-item " to="/international" onClick={()=>this.props.changeSearch("")}>International</NavLink></li>
          <li><NavLink className="dropdown-item " to="/india" onClick={()=>this.props.changeSearch("")}>India</NavLink></li>
          <li><NavLink className="dropdown-item " to="/jokes" onClick={()=>this.props.changeSearch("")}>Jokes</NavLink></li>
          </ul>
        </li>
        <li className='nav-item dropdown'>
        <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul className="dropdown-menu">
          <li><button className="dropdown-item " onClick={()=>this.props.changeLanguage("hi")} >Hindi</button></li>
          <li><button className="dropdown-item " onClick={()=>this.props.changeLanguage("en")} >English</button></li>
         
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=>this.postSearch(e)}>
        <input className="form-control me-2" value={this.state.search} name="search" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>this.setState({search:e.target.value})}/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
  }
}
