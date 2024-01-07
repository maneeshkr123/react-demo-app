const checkLogin = () => {
    const token = localStorage.getItem("authToken");

    if(token){
        return true;
    }

    return false;
}

module.exports = {
    checkLogin
}