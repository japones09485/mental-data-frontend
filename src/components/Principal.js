import React, {Component} from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import btn1 from '../assets/images/btn_demografia-1.png';
import btn2 from '../assets/images/btn_salud_mental-2.png';
import btn3 from '../assets/images/btn_enf_cronicas-1.png';
import btn4 from '../assets/images/btn_salud_laboral-1.png';
import btn5 from '../assets/images/btn_seg_alimentaria-1.png';
import btn6 from '../assets/images/btn_enf_transmisibles-1.png';
import btn7 from '../assets/images/btn_salud_sexual-2.png';
import btn8 from '../assets/images/btn_salud_ambiental-1.png';
import btn9 from '../assets/images/btn_emergencias-2.png';
import btn10 from '../assets/images/btn_oferta_servicios_salud-1.png';
import btn11 from '../assets/images/btn_desarrollo_sostenible-1.png';
import btn12 from '../assets/images/Enlaces-de-interés.png';
import Menu from "../components/Menu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" 




class Principal extends Component{

    render(){
        return(
           
            <div class="container-fluid">
                 <Menu/>
            <div class="row mt-3">
               
                    <div class="col">
                                <Link to="/rutaG1" className="link">
                                <img src ={btn1} className="Icon_front m-1"></img>
                                <br></br>
                                    Demografía y Salud</Link>
                    </div>
                    <div class="col">
                    <div id="logo">
                    <Link to="/rutaG2" className="link">
                                <img src ={btn2} className="Icon_front m-1"></img>
                                <br></br>
                                    Salud Mental</Link>
                            </div>
                    </div>
                    <div class="col">
                    <div id="logo">
                    <img src ={btn3} className="Icon_front m-1"></img>
                    <h5>Enfermedades Crónicas y No Transmisibles</h5>
                            </div>
                    </div>

                    <div class="col">
                    <div id="logo">
                    <img src ={btn4} className="Icon_front m-1"></img>
                    <h5>Salud Laboral</h5>
                    </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                    <div id="logo">
                        <img src ={btn5} className="Icon_front m-1"></img>
                        <h5>Seguridad Alimentaria y Nutricional</h5>
                    </div>
                    </div>
                    <div class="col">
                    <div id="logo">
                    <img src ={btn6} className="Icon_front m-1"></img>
                    <h5>Enfermedades Transmisibles</h5>
                            </div>
                    </div>

                    <div class="col">
                    <div id="logo">
                                <img src ={btn7} className="Icon_front m-1"></img>
                                <h5>Salud Sexual y Reproductiva</h5>
                            </div>
                    </div>

                    <div class="col">
                    <div id="logo">
                          <img src ={btn8} className="Icon_front m-1"></img>
                          <h5>Salud Ambiental</h5>
                            </div>
                    </div>

                   
                </div>

                <div class="row">

                <div class="col">
                    <div id="logo">
                    <img src ={btn9} className="Icon_front m-1"></img>
                    <h5>Emergencias y Desastres</h5>
                            </div>
                    </div>

                    <div class="col">
                    <div id="logo">
                    <img src ={btn10} className="Icon_front m-1"></img>
                    <h5>Oferta de Servicios de Salud</h5>
                            </div>
                    </div>
                    <div class="col">
                    <div id="logo">
                    <img src ={btn11} className="Icon_front m-1"></img>
                    <h5>Desarrollo Sostenible y Salud</h5>
                            </div>
                    </div>
                    <div class="col">
                    <div id="logo">
                    <img src ={btn12} className="Icon_front m-1"></img>
                    <h5>Enlaces de interés</h5>
                            </div>
                    </div>

                 
                </div>
            </div>
        )
           
}
}

export default Principal;