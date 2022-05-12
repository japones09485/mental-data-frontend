const { Client } = require('pg')

const obtenerdatos1 = async () => {

const client = new Client()
await client.connect()
const res = await client.query("select * from satisfaccionsalud")
const result = res.rows[0].message;
await client.end();
return result;
}

obtenerdatos1().then((result)=>{
  console.log(result);
})
