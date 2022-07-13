import React from 'react'
import { Container } from 'react-bootstrap'
import NavbarData from '../../../Data/Navbar'

import '../../../Componant/style.css'
import List from "../../../img/list.png"
import Busket from "../../../img/busket.png"
import Eclipse from "../../../img/Ellipse 1.png"

const Header = () => {
  return (
    <>
        
         {/* nav-bar  */}
    <div className="header  ">
        <nav className="navbar navbar-expand-lg navbar-light ">
            {/* <div className="container-fluid"> */}
                <Container fluid>
                <a className="navbar-brand text-danger font-italic ps-5 fs-2" href="/">{NavbarData.NavbarHeader}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>
                    <span className="navbar-text pe-5 w-50">
                        <ul className="navbar-nav d-flex flex-row     justify-content-evenly nav-li-item">
                            <li className="nav-item d-flex text-dark">
                                <img className="nav-img" src={List} alt=""/>
                                <a className="nav-link active fs-5 fw-bolder" aria-current="page" href="/">{NavbarData.List}</a>
                            </li>
                            <li className="nav-item d-flex text-dark">
                                <img className="position-relative dot-img" src={Eclipse} alt=""/>
                                <img className="nav-img" src={Busket}alt=""/>
                                <a className="nav-link active fs-5 fw-bolder" href="/">{NavbarData.Busket}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fs-5 text-success fw-bolder" href="/">{NavbarData.Login}</a>
                            </li>

                        </ul>
                    </span>
                </div>

                </Container>
            {/* </div> */}
        </nav>
    </div>
    
    </>
  )
}

export default Header