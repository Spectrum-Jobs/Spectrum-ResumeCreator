const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const moment = require("moment");
require("dotenv").config();
/*const autoIncrement = require('mongoose-auto-increment')
const {mongo_config} = require('../config/config')
const connection = mongoose.createConnection(mongo_config.mongoURI)
autoIncrement.initialize(connection);*/

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, maxlength: 50 },
    lastName : { type: String, required: true, maxlength: 50 },
    email: { type: String, required: true, trim: true, unique: true },
    mobileNumber : { type : Number, unique: true, required : true },
    password: { type: String, required: true,  unique : true },
    phoneOtp : {type : Number, unique:true}
    //OTP part need to be searched
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  var user = this;

  if (user.isModified("password")) {
    // console.log('password changed')
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  var user = this;
  console.log("user", user);
  //var userId = user._id.toHexString()
  //console.log('userSchema', userSchema)
  let token = jwt.sign(user._id.toHexString(), process.env.JWT_SECRET_KEY );
  //let token =  jwt.sign( userId + user.name +user.email + user.password ,'secret')

  console.log(token);
  var oneHour = moment().add(1, "hour").valueOf();

  user.tokenExp = oneHour;
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findById = function (token, cb) {
  var user = this;

  jwt.verify(token,process.env.JWT_SECRET_KEY , function (err, decode) {
    user.findOne({"_id": decode, }, function (err, user) {
     // console.log(  "Id",user._id);
      if (err) return cb(err);
      cb(null, user);

    });
  });
};

/*userSchema.plugin(autoIncrement.plugin, {
  model: 'User',
  
})*/

const User = mongoose.model("User", userSchema);

module.exports = { User };
