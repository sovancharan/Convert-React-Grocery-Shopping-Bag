import React from 'react'

import '../../../Componant/style.css'
import List from "../../../img/list.png"
import Busket from "../../../img/busket.png"
import Eclipse from "../../../img/Ellipse 1.png"

const Header = () => {
  return (
    <>
        
         {/* nav-bar  */}
    <div class="header  ">
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand text-danger font-italic ps-5 fs-2" href="#">groceryecho</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>
                    <span class="navbar-text pe-5 w-50">
                        <ul class="navbar-nav d-flex flex-row     justify-content-evenly nav-li-item">
                            <li class="nav-item d-flex text-dark">
                                <img class="nav-img" src={List} alt=""/>
                                <a class="nav-link active fs-5 fw-bolder" aria-current="page" href="#">list</a>
                            </li>
                            <li class="nav-item d-flex text-dark">
                                <img class="position-relative dot-img" src={Eclipse} alt=""/>
                                <img class="nav-img" src={Busket}alt=""/>
                                <a class="nav-link active fs-5 fw-bolder" href="#">Busket</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fs-5 text-success fw-bolder" href="#">Login</a>
                            </li>

                        </ul>
                    </span>
                </div>
            </div>
        </nav>
    </div>
    
    </>
  )
}

export default Header