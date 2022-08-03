//rfc short form for react function based component
import React from "react";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Text_Utils-React/">
          {props.title}
        </Link>
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Text_Utils-React/">
                Home
              </Link>
              {/* <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Text_Utils-React/about">
                {props.about}
              </Link>
              {/* <Link className="nav-link" to="/about">
                {props.about}
              </Link> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px' , cursor:'pointer'}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px' , cursor:'pointer'}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px' , cursor:'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px' , cursor:'pointer'}}></div>

          </div> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexRadioCheckDefault" aria-checked="false"/>
            <label className="form-check-label" htmlFor="flexRadioCheckDefault">Dark Mode</label>
          </div>

          {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
            <input onClick={props.RedtoggleMode} className="form-check-input"  type="checkbox" role="switch" id="flexRadioCheckDefaultRed" />
            <label className="form-check-label" htmlFor="flexRadioCheckDefaultRed">Red Dark Mode</label>
          </div>

          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
            <input onClick={props.BluetoggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitcRadioDefaultBlue" />
            <label className="form-check-label" htmlFor="flexRadioCheckDefaultBlue">Blue Dark Mode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
            <input onClick={props.GreentoggleMode} className="form-check-input" type="checkbox" role="switch" id="flexRadioCheckDefaultGreen" />
            <label className="form-check-label" htmlFor="flexRadioCheckDefaultGreen">Green Dark Mode</label>
          </div> */}
            {/* checked={`${props.mode==='blue'?'false':'true'}`} */}


        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes={
    title :PropTypes.string.isRequired,
    about :PropTypes.string
}

Navbar.defaultProps={
    title: "Default title",
    about: "Default About"
}