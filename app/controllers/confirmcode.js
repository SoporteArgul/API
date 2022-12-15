const UserScheme=require('../models/users')


exports.verifyUser = async (req, res, next) => {

  try{
    
    const user = await UserScheme.findOne(req.params)
    
    if (user==null){
      res.json({msg:"usuario no encontrado"})
    }else{
      user.status='Active'
      console.log(user)
      user.save()
      res.json({msg:"Usuario activado de forma correcta!"})
      // res.redirect('http://localhost:3001/app/v1/login')
    }
  }catch (error) {
    console.log(error);
    return res.json({
        success: false,
        msg: 'Error al confirmar usuario'
    });
  
  }}
  
  