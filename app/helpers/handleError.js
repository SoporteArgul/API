const httpError=(res,req)=>{
    res.status(500)
    res.send({error:'Algo ha salido mal'})

}
module.exports={httpError}