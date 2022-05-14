import React, {Component} from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import btn2 from '../assets/images/btn_salud_mental-2.png';
import Pivot from "../components/Pivot";
import Menu from "../components/Menu";
import '../assets/css/App.css';




class Grafica1 extends Component{

    constructor() {
        super();
        this.state = { items: [] };
    }

   

    componentDidMount() {
        fetch('http://localhost:3000/tables')
        .then((response) => response.json())  
	    .then((dog) => console.log(dog));

    }



    render(){
        return(
            <div className="container-fluid">
                
                <div className="row">
               
                <header id="header">
                <Menu/>
                <img src = {btn2}  class="img-thumbnail m-2"></img>
                <h5> Salud Mental</h5>
                </header>
                </div>

                <div className="row">

                <div class="col-6">
                    <div class="abs-center mt-2">
                    <div className="graf1">
                    <Pivot></Pivot>
                </div>
                    </div>
                </div>
                </div>

              
            </div>
        )
           
}
}

export default Grafica1;