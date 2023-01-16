const login = async (req,res) => {
    res.send("Fake Login/Register/Signup")
}

const dashboard = async (req,res) => {
    const number = Math.floor(Math.random()*100);
    res.status(200).json({msg:`hello man`, secret:`your lucky number is ${number}`});
}


module.exports = {login, dashboard}