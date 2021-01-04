
const { conn } = require("./src/db")
const app = require("./src/app")

conn.sync({force: true})
.then(e=>{
    console.log('conectado')
})

.then(()=>{
    app.listen(3001, () => {
        console.log("andando");    
    });
})



