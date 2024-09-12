
import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const Register = async (req, res, next) => {

    const { username, email, password, firstName, lastName, ...rest } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try{
        const user = new User({
            username,
            email,
            password:hashedPassword,
            firstName,
            lastName,
            ...rest,
        })
        await user.save();
        res
        .status(201)
        .json({
            status:true,
            message: 'User created successfully',
            data:user
            
        });
    }catch{
        console.error(err);
        res.status(500).json({message:'Error creating user', error:err})
    }

//     const user = new User(req.body)


//     await user.save();
//     res
//         .status(201)
//         .json({
//             status: true,
//             message: 'User created successfully',
//             data: user
//         });

}