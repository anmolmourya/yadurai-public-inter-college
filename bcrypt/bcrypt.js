const bcrypt = require('bcrypt');
module.exports = {
    hash : async (pass)=>{
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(pass , salt);
        return hashpassword;
    }
}