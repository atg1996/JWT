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

    const number = Math.floor(Math.random()*100);
    res.status(200).json({msg:`hello man`, secret:`your lucky number is ${number}`});

}


module.exports = {login, dashboard}