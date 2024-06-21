const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
//   const token = req.headers.authorization.split(" ")[1];
//   console.log("token",req.headers);
//   if (token) {
//     const decoded = jwt.verify(token, "your_secret_key");
//     console.log("decoded", decoded);
//     if (decoded) {
//       const userID = decoded.userID;
     
//       req.body.userID = userID;
//       next();
//     } else {
//       res.send("Login first please1");
//     }
//   } else {
//     res.send("Login first please2");
//   }

const token = req.headers['authorization'];
console.log("token", token)
  if (!token) {
    return res.status(403).send({ message: 'No token provided!, Please Login first' });
  }

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'You are not authorized!, please login first!' });
    }

    req.userId = decoded.id;
    req.userEmail = decoded.email;
    next();
});
};

module.exports = { authenticate };
