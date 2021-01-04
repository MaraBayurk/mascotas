const { createAdmin, getOneAdmin, updateAdmin, deleteAdmin, getAllAdmins } = require("../controllers/AdminsController");

const router = require("express").Router();

router
    .route("/")

    .get((req,res)=>{
        getAllAdmins()
        .then(admins=> res.send(admins))
        .catch(err=> res.status(400).json(err))
    })

    .post((req,res)=>{
        let{name, email, password}= req.body;
        createAdmin(name,email,password)
        .then(admin=>res.send(admin))
        .catch(err=>res.status(400).json(err))
    })

router
    .route('/:id')

    .get((req,res)=>{
        let {id}= req.params;
        getOneAdmin(id)
        .then(admin=> res.send(admin))
        .catch(err=> res.status(400).json(err))
    })

    .put((req,res)=>{
        let {id}= req.params;
        let {name, email, password}= req.body;
        updateAdmin(id, name, email, password)
        .then(admin=> res.send(admin))
        .catch(err=> res.status(400).json(err))
    })
    
    .delete((req, res)=>{
        let {id}= req.params;
        deleteAdmin(id)
        .then((mensaje)=> res.send(mensaje))
        .catch(err=> res.status(400).json(err))
    })

module.exports = router;