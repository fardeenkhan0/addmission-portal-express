class FrontController{
static login = async(req,res)=>{
    try {
        res.send("login page")
    } catch (error) {
        console.log(error )
    }
}

static about = async(req,res)=>{
    try {
        res.send("about page")
    } catch (error) {
        console.log(error )
    }
}

static register = async(req,res)=>{
    try {
        res.send("register page")
    } catch (error) {
        console.log(error )
    }
}

static dashboard = async(req,res)=>{
    try {
        res.send("dashboard page")
    } catch (error) {
        console.log(error )
    }
}

}
module.exports=FrontController