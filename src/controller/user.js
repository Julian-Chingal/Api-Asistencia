const db= require('../db') 

const getUsers = (req,res) =>{
    let query = "Select * from student;"

    db.query(query, (err, row) =>{
        if(!err){
            res.json({msg: row})
        }else{
            res.status(404).json({ msg: "Not Foud 😕" })
        }
    })
}

const getIdUsers = (req,res) =>{
    const { id } = req.params;
    
    let query = `Select * from student where idStudent = ${id};` 
    
    db.query(query, (err, row) =>{
        if(!err){
            res.json({msg:row})
        }else{
            res.status(404).json({ msg: "Not Foud 😕" })
        }
    })
}

const user_register = (req,res)=>{
    const {first_name, last_name, tel, email, attendat_name, attendat_tel} = req.body

    let query = `INSERT INTO student (first_name, last_name, tel, email, attendat_name, attendat_tel, state)  values ("${first_name}", "${last_name}", "${tel}", "${email}", "${attendat_name}", "${attendat_tel}", "A");`
    
    db.query(query, (err,row) => {
        if(!err){
            res.json({msg: 'Usuario Creado', idUser: row.insertId})
        }else {
            res.status(500).json({ msg: "Error del servidor 😕" })
        }
    })
}


module.exports = {
    getUsers,
    getIdUsers,
    user_register
}