const { User } = require("../modals/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { AUTH_TOKEN_MISSING_ERR, AUTH_HEADER_MISSING_ERR, JWT_DECODE_ERR, USER_NOT_FOUND_ERR } = require("../../error")
let auth = (req, res, next) => {
  //let token = req.cookies.w_auth;
  
  let authHeader = req.headers.authorization;

  if (!header) {
    next({ status: 403, message: AUTH_HEADER_MISSING_ERR })
    return
}
  
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    const userId = verifyJwtToken(token,next)

    if (!userId) {
        next({ status: 403, message: JWT_DECODE_ERR })
        return
    }
    
    User.findById(token, (err, user) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!user)
       {return res.status(401).json("Unauthorized User");}
      req.user = user;
      next();
    });
  } 
  else {
    res.status(400).json("Pass the token");
  }

};

/*jwt.verify(token ,'secret',(err,user) => {
    if(err){
           return res.sendStatus(403);
    }
   req.user = user;
   next();
  });
}*/


const verifyJwtToken = (token, next) => {
  try {
    const { userId } = jwt.verify(token, JWT_SECRET);
    return userId;
  } catch (err) {
    next(err);
  }
}

const createJwtToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "12h" });
  return token;
};

module.exports = { auth };




module.exports = async (req, res, next) => {
    try {
        // check for auth header from client 
        const header = req.headers.authorization

        if (!header) {
            next({ status: 403, message: AUTH_HEADER_MISSING_ERR })
            return
        }

        // verify  auth token
        const token = header.split("Bearer ")[1]

        if (!token) {
            next({ status: 403, message: AUTH_TOKEN_MISSING_ERR })
            return
        }

        const userId = verifyJwtToken(token,next)

        if (!userId) {
            next({ status: 403, message: JWT_DECODE_ERR })
            return
        }

        const user = await User.findById(userId)

        if (!user) {
            next({status: 404, message: USER_NOT_FOUND_ERR })
            return
        }

        res.locals.user = user

        next()
    } catch (err) {
        next(err)
    }
}
