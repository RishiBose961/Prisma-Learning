import prisma from "../DB/db.config.js";

export const createUser = async(req, res) =>{
    const {name,email,password} = req.body;

    const findUser = await prisma.user.findUnique({
        where:{
            email: email
        }
    })

    if(findUser){
        return res.status(400).json({message: 'User already exists'})
    }

    const newUser = await prisma.user.create({
        data:{
            name,
            email,
            password
        }
    })

    return res.status(200).json({data: newUser, message: 'User created'})
}