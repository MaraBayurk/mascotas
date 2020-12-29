
const { conn } = require("./src/db")
const app = require("./src/app")

conn.sync({force: false})
.then(e=>{
    console.log('conectado')
})

.then(()=>{
    app.listen(3001, () => {
        console.log("andando");    
    });
})



