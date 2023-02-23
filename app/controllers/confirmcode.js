const UserScheme=require('../models/users')


exports.verifyUser = async (req, res, next) => {

  try{
    
    const user = await UserScheme.findOne(req.params)
    
    if (user==null){
      res.json({msg:"usuario no encontrado"})
    }else{
      // user.status='Active'
      // const expiresIn = 1000 * 60 * 60 * 60 * 24;
      // if((Date.now() - user.expires) > expiresIn) {
      //     await user.remove();
      //     return res.send('Su registro de usuario expiro');
      //   }
      user.save()
      res.send(`<html> <body><h1> Bienvenido ${user.name} </h1><button>Pulse aqui para ingresar!!</button></h1></body></html>`);
      // res.json({msg:"Usuario activado de forma correcta!"})
      
      
      
    }
  }catch (error) {
    console.log(error);
    return res.json({
        success: false,
        msg: 'Error al confirmar usuario'
    });
  
  }}
  
  