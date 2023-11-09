const db= require('../db') 

//obtener los usuarios
const getUsers = (req,res) =>{
    let query = "Select * from student;"

    db.query(query, (err, row) =>{
        if(!err){
            res.json({msg:row})
        }else{
            res.status(404).json({ msg: "Not Foud 😕" })
        }
    })
}

// user especifico
const getIdUsers = (req,res) =>{
    const { id } = req.params;
    
    let query = `Select * from student where id = ${id};` 
    
    db.query(query, (err, row) =>{
        if(!err){
            res.status(200).json({msg:row})
        }else{
            res.status(404).json({ msg: "Not Foud 😕" })
        }
    })
}

//Registrar usuarios
const postUser = (req, res) => {
  const { id, first_name, last_name, tel, email, attendat_name, attendat_tel } =
    req.body;

  //Verficar si existe usuario
  let query = `SELECT * FROM student where id= ${id};`;
  db.query(query, (err, row) => {
    if (!err) {
      if (row.length <= 0) {
        //insertar estudiante
        let query1 = `INSERT INTO student (id, first_name, last_name, tel, email, attendat_name, attendat_tel, state)  values (${id},"${first_name}", "${last_name}", "${tel}", "${email}", "${attendat_name}", "${attendat_tel}", "A");`;
        db.query(query1, (err, row) => {
          if (!err) {
            res.status(201).json({
              msg: "Usuario Creado",
              User: {
                idStudent: row.insertId,
                id: id,
                name: `${first_name} ${last_name}`,
              },
            });
          } else {
            res.status(500).json({ msg: "Error del servidor 😕" });
          }
        });
      }else{
        res.status(409).json({msg:"El usuario ya existe"})
      }
    } else {
      res.status(500).json({ msg: "Error del servidor 😕" });
    }
  });
};

//Modificar usuario
const putUser = (req,res) => {

}

//Eliminar usuarios
const deleteUser = (req, res) => {
  const { id } = req.params

  let query = `DELETE FROM student where id = ?`

  db.query(query, [id], (err, row) => {
    if (!err) {
      if (row.affectedRows) {
        res.status(200).json({ msg: "Usuario Eliminado" })
      } else {
        res.status(404).json({ msg: "El usuario no fue encontrado" })
      }
    } else {
      res.status(500).json({ msg: "Error del servidor 😕" })
    }
  })
}

module.exports = {
    getUsers,
    getIdUsers,
    postUser,
    putUser,
    deleteUser
}