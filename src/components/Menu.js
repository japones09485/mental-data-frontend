import React, {Component} from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../assets/images/logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" 




class Menu extends Component{

    render(){
        return(
            <header id="header mt-3">
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
            <div id="logo">
                <img src ={logo} className="App-logo"></img>
            </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Nosotros</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Datos de Salud</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contactenos</a>
                    </li>
                </ul>
              
                </div>
            
            </nav>
            </header>
         );
    }
}

export default Menu;