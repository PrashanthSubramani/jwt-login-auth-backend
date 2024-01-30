const mongoose =require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
});

userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.statics.login = async function(email, password){

    const user = await this.findOne({email});

    if(user){
        const auth =await bcrypt.compare(password,user.password);
        if(auth){
            return user;
        }
        throw Error("Incorrect Password");
    }

    throw Error("Incorrect Email");
}


userSchema.statics.forget_password =async function(email){
    const user = await this.findOne({email});
    if(user){
        return user;
    }
    throw Error("USER_UNDEFINED");
}



module.exports = mongoose.model('Users',userSchema);