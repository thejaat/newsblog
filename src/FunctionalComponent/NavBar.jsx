import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
  let [search, setSearch] = useState("")
  function postSearch(e) {
    e.preventDefault();
    props.changeSearch(search)
    setSearch("");
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary background sticky-top">
      <div className="container-fluid">
        < NavLink className="navbar-brand text-light " to="/" onClick={() => props.changeSearch("")}>NewsApp</NavLink>
        <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="material-symbols-outlined">
            menu
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item"><NavLink className="nav-link text-light" to="/all" onClick={() => props.changeSearch("")}>All</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link bg-danger text-white" : "nav-link text-light"} to="/politics" onClick={() => props.changeSearch("")}>politics</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" to="/crime" onClick={() => props.changeSearch("")}>Crime</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" to="/science" onClick={() => props.changeSearch("")}>Science</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" to="/technology" onClick={() => props.changeSearch("")}>Technology</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" to="/entertainment" onClick={() => props.changeSearch("")}>Entertainment</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" to="/sports" onClick={() => props.changeSearch("")}>Sports</NavLink></li>

            <li className="nav-item dropdown">
              <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Other
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item " to="/cricket" onClick={() => props.changeSearch("")}>Cricket</NavLink></li>
                <li><NavLink className="dropdown-item " to="/ipl" onClick={() => props.changeSearch("")}>IPL</NavLink></li>
                <li><NavLink className="dropdown-item " to="/ecnomics" onClick={() => props.changeSearch("")}>Ecnomics</NavLink></li>
                <li><NavLink className="dropdown-item " to="/international" onClick={() => props.changeSearch("")}>International</NavLink></li>
                <li><NavLink className="dropdown-item " to="/india" onClick={() => props.changeSearch("")}>India</NavLink></li>
                <li><NavLink className="dropdown-item " to="/jokes" onClick={() => props.changeSearch("")}>Jokes</NavLink></li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Language
              </a>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item " onClick={() => props.changeLanguage("hi")} >Hindi</button></li>
                <li><button className="dropdown-item " onClick={() => props.changeLanguage("en")} >English</button></li>

              </ul>
            </li>

          </ul>
          <form className="d-flex" role="search" onSubmit={(e) => postSearch(e)}>
            <input className="form-control me-2" value={search}name="search" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

