import axios from 'axios'

const info = async () =>{
 const data = await axios.get('http://localhost:2000/tables')
 console.log(data);
}

export{
  info
}