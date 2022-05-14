import React, {Component} from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import btn1 from '../assets/images/btn_demografia-1.png';
import BarChart from "../components/BarChart";
import Menu from "../components/Menu";
import Pivot from '../components/Pivot';
import '../assets/css/App.css';




class Grafica1 extends Component{

    

    constructor() {
        super();
        this.state = { items: [] };
    }

   

    componentDidMount() {
        fetch('http://localhost:2000/tables')
        .then((response) => response.json())  
	    .then((dog) => console.log(dog));

    }



    render(){
        return(
            <div className="container-fluid">
                
                <div className="row">
                <header id="header">
                <Menu/>
                <img src = {btn1}  class="img-thumbnail m-2"></img>
                <h5> Demografía y Salud</h5>
                </header>
                </div>

                <div className="row">

                <div class="col-12">
                    <div class="abs-center mt-2">
                    <div>
                   <Pivot />
                   </div>
                    </div>
                </div>
                </div>

              
            </div>
        )
           
}
}

export default Grafica1;