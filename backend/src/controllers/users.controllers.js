import { User } from "../models/users.js";

const registerUser = async(req, res) =>{
    try {
        const{username,email,password} = req.body;

        if(!username || !password ||!email ){
            return res.status(400).json({message: "All fields are needed to be field"})
        
    }

    //check if the user already exist
    const existing = await User.findOne({email:email.toLowerCase()});
    if (existing){
        return res.status(400).json({message:"User alredy exists"})
    }

    //create user 
    const user = await User.create({
        username,
        email: email.toLowerCase(),
        password,
        loggedIn: false,

    })

    res.status(201).json
    ({
        message:"User Registered",
        user: {id:user._id, email: user.email, username: user_name}
    })

}
    
    catch (error) {
        res.status(500).json ({messag: "Server Error",error: error.message})
        
    }
};
 export{
    registerUser
 }
