const multer=require("multer")

const Storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb (null,'/home/mateo/Desktop/paper app/API/app/uploads/')
    },
    filename:(req,file,cb)=>{
        const ext=file.originalname.split('.').pop()
        cb(null,`${Date.now()}.${ext}`)
    }
})

module.exports={Storage}