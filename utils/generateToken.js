const  jwt = require("jsonwebtoken");
const JWT_SECRET = 'Vjhr34t34tubfiub*&TITCiunfiewoboyguoybfv3q87gOYV*G*)bffo3qy(^(*BIfwjhvHV'

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports= generateToken;