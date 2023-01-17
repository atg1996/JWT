require("dotenv").config();
const jwt = require("jsonwebtoken");

const CustomAPIError = require("../errors/custom-error")

const login = async (req,res) => {
try {
    const {username,password} = req.body;

    if(!username || !password) {
        
    throw new CustomAPIError("please provide login and password ", 400)
    }
    
    //dummy Id 
    const id = new Date().getDate();
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      })
    
      res.status(200).json({ msg: 'user created', token })
}
    catch (error){
console.log(error);
    }

}

const dashboard = async (req,res) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new CustomAPIError("No Token Provided", 401)
    }

    const token = authHeader.split(' ')[1];

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        const number = Math.floor(Math.random()*100);
        res.status(200).json({msg:`hello ${decoded.username}`, secret:`your lucky number is ${number}`});

    } catch(error) {
        throw new CustomAPIError("Not authorized access to this route", 401)
    }
    

    

}


module.exports = {login, dashboard}