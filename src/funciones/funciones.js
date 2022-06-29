import axios from 'axios'

const info = async (state) =>{
 const data = await axios.get('http://localhost:2000/tables')
 state(data.data);
}

export{
    info
}