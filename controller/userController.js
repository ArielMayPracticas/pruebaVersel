const db = require('../db/db');


const ObtenerTodosLosUsuarios = (req,res) => 
{
    const sql = 'SELECT * FROM tabla_usuarios_2';

    db.query(sql, (err,result) => 
    {
        if(err) throw err;

        res.json(result);
    });
}


const ObtenerUsuarioPorId = (req, res) =>{
    const {id} = req.params;
    const sql = 'SELECT * FROM tabla_usuarios_2 WHERE id = ?';
    db.query(sql,[id], (err,result) =>
    {
        if(err) throw err;        
        res.json(result);
    });
};


const crearUsuario = (req, res) =>{
    const {nombre,apellido,mail} = req.body;


    const sql = 'INSERT INTO tabla_usuarios_2 (nombre,apellido,mail) VALUES (?,?,?)';


    db.query(sql,[nombre,apellido,mail], (err,result) =>
    {
        if(err) throw err;


        res.json({
            mensaje : 'Usuario Creado',
            idUsuario: result.insertId
            });
    });
};






const ActualizarUsuario = (req, res) =>{
    const {id} = req.params;
    const {nombre,apellido,mail} = req.body;


    const sql = 'UPDATE tabla_usuarios_2 SET nombre = ?, apellido = ?, mail = ? WHERE id = ?';
    db.query(sql,[nombre,apellido,mail,id], (err,result) =>
    {
        if(err) throw err;


        res.json(
            {
                message : 'Usuario editado'
            });
    });


};


const BorrarUsuario = (req, res) =>{
    const {id} = req.params;
    const sql  = 'DELETE FROM tabla_usuarios_2 WHERE id= ?';
    db.query(sql,[id],(err,result) =>
    {
        if(err) throw err;


        res.json(
            {
                message: 'Usuario eliminado'
            });
    });
};


module.exports = 
{
    ObtenerTodosLosUsuarios,
    ObtenerUsuarioPorId,
    crearUsuario,
    ActualizarUsuario,
    BorrarUsuario
}
