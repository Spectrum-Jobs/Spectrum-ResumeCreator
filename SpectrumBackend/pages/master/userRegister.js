const router = require("express").Router();
const { User } = require("../../modals/User");
const {
  PHONE_NOT_FOUND_ERR,
  PHONE_ALREADY_EXISTS_ERR,
  USER_NOT_FOUND_ERR,
  INCORRECT_OTP_ERR,
  ACCESS_DENIED_ERR,
} = require("../../error");

const userRegister = async (req, res) => {
  const data = req.body;
  const errors = {};
  if (
    !data.firstName ||
    !data.lastName ||
    !data.email ||
    !data.password ||
    !data.mobileNumber ||
    data.firstName === "" ||
    data.lastName === "" ||
    data.email === ""
  ) {
    errors["inputError"] = "Fields not provided";
  }
  try {
    if (!data.firstName || !data.lastName || !data.email || !data.password) {
      return res.sendStatus(400);
    }
    // check duplicate phone Number
    let mail = data.email
    const emailExist = await User.findOne({ mail });

    if (emailExist) {
      res.json({ status: 400, message: "Email ID already exists!!!" });
      return;
    }
    let newuser = new User(data);
    newuser = await newuser.save();

    return res.status(200).json({ 
      type: "success",
      message: "Account created OTP sended to mobile number",
      user_id: newuser.id });
      // generate otp
    /*const otp = generateOTP(6);
    // save otp to user collection
    user.phoneOtp = otp;
    await user.save();
    // send otp to phone number
    await fast2sms(
      {
        message: `Your OTP is ${otp}`,
        contactNumber: user.mobileNumber,
      },
      next
    );*/

  } catch (error) {
    console.log(error);
  }
  return res.sendStatus(500);
};

module.exports = userRegister;
